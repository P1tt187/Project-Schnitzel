function renderer()
{
	renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setClearColorHex(0xEEEEEE, 1.0);
	renderer.shadowMapEnabled = true;
	renderer.receiveShadow = true;
}
