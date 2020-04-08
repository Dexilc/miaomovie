module.exports = {
	devServer: {
		open: true,
		host: 'localhost',
		port: 8080,
		https: false,
		//以上的ip和端口是我们本机的;下面为需要跨域的
		proxy: { //配置跨域
			'/api': {
				target: 'http://39.97.33.178', //这里后台的地址模拟的;应该填写你们真实的后台接口
				// ws: true,
				changOrigin: true, //允许跨域

			}

		}
	}
}