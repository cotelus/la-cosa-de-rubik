controlGiro = 0;
multGiro = 1;
class Cubo2x2x2 extends THREE.Mesh {

	constructor(){
		super();

		this.createGUI();

		/* Crea materiales y colores
			- Está hecho así para poder cambiar entre colores y materiales rápido
		*/
		this.colores = [];
		this.setColors();
		this.coloresMateriales = [];
		this.setColoresMateriales();


		this.cubeDim = 4;

		this.cubePositions = [];

		this.getCubePositions();


		this.mesh1 = new THREE.Mesh();

		this.cubies = [];

		this.makeCubies();


		this.setCubies();

		/*
		this.pivot = new THREE.Group();
		for (let i = 0; i < 8; i++){
			this.pivot.add(this.cubies[i]);
		}
		this.add( this.pivot );
		*/


		//this.add(this.cubiegroup);
		/*this.add(this.mesh1);
		this.add(this.mesh2);
		this.add(this.mesh3);
		this.add(this.mesh4);*/
		//this.add(this.mesh1);

		
		for (let i = 0; i < 8; i++){
			this.add(this.cubies[i]);
		}

		this.posiciones = [5,1,0,4];
		
	}

	/*

	CARA FRONTAL : 		3	2			CARA TRASERA: 	7	6	
						1	0							5	4	
	*/

	getCubePositions(){
		// Cambio respecto la versión 3x3x3 las posiciones de los cubos restandole dim/2 a cada coordenada. Ayuda al posicionamiento en el centro
		let cont = 0;
		for(let z = 1; z >= 0; z--){
			for (let y = 0; y <= 1; y++){
				for (let x = 1; x >= 0; x--){
					this.cubePositions.push([(x * this.cubeDim) - this.cubeDim/2, (y * this.cubeDim) - this.cubeDim/2, (z * this.cubeDim) - this.cubeDim/2]);
					cont++;
				}
			}
		}

	}

	makeCubies(){
		let geometry = new THREE.BoxGeometry(this.cubeDim - 0.1, this.cubeDim - 0.1, this.cubeDim - 0.1);
		//let material = new THREE.MeshNormalMaterial();
		/*let material = new THREE.MeshLambertMaterial({
			color: this.colores[0],
			flatShading: false,
		});*/
		/*
		for (let i = 0; i < 27; i++){
			this.cubies[i] = new THREE.Mesh(geometry, [this.coloresMateriales[0], this.coloresMateriales[1],
				this.coloresMateriales[2], this.coloresMateriales[3],this.coloresMateriales[4],this.coloresMateriales[5]]);
			this.cubiegroup.add(this.cubies[i]);
		}*/
		
		
		// COMO PRUEBA VOY A INICIALIZAR CADA CUBO
		// CUBO 0
		this.cubies[0] = new THREE.Mesh(geometry, [this.coloresMateriales[0], this.coloresMateriales[6],
			this.coloresMateriales[6], this.coloresMateriales[3],this.coloresMateriales[4],this.coloresMateriales[6]]);
		this.mesh1.add(this.cubies[0]);
		// CUBO 1
		this.cubies[1] = new THREE.Mesh(geometry, [this.coloresMateriales[6], this.coloresMateriales[1],
			this.coloresMateriales[6], this.coloresMateriales[3],this.coloresMateriales[4],this.coloresMateriales[6]]);
		this.mesh1.add(this.cubies[1]);
		// CUBO 2
		this.cubies[2] = new THREE.Mesh(geometry, [this.coloresMateriales[0], this.coloresMateriales[6],
			this.coloresMateriales[2], this.coloresMateriales[6],this.coloresMateriales[4],this.coloresMateriales[6]]);
		this.mesh1.add(this.cubies[2]);
		// CUBO 3
		this.cubies[3] = new THREE.Mesh(geometry, [this.coloresMateriales[6], this.coloresMateriales[1],
			this.coloresMateriales[2], this.coloresMateriales[6],this.coloresMateriales[4],this.coloresMateriales[6]]);
		this.mesh1.add(this.cubies[3]);
		// CUBO 4
		this.cubies[4] = new THREE.Mesh(geometry, [this.coloresMateriales[0], this.coloresMateriales[6],
			this.coloresMateriales[6], this.coloresMateriales[3],this.coloresMateriales[6],this.coloresMateriales[5]]);
		this.mesh1.add(this.cubies[4]);
		// CUBO 5
		this.cubies[5] = new THREE.Mesh(geometry, [this.coloresMateriales[6], this.coloresMateriales[1],
			this.coloresMateriales[6], this.coloresMateriales[3],this.coloresMateriales[6],this.coloresMateriales[5]]);
		this.mesh1.add(this.cubies[5]);
		// CUBO 6
		this.cubies[6] = new THREE.Mesh(geometry, [this.coloresMateriales[0], this.coloresMateriales[6],
			this.coloresMateriales[2], this.coloresMateriales[6],this.coloresMateriales[6],this.coloresMateriales[5]]);
		this.mesh1.add(this.cubies[6]);
		// CUBO 7
		this.cubies[7] = new THREE.Mesh(geometry, [this.coloresMateriales[6], this.coloresMateriales[1],
			this.coloresMateriales[2], this.coloresMateriales[6],this.coloresMateriales[6],this.coloresMateriales[5]]);
		this.mesh1.add(this.cubies[7]);
	}

