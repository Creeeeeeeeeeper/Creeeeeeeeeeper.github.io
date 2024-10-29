<?php
// 设置要重定向的目标网址
$targetUrl = "https://8.130.71.129/";

// 使用 header() 函数执行重定向
header("Location: $targetUrl");

// 终止脚本执行
exit();
?>
