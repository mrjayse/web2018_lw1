<?php
//to run use command: 
//php gen.php projectpath
//php version >=5.3.0

$path = $argv[1];

$files = [
	'index.html' => <<<'endOfFile'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <link rel="stylesheet" href="css/style.css"/>
</head>
<body>
  <div class="content">
    <h1>Hello! I'm ready for edit! :)</h1>
  </div>
  <script src="js/app.js"></script>
</body>
</html>

endOfFile
,
	
	'js/app.js' => <<<'endOfFile'
/* this source generate automatically */

endOfFile
,

	'css/style.css' => <<<'endOfFile'
/* this source generate automatically */

html {

}

body {

}

.content {

}

.content h1 {

}

endOfFile
];

foreach($files as $relPath => $content){
	$filePath = $path.DIRECTORY_SEPARATOR.str_replace("/", DIRECTORY_SEPARATOR, $relPath);
	if(!file_exists($filePath)){
		mkdir(dirname($filePath), 0777, true);
		file_put_contents($filePath, $content);
	}
}