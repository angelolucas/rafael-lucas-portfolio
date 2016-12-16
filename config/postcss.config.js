// Export the PostCSS Config for usage in webpack
module.exports = {
	plugins: [
		require("postcss-import"),
		 
		/* Use tomorrow’s CSS syntax, today. */
		require('postcss-cssnext'),

		/* Enable nested css selectors like Sass/Less */
		require('postcss-nested')
	]
}