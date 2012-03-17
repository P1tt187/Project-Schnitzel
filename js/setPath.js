function setPath(Path){
	
	var getPath = window.location.search.substring(1).split('?');

	if(getPath == '')
	{
		return Path;
	}
	else
	{
		Path ='';
		Path = Path.concat(getPath);
		return Path;
	}
}
