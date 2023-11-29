import type { WithMetadata } from "$lib/util/metadata";
import { pageImport } from "../../../page-import";
import { json } from '@sveltejs/kit';
import { shouldNotIndex } from "../../should-not-index";
import { preprocessMetadata } from "../../../[...slug]/load-directory";

/** Each value is a comparison function used for sorting. */
const comparers: Record<string, (a: WithMetadata, b: WithMetadata) => boolean> = {
    newest(a: WithMetadata, b: WithMetadata) {
        return getArticleDate(a) - getArticleDate(b) > 0;
    }
}

/** Returns a Date object for the article, or returns a very old date and prints a warning. */
function getArticleDate(article: WithMetadata) {
    const date = Date.parse(article.metadata.date!);
    if (isNaN(date)) {
        //throw "illegal date for article " + article.metadata.title;
        console.warn("illegal date for article " + article.metadata.title);
        return new Date("1970-1-1");
    }
    return date;
}

/** Finds the minimum out of articles according to which article
 * returns the most ***trues*** on the LHS of a comparer.
 * 
 * The comparer is chosen out of the comparers by the trait argument.
 */
async function aggregateByTrait(trait: string, fetch) {
    const comparer = comparers[trait];

    if (!comparer) return { status: 400 };

    const result2 = Object.entries(pageImport)
        .filter(([name, _]) => name.endsWith(".md"))
        .filter(([name, _]) => !shouldNotIndex(name))
        .reduce<[string | null, WithMetadata]>(
            (current, handled) => comparer(handled[1], current[1]) ? handled : current, [null, {
                metadata: {
                    title: "COMPARE DUMMY",
                    date: "1970-1-1",
                }
            } satisfies WithMetadata]
        );

    const result = await preprocessMetadata({...result2[1].metadata}, fetch);
    
    return {
        [result2[0]!.replace(/\.md$/, "")]: result
    };
}

export async function GET({ params, fetch }) {
    return json(await aggregateByTrait(params.trait, fetch));
}