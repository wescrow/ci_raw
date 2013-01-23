(function() 
{
	var account = 'UA-27160029-1';
	
	if (account === '')
	{
		console.log('!ERROR: analytics failed to load because the account was not defined.');
		return;
	}
	
	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', account]);
	_gaq.push(['_trackPageview']);
	  
	(function() 
	{
		var ga = document.createElement('script'); 
		ga.type = 'text/javascript'; 
		ga.async = true;
		ga.src = ('https:' == document.location.protocol?'https://ssl':'http://www')+'.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();
}());