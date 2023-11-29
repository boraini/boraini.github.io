import { loadDirectory } from "./load-directory";
import { redirect } from "@sveltejs/kit";
import { pageImport } from "../page-import";

async function isArticleFn(slug: string) {
    const mySlug = (slug.endsWith("/") ? slug.substring(0, slug.length - 1) : slug) + ".md";

    return mySlug in pageImport;
}

export async function load(arg) {
    if (arg.params.slug === "authors/") {
        throw redirect(302, "/blog/");
    }
    const isArticle = await isArticleFn(arg.params.slug);

    return { 
        isArticle,
        index: !isArticle && await loadDirectory(arg),
    };
}