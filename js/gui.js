var checkbox = function() 
{
	this.rotateCamera = false;
	this.lookAtObject = true;
	this.rotateLights = false;
};

function gui()
{
	var boxy = new checkbox();

	var gui = new dat.GUI();
	var guiBox = new dat.GUI();

	guiBox.add(boxy, 'rotateCamera').onChange(function(newValue){rotate = newValue;});
	guiBox.add(boxy, 'rotateLights').onChange(function(newValue){rotaL = newValue;});
	guiBox.add(boxy, 'lookAtObject').onChange(function(newValue){lookat = newValue;});

	var params = {
		vertices:	vertices,
		faces: 		faces,
		rotaX:		0,
		rotaY:		0,
		rotaZ:		0,
		moveX:		0,
		moveY:		0,
		moveZ:		0,
		scale:		1,
		scaleX:		1,
		scaleY:		1,
		scaleZ:		1
	}; 

	gui.add(params, 'vertices').onChange(vertices);
	gui.add(params, 'faces').onChange(faces);

	gui.add(params, 'rotaX').min(0.0).max(6.3).step(0.001).onChange(function(newValue){dae.rotation.x = newValue;});
	gui.add(params, 'rotaY').min(0.0).max(6.3).step(0.001).onChange(function(newValue){dae.rotation.z = newValue;});
	gui.add(params, 'rotaZ').min(0.0).max(6.3).step(0.001).onChange(function(newValue){dae.rotation.y = newValue;});

	gui.add(params, 'moveX').min(-3.0).max(3.0).step(0.001).onChange(function(newValue){dae.position.x = newValue;});
	gui.add(params, 'moveY').min(-3.0).max(3.0).step(0.001).onChange(function(newValue){dae.position.z = newValue;});
	gui.add(params, 'moveZ').min(-3.0).max(3.0).step(0.001).onChange(function(newValue){dae.position.y = newValue;});

	gui.add(params, 'scale').min(0.01).max(2.00).step(0.001).onChange(function(newValue){dae.scale.x = dae.scale.y = dae.scale.z = newValue;});	
	gui.add(params, 'scaleX').min(0.01).max(2.00).step(0.001).onChange(function(newValue){dae.scale.x = newValue;});
	gui.add(params, 'scaleY').min(0.01).max(2.00).step(0.001).onChange(function(newValue){dae.scale.y = newValue;});
	gui.add(params, 'scaleZ').min(0.01).max(2.00).step(0.001).onChange(function(newValue){dae.scale.z = newValue;});
}
