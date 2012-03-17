function cameras()
{
	camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 2000 );
	camera.position.set( 2, 4, 5 );
	scene.add( camera );
}

function set_rotate( setter )
{
	if ( setter == 1 )
	{
		rotate = true;
	}
	else
	{
		rotate = false;
	}
}

function set_lookat( setter )
{
	if ( setter == 1 )
	{
		lookat = true;
	}
	else
	{
		lookat = false;
	}
}

function rotaCam( timer )
{
	if(rotate == true)
	{
		camera.position.x = Math.cos( timer ) * 10;
		camera.position.y = 4;
		camera.position.z = Math.sin( timer ) * 10;
	}
}

function lookATObj()
{
	if(lookat == true)
	{
		camera.lookAt( scene.position );
	}
}
