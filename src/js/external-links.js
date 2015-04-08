// Open all external links in a new window
$('a[href^="http://"], a[href^="https://"], a[href$=".pdf"], a:not([href^=mailto]').attr('target','_blank');
