require.config({
	// baseUrl:'lib'//data-main文件所在的文件夹
	paths : {
		//这里的路径基于baseUrl
        "jquery": "../lib/jquery-3.1.1",
        "carousel":"jquery-carousel",
        "gdszoom":"jquery.gdszoom",
        "lazyload":"../lib/jquery.lazyload",
        "fly":"../lib/jquery.fly",

    },
     shim:{
    	// 表示依赖jquery
        "gdszoom":["jquery"],
    	"carousel":["jquery"],
        "lazyload":["jquery"],
        "fly":["jquery"]
    }

})