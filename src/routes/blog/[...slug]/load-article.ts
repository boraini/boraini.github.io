import { pageImport } from "../page-import";

/** Load an article as a Svelte component and metadata.
 * 
 * @param params an object which should have a slug field
 * @returns an object
 */
export async function loadArticle({ params }) {
    let mySlug = params.slug;

    if (mySlug.endsWith("/")) {
        mySlug = mySlug.substring(0, mySlug.length - 1);
    }

    const article = pageImport[mySlug + ".md"];

    return {
        component: article.default,
        metadata: article.metadata,
    };
}