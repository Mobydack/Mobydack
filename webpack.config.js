const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';
console.log(devMode)
module.exports = {
	entry: {
		app: './src/app.js',
	},
	resolve: {
		extensions: [
			'.wasm',
			'.mjs',
			'.js',
			'.json',
			'.jsx',
			'.styl',
		],
		alias: {
			compound: path.resolve(__dirname, 'src/components/compound'),
			easy: path.resolve(__dirname, 'src/components/easy'),
			components: path.resolve(__dirname, 'src/components'),
			style: path.resolve(__dirname, 'src/style/components'),
			reducers: path.resolve(__dirname, 'src/reducers/'),
			actions: path.resolve(__dirname, 'src/actions/'),
		},
	},
	module: {
		rules: [
			//babel
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			//style
			{
				test: /\.(styl)$/,
				exclude: /node_modules/,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							localIdentName: '[local]__[hash:base64:5]',
							modules: true,
							sourceMap: true
						},
					},
					'stylus-loader',
				]
			}
		]
	},
	plugins: [
		//html template
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		// style file
		new MiniCssExtractPlugin({
			filename: devMode ? '[name].css' : '[name].[hash].css',
			chunlFilename: devMode ? '[id].css' : '[id].[hash].css',
		}),
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	}
}