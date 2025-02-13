import path from "path";
import { defineConfig } from "vite";
import WatchAndRun from "vite-plugin-watch-and-run";

export default defineConfig({
	plugins: [
		WatchAndRun({
			watch: [
				path.resolve("app/views/**/*.html.erb"),
				path.resolve("./app/helpers/**/*.rb"),
				path.resolve("./app/assets/stylesheets/**/*.css"),
				path.resolve("./app/javascript/**/*.js"),
			],
			run: "vite build",
		}),
	],
	build: {
		outDir: "app/assets/builds",
		sourcemap: true,
		minify: import.meta.env.MODE === "production",
	},
	server: {
		port: 8082,
		watch: {
			usePolling: true,
		},
	},
});
