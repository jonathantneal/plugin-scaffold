import path from 'path';
import webpack from 'webpack';

const DIST_PATH = path.resolve( './dist/js' );

const config = {
	cache: true,
	entry: {
		admin: './assets/js/admin/admin.js',
		frontend: './assets/js/frontend/frontend.js',
		shared: './assets/js/shared/shared.js'
	},
	output: {
		path: DIST_PATH,
		filename: '[name].min.js',
	},
	resolve: {
		modules: ['node_modules'],
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				enforce: 'pre',
				loader: 'eslint-loader',
				query: {
					configFile: './.eslintrc'
				}
			},
			{
				test: /\.js$/,
				use: [{
					loader: 'babel-loader',
					options: {
						babelrc: true,
					}

				}]
			}
		]
	},
	mode: 'production',
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
	],
	stats: {
		colors: true
	},
	/*
	Uncomment this if you need to exclude dependencies from the output bundles,
	like if WordPress is including jQuery (for example).

	externals: {
		jquery: 'jQuery'
	}
	*/
};

module.exports = config;
