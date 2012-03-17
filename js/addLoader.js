function setLoader()
{
	var loader = new THREE.ColladaLoader();
	loader.options.convertUpAxis = true;
	return loader;	
}
