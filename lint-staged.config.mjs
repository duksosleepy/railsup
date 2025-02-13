export default {
  "(app|config|lib|test)/**/*.rb": (files) =>
    `bundle exec rubocop ${files.map((file) => `"${file}"`).join(" ")}`,
  "(app|config|lib|test)/**/*.rb":  "bundle exec rubocop -A",
  "**/*.html.erb": (files) =>
    `bundle exec erblint -a ${files.map((file) => `"${file}"`).join(" ")}`,
  "config/locales/**/*.yml": () => "npm i18n:fix",
  "./**/*.js": (files) =>
    `biome check --write ${files.map((file) => `"${file}"`).join(" ")}`,
  "./**/*.scss": (files) =>
    `stylelint --fix ${files.map((file) => `"${file}"`).join(" ")}`,
};
