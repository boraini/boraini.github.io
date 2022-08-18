import path from "node:path";
import {fileURLToPath} from 'url';

export async function loadAuthor(nickname) {
    return import(`./authors/${nickname}.md`).then(author => {
        return Promise.resolve({
            ...author.metadata,
            page: "/blog/authors/" + nickname + "/"
        });
    });
}

export async function GET({ url }) {
    if (!url.searchParams.has("nickname")) return { status: 400 };

    const nickname = url.searchParams.get("nickname");

    return {
        body: JSON.stringify(await loadAuthor(nickname))
    };
}