	setColors(){
		// ROJO
		this.colores[0] = 0xFF0000;
		// VERDE
		this.colores[1] = 0x00FF00;
		// AZUL
		this.colores[2] = 0x0000FF;
		// AMARILLO
		this.colores[3] = 0xFFFF00;
		// BLANCO
		this.colores[4] = 0xFFFFFF;
		// VIOLETA
		this.colores[5] = 0xFF00FF;
		// NEGRO
		this.colores[6] = 0x000000;
	}

	setColoresMateriales(){
		// Material ROJO
		this.coloresMateriales[0] = new THREE.MeshLambertMaterial({
			color: this.colores[0],
			flatShading: false,
		});

		// Material VERDE
		this.coloresMateriales[1] = new THREE.MeshLambertMaterial({
			color: this.colores[1],
			flatShading: false,
		});

		// Material AZUL
		this.coloresMateriales[2] = new THREE.MeshLambertMaterial({
			color: this.colores[2],
			flatShading: false,
		});

		// Material AMARILLO
		this.coloresMateriales[3] = new THREE.MeshLambertMaterial({
			color: this.colores[3],
			flatShading: false,
		});

		// Material BLANCO
		this.coloresMateriales[4] = new THREE.MeshLambertMaterial({
			color: this.colores[4],
			flatShading: false,
		});

		// Material VIOLETA
		this.coloresMateriales[5] = new THREE.MeshLambertMaterial({
			color: this.colores[5],
			flatShading: false,
		});

		// Material NEGRO
		this.coloresMateriales[6] = new THREE.MeshLambertMaterial({
			color: this.colores[6],
			flatShading: false,
		});

	}

	// Establece la posición de cada cubo con la matriz transformacion TRANSLATE
	setCubies(){
		for (let i = 0; i < 8; i++){
			/* 
			this.cubies[i].position.x = this.cubePositions[i][0];
			this.cubies[i].position.y = this.cubePositions[i][1];
			this.cubies[i].position.z = this.cubePositions[i][2];
			*/
			/* Método obsoleto, lo dejo como referencia 
			this.cubies[i].translate(this.cubePositions[i][0], this.cubePositions[i][1], this.cubePositions[i][2] );
			*/

			this.cubies[i].applyMatrix (new THREE.Matrix4().makeTranslation(this.cubePositions[i][0],this.cubePositions[i][1],this.cubePositions[i][2]));

		}
	}

