/*
 * @Author: zy9@github.com/zy410419243
 * @Date: 2018-06-17 17:23:54
 * @Last Modified by: zy9
 * @Last Modified time: 2018-07-13 09:04:37
 */
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	commonModule: {
		rules: [
			{
				test: /\.(png|jpg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.js[x]?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				},
			},
		]
	},
	commonPlugin: [
		new htmlWebpackPlugin({ // 生成html
			template: './demo/index.html',
			hash: true,
			minify: {
				minifyJS: true,
				minifyCSS: true,
				removeComments: true,
				collapseWhitespace: true,
			}
		}),
	]
};