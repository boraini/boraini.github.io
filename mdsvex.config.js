import relativeImages from "mdsvex-relative-images";

/** @type {import('mdsvex').MdsvexOptions} */
export default {
    extensions: [".md", ".svx"],
    remarkPlugins: [
        relativeImages,
    ],
};