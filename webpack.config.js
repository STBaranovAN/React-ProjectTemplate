const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "output")
	},
	module: {
		rules: [
			{
				test: /.js$/,
				exclude: path.resolve(__dirname, "node_modules"),
				loader: "babel-loader",
				options: {
					presets: ["react", "es2015"]
				}
			}
		]
	},
	mode: "development"
};