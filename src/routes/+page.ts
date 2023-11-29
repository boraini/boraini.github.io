export async function load({ fetch }) {
    const ownerNickname = "boraini";

    return {
        ownerInfo: await fetch(`/blog/authorInfo/${ownerNickname}`).then(r => r.json()),
        newArticle: await fetch("/blog/articles/byTrait/newest").then(r => r.json()),
    };
};