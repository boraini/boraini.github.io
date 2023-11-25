import relativeImages from "mdsvex-relative-images";
import yaml from "yaml";
import fs from "node:fs";
import katex from "katex";
import rehype_katex from 'rehype-katex';
import { visit } from 'unist-util-visit';

const authorInfo = {};

export function loadAuthor(nickname) {
    if (authorInfo[nickname]) return authorInfo[nickname];

    const string = new String(fs.readFileSync(`src/articles/authors/${nickname}.md`));

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

/* start of code from github.com/pngwn/mdsvex-math/blob/main/mdsvex.config.js */
const correct_hast_tree = () => (tree) => {
	visit(tree, 'text', (node) => {
		if (node.value.trim().startsWith('<')) {
			node.type = 'raw';
		}
	});
};

const katex_blocks = () => (tree) => {
	visit(tree, 'code', (node) => {
		if (node.lang === 'math') {
			const str = katex.renderToString(node.value, {
				displayMode: true,
				leqno: false,
				fleqn: false,
				throwOnError: true,
				errorColor: '#cc0000',
				strict: 'warn',
				output: 'html',
				trust: false,
				macros: { '\\f': '#1f(#2)' }
			});

			node.type = 'raw';
			node.value = '{@html `' + str + '`}';
		}
	});
};
/* end of code from github.com/pngwn/mdsvex-math/blob/main/mdsvex.config.js */

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
				katex_blocks,
    ],
    rehypePlugins: [
        correct_hast_tree,
        rehype_katex,
    ],
    layout: {
        authors: "src/routes/blog/_author_layout.svelte",
        articles: "src/routes/blog/_blog_layout.svelte",
    },
};