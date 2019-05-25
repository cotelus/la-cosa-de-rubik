
class Cubo extends THREE.Mesh {

	constructor(){
		super();

		this.createGUI();


		this.cubeDim = 3;

		this.cubePositions = [];

		this.getCubePositions();

		this.cubiegroup = new THREE.Group();

		this.cubies = [];

		this.makeCubies();


		this.setCubies();


		this.add(this.cubiegroup);

	
	}

	/*

	CARA FRONTAL : 		8	7	6		CARA DEL MEDIO : 	17	16	15		CARA TRASERA: 	26	25	24
						5	4	3							14	13	12						23	22	21
						2	1	0							11	10	 9						20	19	18
	*/

	getCubePositions(){
		let cont = 0;
		for(let z = 1; z >= -1; z--){
			for (let y = -1; y <= 1; y++){
				for (let x = 1; x >= -1; x--){
					this.cubePositions.push([x * this.cubeDim, y * this.cubeDim, z * this.cubeDim]);
					cont++;
				}
			}
		}
	}

	makeCubies(){
		let geometry = new THREE.BoxGeometry(this.cubeDim - 0.05, this.cubeDim - 0.05, this.cubeDim - 0.05);
		let material = new THREE.MeshNormalMaterial();
		for (let i = 0; i < 27; i++){
			let cubie = new THREE.Mesh(geometry, material);
			this.cubies[i] = new THREE.Mesh(geometry, material);
			this.cubiegroup.add(this.cubies[i]);
		}
	}

	setCubies(){
		for (let i = 0; i < 27; i++){
			this.cubies[i].position.x = this.cubePositions[i][0];
			this.cubies[i].position.y = this.cubePositions[i][1];
			this.cubies[i].position.z = this.cubePositions[i][2];

		}
	}

	createGUI () {
		// Controles para el movimiento de la parte móvil
		this.guiControls = new function () {
			this.rotacionY = 0.0;
			this.rotacionZ = 0.0;
		} 
		
		// Se crea una sección para los controles de la caja
		var folder = gui.addFolder ('Controles del cubo');
		// Estas lineas son las que añaden los componentes de la interfaz
		// Las tres cifras indican un valor mínimo, un máximo y el incremento
		// Hay que cambiar el Math.PI/4 por Math.PI/2 cuando se haga la rotación bien
		folder.add (this.guiControls, 'rotacionY', 0.0, Math.PI, Math.PI/4).name ('Rotación Y : ').listen();
		folder.add (this.guiControls, 'rotacionZ', 0.0, Math.PI, Math.PI/4).name ('Rotación Z : ').listen();
	}

	update(){
		this.rotation.set (0.0, this.guiControls.rotacionY, this.guiControls.rotacionZ);
	}

}