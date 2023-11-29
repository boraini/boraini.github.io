import fs from "node:fs/promises";
import path from "node:path/posix";

export async function GET({ params }) {
	let dirpath = path.join("src/articles/", params.slug);

	if (dirpath.endsWith("/")) dirpath = dirpath.substring(0, dirpath.length - 1);

    const extension = dirpath.substring(dirpath.lastIndexOf(".") + 1);

    const asset = await fs.readFile(dirpath);

	return new Response(asset, {
		headers: {
			"Content-Type": {
				jpg: "image/jpeg",
				png: "image/png",
				gif: "image/gif",
				svg: "image/svg+xml",
				webp: "image/webp",
			}[extension] || "image/png",
		}
	});
}