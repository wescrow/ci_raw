<!DOCTYPE html>
<html>
	<head>
		<title>{title}</title>
      
		<meta name='description' content="{description}" />
		<meta name='keywords' content='{keywords}' />
      
		<link rel='shortcut icon' href='/favicon.ico' />
		<link rel='stylesheet' media='screen' href='/css/normalize.css' />
		<link rel='stylesheet' media='screen' href='/css/main.css' />
		<link rel='stylesheet' media='screen' href='/css/default.css' />
      
		<script data-main="/js/main" src="/js/require.js"></script>
	</head>
	<body>
		<?php $this->load->view('templates/header_view'); ?>
		<?php echo $strContent; ?>
		<?php $this->load->view('templates/footer_view'); ?>
	</body>
</html>