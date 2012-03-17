function init() 
{
	setScene(0xcccccc,0.005);
	
	cameras();
	//scene.add(subdivideMesh(dae,2));
	
	
	scene.add(dae);
	//scene.remove( dae );
	//delete dae;

	addCords( scene );
		
	lights();

	renderer();

	container = document.createElement('div');
	document.body.appendChild(container);

	container.appendChild( renderer.domElement );

	fps();
	container.appendChild( stats.domElement );
	window.addEventListener( 'resize', onWindowResize, false );
}

