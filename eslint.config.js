import svelte from "eslint-plugin-svelte";
import svelteParser from "svelte-eslint-parser";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

export default [
    {
        files: ["src/**/*.js", "src/**/*.ts"],
        languageOptions: {
            parser: typescriptParser,
        },
        plugins: {
            typescript,
            svelte,
        },
    },
    {
        files: ["src/**/*.svelte"],
        languageOptions: {
            parser: svelteParser,
            parserOptions: {
                parser: {
                    ts: typescriptParser,
                    typescript: typescriptParser,
                },
            },
        },
        plugins: {
            svelte,
        },
    }
];