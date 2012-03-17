function countFace(mesh){

	var faces = 0;
	
	for(i=0;i<mesh.children.length;i++)
	{
		faces += mesh.children[i].geometry.faces.length;
	}
	
	return faces;
}
