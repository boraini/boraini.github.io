import { pageImport, urlImport } from "../page-import";

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
    const metadata = { ...article.metadata };
    let pageType = "article";

    if (mySlug.startsWith("authors")) {
        pageType = "author";
    }

    if (metadata.thumbnail) {
        let thumbnail;
        if (metadata.thumbnail.startsWith("./")) {
            thumbnail = urlImport[article.metadata.assetPath + (article.metadata.assetPath?.endsWith("/") ? "" : "/") + metadata.thumbnail.replace("./", "")];
        } else {
            thumbnail = article.metadata.thumbnail;
        }
        metadata.thumbnail = thumbnail;
    }

    return {
        component: article.default,
        metadata: metadata,
        pageType: pageType,
    };
}