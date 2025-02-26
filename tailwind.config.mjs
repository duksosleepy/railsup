import forms from "@tailwindcss/forms";

export default {
  mode: "jit",
  content: [
    "./app/views/**/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/assets/stylesheets/*.css",
    "./app/assets/tailwind/*.css",
    "./app/javascript/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [forms],
};
