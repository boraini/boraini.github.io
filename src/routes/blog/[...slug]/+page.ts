import { loadArticle } from "./load-article";

export const prerender = true;

// The data for a directory index has to be produced server-side,
// while the Markdowns should be imported in the page context since they are not serializable.
export async function load(arg) {
    if (arg.data.isArticle) {
        return loadArticle(arg);
    } else {
        return arg.data.index;
    }
}