//based on a pen by @robinselmer
var queryurl = "https://api.minetools.eu/query/mc.sta.sglorch.de/25565";
 
$.getJSON(queryurl, function(r) {
	//data is the JSON string
	if(r.error){
		$('#rest').html('Server Offline');
	return false;
	} 
	var pl = '';
	if(r.Playerlist.length > 0 ){
		pl = '<br><b>Online Players:</b> '+ r.Playerlist;
	} 
	$('#rest').html(
		'<b>MOTD: </b>'
		+ r.Motd.replace(/§(.+?)/gi, '')
		+ '<br><b>Players Online:</b> '
		+ r.Players
		+ pl
		+ '<br><b>Version:</b> '
		+ r.Version
	);
	//$('#favicon').attr('src', r.favicon); 
});
