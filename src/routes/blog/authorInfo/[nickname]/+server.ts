import { json } from '@sveltejs/kit';
import { pageImport } from '../../page-import.js';

export const trailingSlash = "always";

/** Gets the author info metadata for the given nickname
 * 
 * @param nickname the nickname that matches to one of the md files under src/articles/authors
 * @returns the metadata with a author page URL appended
 */
async function loadAuthor(nickname: string) {
    const authorMetadata = pageImport[`authors/${nickname}.md`].metadata;
    return {
        ...authorMetadata,
        page: "/blog/authors/" + nickname + "/"
    };
}

export async function GET({ params }) {
    const nickname = params.nickname;

    return json(await loadAuthor(nickname))
};