function animate() 
{
	requestAnimationFrame( animate );
	render();
	stats.update();
}

