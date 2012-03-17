function render() 
{
	var timer = Date.now() * 0.005;

	rotaLight(pointLight1,timer);
	rotaLight(pointLight2,timer);
	rotaLight(pointLight3,timer);

	rotaCam(timer);
	lookATObj();
	
	renderer.clear();
	renderer.render( scene, camera );
}			

