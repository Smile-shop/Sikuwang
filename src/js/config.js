require.config({
	// baseUrl:'lib'//data-main文件所在的文件夹
	paths : {
		//这里的路径基于baseUrl
        "jquery": "../lib/jquery-3.1.1",
<<<<<<< HEAD
        "carousel":"jquery-carousel",
        "gdszoom":"jquery.gdszoom",
        "lazyload":"../lib/jquery.lazyload"
=======
        "slideshow":"jquery-slideshow",
        "gdszoom":"jquery.gdszoom"
>>>>>>> ca259722b6dd346d4302f6a34a4f1e8e878d48eb

    },
     shim:{
    	// 表示依赖jquery
        "gdszoom":["jquery"],
<<<<<<< HEAD
    	"carousel":["jquery"],
        "lazyload":["jquery"]
=======
    	"slideshow":["jquery"]
>>>>>>> ca259722b6dd346d4302f6a34a4f1e8e878d48eb
    }

})