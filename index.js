module.exports = (api, projectOptions) => {
	api.chainWebpack(webpackConfig => {
		webpackConfig.module
			.rule('svg')
			.exclude
				.add(api.resolve('src/icons'))
				.end()

		webpackConfig.module
			.rule('svg-sprite')
			.test(/\.svg$/)
			.include
				.add(api.resolve('src/icons'))
				.end()
			.use('svg-sprite-loader')
				.loader('svg-sprite-loader')
				.options({
					symbolId: 'icon-[name]',
				})
		// 通过 webpack-chain 修改 webpack 配置
	})
}
