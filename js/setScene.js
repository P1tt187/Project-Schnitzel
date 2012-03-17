function setScene(color,distance)
{ 
	scene = new THREE.Scene();
	scene.fog = new THREE.FogExp2(color,distance);
}
