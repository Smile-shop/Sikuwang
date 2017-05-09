require.config({
	// baseUrl:'lib'//data-main文件所在的文件夹
	paths : {
		//这里的路径基于baseUrl
        "jquery": "../lib/jquery-3.1.1",
        "slideshow":"jquery-slideshow",
        "gdszoom":"jquery.gdszoom"

    },
     shim:{
    	// 表示依赖jquery
        "gdszoom":["jquery"],
    	"slideshow":["jquery"]
    }

})