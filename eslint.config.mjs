// eslint.config.mjs
import js from "@eslint/js";
import oxlint from "eslint-plugin-oxlint";
import globals from "globals";

export default [
	{
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: {
				...globals.browser,
			},
		},
		linterOptions: { reportUnusedDisableDirectives: true },
	},
	js.configs.recommended,
	oxlint.configs["flat/recommended"],
	{
		plugins: { oxlint },
		rules: {
			"no-unused-vars": [
				"error",
				{
					argsIgnorePattern: "^_",
				},
			],
		},
	},
];
