import relativeImages from "mdsvex-relative-images";
import yaml from "yaml";
import fs from "node:fs";

const authorInfo = {};

export function loadAuthor(nickname) {
    if (authorInfo[nickname]) return authorInfo[nickname];

    const string = new String(fs.readFileSync(`src/routes/blog/authors/${nickname}.md`));

    const results = /---\r?\n([^]*)---\r?\n/.exec(string);

    if (results) {
        const author = yaml.parse(results[1]);

        author.page = "/blog/authors/" + nickname + "/";

        authorInfo[nickname] = author;

        return author;
    }

    return { name: "Anonymous", page: "#" };
}

const parseFrontmatter = (source, messages) => {
    try {
        const frontmatter = yaml.parse(source);

        if (frontmatter.author) {
            frontmatter.author = loadAuthor(frontmatter.author);
        }

        if (frontmatter.authors)
            frontmatter.authors = frontmatter.authors.map(loadAuthor);
        
        return frontmatter;
    }
    catch (e) {
        messages.push(e.message);
    }
}

/** @type {import('mdsvex').MdsvexOptions} */
export default {
    extensions: [".md", ".svx"],
    frontmatter: {
        marker: "-",
        type: "yaml",
        parse: parseFrontmatter,
    },
    remarkPlugins: [
        relativeImages,
    ],
    layout: {
        authors: "src/routes/blog/_author_layout.svelte",
        blog: "src/routes/blog/_blog_layout.svelte",
    },
};

console.log(yaml.parse("AAA: x\nBBB: y"));