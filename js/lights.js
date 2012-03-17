function lights()
{
	scene.add( new THREE.AmbientLight( 0xaaaaaa ) );

	pointLight1 = new THREE.PointLight( 0xffffff, 5, 30 );
	pointLight1.position.set( 5, 0, 0 );
	pointLight1.castShadow = true;
						
	pointLight2 = new THREE.PointLight( 0x0000ff, 10, 30 );
	pointLight2.position.set( 0, 5, 0 );
	pointLight2.castShadow = true;				
						
	pointLight3 = new THREE.PointLight( 0x004400, 5, 100 );				
	pointLight3.position.set( 0, 0, 5 );
	pointLight3.castShadow = true;



	scene.add( pointLight1 );
	scene.add( pointLight2 );	
	scene.add( pointLight3 );				
}

function changeColor(light, color)
{
	lightColor = new THREE.Color( color );
	light.color = lightColor;
}

function rotaLight(light, timer)
{
	if(rotaL == true)
	{
		light.position.x = Math.sin(timer)*10;
		light.position.y = 4;
		light.position.z = Math.cos(timer)*10;
	}
}