	// Cambia las posiciones del vector cubePositions respecto a la rotación de la cara 
	changePositions(positions){
		var cubitos = this.cubies;
		var aux = cubitos[positions[0]];
		for (let i = 0; i < 4; i++){
			if (i != 3)
				this.cubies[positions[i]] = cubitos[positions[i+1]];
			else
				this.cubies[positions[i]] = aux;
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
		folder.add (this.guiControls, 'rotacionY', 0.0, 2*Math.PI, Math.PI/4).name ('Rotación Y : ').listen();
		folder.add (this.guiControls, 'rotacionZ', 0.0, 2*Math.PI, Math.PI/4).name ('Rotación Z : ').listen();
	}

	update(){
		// Esta función rota todo el objeto sobre todos los ejes
		this.rotation.set (0.0, this.guiControls.rotacionY, this.guiControls.rotacionZ);

		// Esta rotación, eliges qué rotar y sobre qué eje
		//this.cubiegroup.rotation.y = this.guiControls.rotacionY;
		//this.cubiegroup.rotation.z = this.guiControls.rotacionZ;
		//this.rotategroup.rotation.z = this.guiControls.rotacionY;

		if(controlGiro == 200){

			/*
			var pivot = new THREE.Group();
			this.add( pivot );
			pivot.add( this.cubies[0] );
			pivot.add( this.cubies[1] );
			pivot.add( this.cubies[4] );
			pivot.add( this.cubies[5] );

			var axis = new THREE.Vector3(0.0,1.0,0.0);*/


			//pivot.rotateOnWorldAxis(axis, multGiro * Math.PI/2);
			//pivot.rotation.y = 2*Math.PI/4;


			
			
			//Create a matrix
			var matrix = new THREE.Matrix4();
			//Rota la matriz
			matrix.makeRotationY(Math.PI / 2);

			/*
			// Rota el objeto ( en realidad no lo rota, lo cambia de posición )
			this.cubies[0].position.applyMatrix4(matrix);
			this.cubies[1].position.applyMatrix4(matrix);
			this.cubies[4].position.applyMatrix4(matrix);
			this.cubies[5].position.applyMatrix4(matrix);
			// Rota el objeto respecto su eje local
			
			this.cubies[0].rotation.y = Math.PI / 2;
			this.cubies[1].rotation.y = Math.PI / 2;
			this.cubies[4].rotation.y = Math.PI / 2;
			this.cubies[5].rotation.y = Math.PI / 2;	
			*/
		
			
			this.cubies[0].applyMatrix(matrix);
			this.cubies[1].applyMatrix(matrix);
			this.cubies[4].applyMatrix(matrix);
			this.cubies[5].applyMatrix(matrix);
			this.changePositions(this.posiciones);

			/*
			var axis = new THREE.Vector3(0.0,1.0,0.0);

			this.cubies[0].rotateOnWorldAxis(axis, Math.PI/2);
			this.cubies[1].rotateOnWorldAxis(axis, Math.PI/2);
			this.cubies[4].rotateOnWorldAxis(axis, Math.PI/2);
			this.cubies[5].rotateOnWorldAxis(axis, Math.PI/2);
			*/
			

		}

		
		if(controlGiro == 400){
			/*
			var pivot = new THREE.Group();
			this.add( pivot );
			pivot.add( this.cubies[1] );
			pivot.add( this.cubies[2] );
			pivot.add( this.cubies[0] );
			pivot.add( this.cubies[6] );

			pivot.rotation.x = 2*Math.PI/4;
			*/

			//Create a matrix
			var matrix = new THREE.Matrix4();
			//Rotate the matrix
			matrix.makeRotationY(Math.PI / 2);

			this.cubies[0].applyMatrix(matrix);
			this.cubies[1].applyMatrix(matrix);
			this.cubies[4].applyMatrix(matrix);
			this.cubies[5].applyMatrix(matrix);
		}

		controlGiro++;
	}

}