function main(){
	
	checkWebGl();
	var modelPath = setPath('../models/wurmSubdv1.dae');
	var loader = setLoader();
		
	loader.load(modelPath, function ( collada ) {		
			dae = collada.scene;
			skin = collada.skins[ 0 ];
		
			dae.updateMatrix();
			
			dae.castShadow = true;
			dae.receiveShadow = true;
			
			dae.children[2].geometry.dynamic = true;
			dae.children[2].geometry.__dirtyVertices = true;
			dae.children[2].geometry.__dirtyNormals = true;
			
			var modifier = new THREE.SubdivisionModifier( 0 );
			modifier.modify(dae.children[2].geometry);
			
			vertices = countVerts(dae);
			faces = countFace(dae);
			
			
			gui();
			init();
			animate();						
		} 
	);
}
