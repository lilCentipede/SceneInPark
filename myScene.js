function makeGround(){
	var ground = new THREE.Group();
	var meadow = new THREE.Mesh(
				new THREE.BoxGeometry(80,4,90),
				new THREE.MeshPhongMaterial({color: 0x2f5f00})
			);
	meadow.position.set( 0, -6, 0 );
	meadow.receiveShadow = true;
	ground.add(meadow);

	var road = new THREE.Mesh(
				new THREE.BoxGeometry(20,4,89.5),
				new THREE.MeshPhongMaterial({color:'gray'})
			);
	road.position.set(20,-5.9,0);
	road.receiveShadow = true;
	ground.add(road);
	return ground;
}
function makeMoon(){
	var moon = new THREE.Group();
	var m = new THREE.Mesh(
				new THREE.SphereGeometry( 4,12,12 ),
				new THREE.MeshPhongMaterial( {
					color:0xffffff,
					shininess : 200,
					emissive: new THREE.Color('gray'),
					emissiveIntensity:0.4
					} )
		);
	moon.add(m);
	return moon;
}

function makeBench(){
	var bench = new THREE.Group();
			
			for(var i =0;i<3;i++){
				var board = new THREE.Mesh(new THREE.BoxGeometry(1,0.5,10),new THREE.MeshPhongMaterial({color:'brown'}));
				board.position.set(i*2 - 2 ,0,0);
				board.castShadow = true;
				board.receiveShadow= true;
				bench.add(board);
			}
			var pos = -1;
			for(var i =0;i<2;i++){
				var board = new THREE.Mesh(new THREE.BoxGeometry(5,0.4,1),new THREE.MeshPhongMaterial({color:'brown'}));
				board.position.set(0,0,4*pos);
				board.castShadow = true;
				board.receiveShadow= true;
				pos *=pos;
				bench.add(board);
			}
			pos = -1;
			for(var i =0;i<2;i++){
				var leg = new THREE.Mesh(new THREE.BoxGeometry(1,5,1),new THREE.MeshPhongMaterial({color:'brown'}));
				leg.position.set(pos*2,-2.5,4);
				leg.castShadow = true;
				leg.receiveShadow = true;
				pos *= pos;
				bench.add(leg);
			}
			pos = -1;
			for(var i =0;i<2;i++){
				var leg = new THREE.Mesh(new THREE.BoxGeometry(1,5,1),new THREE.MeshPhongMaterial({color:'brown'}));
				leg.position.set(pos*2,-2.5,-4);
				leg.castShadow = true;
				leg.receiveShadow = true;
				pos *= pos;
				bench.add(leg);
			}
	return bench;
}
function makeTree(){
	var tree = new THREE.Group();
		
	var stem = new THREE.Mesh(
				new THREE.CylinderGeometry( 0.1, 2,24),
				new THREE.MeshLambertMaterial( {color: 'brown'} )
			);
		stem.castShadow = true;
		stem.receiveShadow = true;
	stem.position.y = 0;
	
	var crown = new THREE.Mesh(
				new THREE.IcosahedronGeometry( 6, 0 ),
				new THREE.MeshLambertMaterial( {color: 'green'} )
			);
			crown.position.y = 8;
		crown.castShadow = true;
		crown.receiveShadow = true;
	tree.add( stem, crown );	
	return tree;
}
function makeBicycleBase(){
	var bicycle = new THREE.Group();

			//red pipes
			var pipes;
			//base
			pipes = new THREE.Mesh(new THREE.CylinderGeometry(1,1,31,32),new THREE.MeshPhongMaterial({color:'red'}));
			pipes.rotation.z += Math.PI/2;
			pipes.receiveShadow = true;
			pipes.castShadow = true;
			bicycle.add(pipes);
			//left
			pipes= new THREE.Mesh(new THREE.CylinderGeometry(1,1,22,32),new THREE.MeshPhongMaterial({color:'red'}));
			pipes.rotation.z += Math.PI/6;
			pipes.position.set(-3,10,0);
			pipes.receiveShadow = true;
			pipes.castShadow = true;
			bicycle.add(pipes);

			pipes = new THREE.Mesh(new THREE.CylinderGeometry(1,1,18,32),new THREE.MeshPhongMaterial({color:'red'}));
			pipes.rotation.z -= Math.PI/6;
			pipes.position.set(-11,8,0);
			pipes.receiveShadow = true;
			pipes.castShadow = true;
			bicycle.add(pipes);
			//right
			pipes = new THREE.Mesh(new THREE.CylinderGeometry(1,1,12,32),new THREE.MeshPhongMaterial({color:'red'}));
			pipes.rotation.z -= Math.PI/6;
			pipes.position.set(18,5.5,0);
			pipes.receiveShadow = true;
			pipes.castShadow = true;
			bicycle.add(pipes);

			pipes = new THREE.Mesh(new THREE.CylinderGeometry(1,1,31,32),new THREE.MeshPhongMaterial({color:'red'}));
			pipes.rotation.z += Math.PI/6;
			pipes.position.set(20,13,0);
			pipes.receiveShadow = true;
			pipes.castShadow = true;
			bicycle.add(pipes);
			
			//handle
			pipes = new THREE.Mesh(new THREE.CylinderGeometry(1,1,20,32),new THREE.MeshPhongMaterial({color:'red'}));
			pipes.rotation.x += Math.PI/2;
			pipes.position.set(13,27,0);
			pipes.receiveShadow = true;
			pipes.castShadow = true;
			bicycle.add(pipes);

			//black seat
			var seat = new THREE.Mesh(new THREE.CylinderGeometry(5,5,1.5,32),new THREE.MeshPhongMaterial({color:'black'}));
			seat.position.set(-8,20,0);
			seat.receiveShadow = true;
			seat.castShadow = true;
			bicycle.add(seat);

			//gray disks
			var disk;
			disk = new THREE.Mesh(new THREE.CircleGeometry(1.5,32),new THREE.MeshPhongMaterial({color:'gray',side: THREE.DoubleSide}));
			disk.position.set(-15,0,1);
			disk.receiveShadow = true;
			disk.castShadow = true;
			bicycle.add(disk);

			disk = new THREE.Mesh(new THREE.CircleGeometry(1.5,32),new THREE.MeshPhongMaterial({color:'gray',side: THREE.DoubleSide}));
			disk.position.set(27,0,1);
			disk.receiveShadow = true;
			disk.castShadow = true;
			bicycle.add(disk);

			disk = new THREE.Mesh(new THREE.CircleGeometry(1.5,32),new THREE.MeshPhongMaterial({color:'gray',side: THREE.DoubleSide}));
			disk.position.set(27,0,-1);
			disk.receiveShadow = true;
			disk.castShadow = true;
			bicycle.add(disk);

			disk = new THREE.Mesh(new THREE.CircleGeometry(1.5,32),new THREE.MeshPhongMaterial({color:'gray',side: THREE.DoubleSide}));
			disk.position.set(-15,0,-1);
			disk.receiveShadow = true;
			disk.castShadow = true;
			bicycle.add(disk);

			

		return bicycle;
}










