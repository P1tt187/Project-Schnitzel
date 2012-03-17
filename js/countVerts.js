function countVerts(mesh){

	var vertices = 0;
	
	for(i=0;i<mesh.children.length;i++)
	{
		vertices += mesh.children[i].geometry.vertices.length;
	}
	
	return vertices;
}
