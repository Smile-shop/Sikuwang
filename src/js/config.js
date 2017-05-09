require.config({
	// baseUrl:'lib'//data-main文件所在的文件夹
	paths : {
		//这里的路径基于baseUrl
        "jquery": "../lib/jquery-3.1.1",
        "slideshow":"jquery-slideshow"

    },
     shim:{
    	// 表示gdszoom依赖jquery
    	"slideshow":["jquery"]
    }

})