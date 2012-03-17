function subdivideMesh(orgMesh,subdivisions){

	var group = new THREE.Object3D();
	var modifier = new THREE.SubdivisionModifier( subdivisions );
	
	for(i=0;i<orgMesh.children.length;i++)
	{
		var subdivGeo = THREE.GeometryUtils.clone( orgMesh.children[i].geometry );
				
		subdivGeo.mergeVertices();
		modifier.modify( subdivGeo );
		
		var subdivGeoMat = orgMesh.children[i].material;
	
		
		var subdivMesh = new THREE.Mesh(subdivGeo, subdivGeoMat);

		subdivMesh.rotation.x = orgMesh.children[i].rotation.x;
		subdivMesh.rotation.y = orgMesh.children[i].rotation.y;
		subdivMesh.rotation.z = orgMesh.children[i].rotation.z;

		subdivMesh.position.x = orgMesh.children[i].position.x;
		subdivMesh.position.y = orgMesh.children[i].position.y;
		subdivMesh.position.z = orgMesh.children[i].position.z;
		
		subdivMesh.scale.x = orgMesh.children[i].scale.x;
		subdivMesh.scale.y = orgMesh.children[i].scale.y;
		subdivMesh.scale.z = orgMesh.children[i].scale.z;

		group.add(subdivMesh);
	}
	return group;
}
