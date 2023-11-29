import type { WithMetadata } from "$lib/util/metadata";

const urlImportRaw: Record<string, string> = import.meta.glob("/src/articles/**/*.(png|jpg|svg|webp|gif)", { as: "url", eager: true });

// Used for og:image thumbnails in blog article pages
/** The keys are like computer-graphics/triangle.png (under src/articles) and the values are articles or assets */
export const urlImport: Record<string, string> = {};

Object.entries(urlImportRaw).forEach(([k, v]) => urlImport[k.replace("/src/articles/", "")] = v);

const pageImportRaw: Record<string, WithMetadata> = import.meta.glob("/src/articles/**/*.(md|png|jpg|svg|webp|gif)", { eager: true });

/** The keys are like computer-graphics/triangle.png (under src/articles) and the values are articles or assets */
export const pageImport: Record<string, WithMetadata> = {};

Object.entries(pageImportRaw).forEach(([k, v]) => pageImport[k.replace("/src/articles/", "")] = v);
