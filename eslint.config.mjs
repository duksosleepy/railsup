// eslint.config.mjs (ES Module)
import js from "@eslint/js";
import oxlint from "eslint-plugin-oxlint";

export default [
	{
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
		},
		linterOptions: { reportUnusedDisableDirectives: true },
	},
	js.configs.recommended,
	oxlint.configs["flat/recommended"],
	{
		plugins: { oxlint },
		rules: {},
	},
];
