import type { WithMetadata } from "$lib/util/metadata";

const pageImportRaw: Record<string, WithMetadata> = import.meta.glob("/src/articles/**/*.(md|png|jpg|svg|webp|gif)", { eager: true });

/** The keys are like computer-graphics/triangle.png (under src/articles) and the values are articles or assets */
export const pageImport: Record<string, WithMetadata> = {};

Object.entries(pageImportRaw).forEach(([k, v]) => pageImport[k.replace("/src/articles/", "")] = v);
