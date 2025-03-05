export default {
  "(app|config|lib|test)/**/*.rb": (files) =>
    `rubocop -A ${files.map((file) => `"${file}"`).join(" ")}`,
  "**/*.html.erb": (files) =>
    `erb_lint -a ${files.map((file) => `"${file}"`).join(" ")}`,
  "config/locales/**/*.yml": () => "npm run i18n:fix",
  "./**/*.js": (files) =>
    `biome check --write ${files.map((file) => `"${file}"`).join(" ")}`,
  "./**/*.scss": (files) =>
    `stylelint --fix ${files.map((file) => `"${file}"`).join(" ")}`,
};
