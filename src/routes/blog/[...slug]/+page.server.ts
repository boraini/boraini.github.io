import path from "node:path/posix";
import fs from "node:fs/promises";
import { loadDirectory } from "./load-directory";
import { redirect } from "@sveltejs/kit";

async function isArticleFn(slug: string) {
    let myPath = path.join("src/articles", slug);

    if (myPath.endsWith("/")) {
        myPath = myPath.substring(0, myPath.length - 1);
    }

    const stat = await fs.stat(myPath + ".md").catch(() => null);

    return !!stat?.isFile;
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