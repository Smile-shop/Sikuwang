<?php 
	session_start();
	// echo $_SESSION['name'];
	if(isset($_SESSION['user_username'])){
		// echo $_SESSION['login_email'];
	}else {
		//跳转页面
		header("Location: /ajax/project/src/html/login.html");
		exit;
	}
?> 
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>首页</title>
	<link rel="stylesheet" href="/ajax/project/src/css/index.css">
	<script src="/ajax/project/src/js/require.js" data-main="/ajax/project/src/js/index.js"></script>
</head>
</head>
<body>
	<header></header>
	<div class="box">
		
	</div>
	
	
	<footer></footer>
	<div class="fu">
		<div class="search">
			<div class="sear">
				<input type="text" class="bor" placeholder="NIKE 雨果">
				<input type="submit" value='搜索' class="bot">
			</div>
	</div>

</body>
</html>