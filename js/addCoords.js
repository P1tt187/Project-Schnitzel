function retVec(x,y,z)
{
	return new THREE.Vertex(new THREE.Vector3(x,y,z))
}

function addCords(scene)
{
	if(coords == true)
	{
		var lineGeoX = new THREE.Geometry();
		var lineGeoY = new THREE.Geometry();
		var lineGeoZ = new THREE.Geometry();

		lineGeoX.vertices.push
		(
			retVec(-10,0,0), retVec(10,0,0)
		);

		lineGeoY.vertices.push
		(
			retVec(0,0,-10), retVec(0,0,10)
		);

		lineGeoZ.vertices.push
		(
			retVec(0,-10,0), retVec(0,10,0)
		);

		var lineMatX = new THREE.LineBasicMaterial
		(
			{
				color: 0xff0000,
				lineWidth: 1
			}
		);

		var lineMatY = new THREE.LineBasicMaterial
		(
			{
				color: 0x00ff00,
				lineWidth: 1
			}
		);

		var lineMatZ = new THREE.LineBasicMaterial
		(
			{
				color: 0x0000ff,
				lineWidth: 1
			}
		);

		var lineX = new THREE.Line(lineGeoX, lineMatX);
		lineX.type = THREE.Lines;

		var lineY = new THREE.Line(lineGeoY, lineMatY);
		lineY.type = THREE.Lines;

		var lineZ = new THREE.Line(lineGeoZ, lineMatZ);
		lineZ.type = THREE.Lines;
	
		this.scene.add( lineX );
		this.scene.add( lineY );
		this.scene.add( lineZ );
	}
}
