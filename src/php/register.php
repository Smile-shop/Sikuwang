<?php
	include 'DBHelper.php';
	
	$username = $_POST["username"];
	$password = $_POST["password"];
	$password1 = $_POST["password1"];
	//判断当前 email 是否已存在数据表中
	$userCheck = "select * from user where `username` ='$username'";
	$result = query($userCheck);

	//当前 email 不存在，执行插入操作
	if(count($result) < 1){
		$sql = "insert into user(username, password) values('$username', '$password')";
		// echo $sql;
		$excute = excute($sql);
		if($excute){
			echo "{state: true}";
		} else {
			echo "{state: false, message: '注册失败！'}";
		}
	} else {
		echo "{state: false, message: '该用户名已被注册！请重新输入！'}";
	}
?>