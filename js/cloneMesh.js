function cloneMesh(orgMesh){
	
	var cloneGroup = new THREE.Object3D();
	
	for(i=0;i<orgMesh.children.length;i++)
	{
		var cloneGeo = THREE.GeometryUtils.clone( orgMesh.children[i].geometry );
				
		cloneGeo.mergeVertices();
		
		var cloneMat = orgMesh.children[i].material;
		var cloneMesh = new THREE.Mesh(cloneGeo,cloneMat);

		cloneMesh.rotation.x = orgMesh.children[i].rotation.x;
		cloneMesh.rotation.y = orgMesh.children[i].rotation.y;
		cloneMesh.rotation.z = orgMesh.children[i].rotation.z;

		cloneMesh.position.x = orgMesh.children[i].position.x;
		cloneMesh.position.y = orgMesh.children[i].position.y;
		cloneMesh.position.z = orgMesh.children[i].position.z;
		
		cloneMesh.scale.x = orgMesh.children[i].scale.x;
		cloneMesh.scale.y = orgMesh.children[i].scale.y;
		cloneMesh.scale.z = orgMesh.children[i].scale.z;

		cloneGroup.add(cloneMesh);
	}
	return cloneGroup;
}
