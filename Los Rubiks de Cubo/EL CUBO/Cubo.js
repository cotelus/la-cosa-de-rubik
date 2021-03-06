
class Cubo extends THREE.Mesh {

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
		this.mouseUp = false;
		this.contadorRand = 0;
		this.contadorRot = 0.0;
		this.sonido = false;

		this.cubeDim = 3;

		this.cubePositions = [];

		this.getCubePositions();

		this.cubies = [];

		this.makeCubies();
		this.setCubies();


		for (let i = 0; i < this.cubies.length; i++){
			this.add(this.cubies[i]);
			// Se le añade un nombre a cada cubie para comprobar si se ha resuelto
			this.cubies[i].name = i;
		}

		this.controlSecX1 = 0.0;
		this.controlSecX2 = 0.0;
		this.controlSecX3 = 0.0;
		this.controlSecY1 = 0.0;
		this.controlSecY2 = 0.0;
		this.controlSecY3 = 0.0;
		this.controlSecZ1 = 0.0;
		this.controlSecZ2 = 0.0;
		this.controlSecZ3 = 0.0;


	}



	/*

	CARA FRONTAL : 		8	7	6		CARA DEL MEDIO : 	17	16	15		CARA TRASERA: 	26	25	24
						5	4	3							14	13	12						23	22	21
						2	1	0							11	10	 9						20	19	18
	*/

	// Define las posiciones de cada cubito que forma el cubo de Rubik
	getCubePositions(){
		for(let z = 1; z >= -1; z--){
			for (let y = -1; y <= 1; y++){
				for (let x = 1; x >= -1; x--){
					this.cubePositions.push([x * this.cubeDim, y * this.cubeDim, z * this.cubeDim]);
				}
			}
		}
	}

	// Se crea cada cubito y en función de su posición tendrá las caras de un color u otro
	makeCubies(){
		let geometry = new THREE.BoxGeometry(this.cubeDim - 0.1, this.cubeDim - 0.1, this.cubeDim - 0.1);
		
		// Se inicializa cada cubito del Cubo de Rubik
		// derecha-detrás-izquierda-abajo-delante-arriba
		// CUBO 0
		this.cubies[0] = new THREE.Mesh(geometry, [this.coloresMateriales[0], this.coloresMateriales[6],
			this.coloresMateriales[6], this.coloresMateriales[3],this.coloresMateriales[4],this.coloresMateriales[6]]);
		// CUBO 1
		this.cubies[1] = new THREE.Mesh(geometry, [this.coloresMateriales[6], this.coloresMateriales[6],
			this.coloresMateriales[6], this.coloresMateriales[3],this.coloresMateriales[4],this.coloresMateriales[6]]);
		// CUBO 2
		this.cubies[2] = new THREE.Mesh(geometry, [this.coloresMateriales[6], this.coloresMateriales[1],
			this.coloresMateriales[6], this.coloresMateriales[3],this.coloresMateriales[4],this.coloresMateriales[6]]);
		// CUBO 3
		this.cubies[3] = new THREE.Mesh(geometry, [this.coloresMateriales[0], this.coloresMateriales[6],
			this.coloresMateriales[6], this.coloresMateriales[6],this.coloresMateriales[4],this.coloresMateriales[6]]);
		// CUBO 4
		this.cubies[4] = new THREE.Mesh(geometry, [this.coloresMateriales[6], this.coloresMateriales[6],
			this.coloresMateriales[6], this.coloresMateriales[6],this.coloresMateriales[4],this.coloresMateriales[6]]);
		// CUBO 5
		this.cubies[5] = new THREE.Mesh(geometry, [this.coloresMateriales[6], this.coloresMateriales[1],
			this.coloresMateriales[6], this.coloresMateriales[6],this.coloresMateriales[4],this.coloresMateriales[6]]);
		// CUBO 6
		this.cubies[6] = new THREE.Mesh(geometry, [this.coloresMateriales[0], this.coloresMateriales[6],
			this.coloresMateriales[2], this.coloresMateriales[6],this.coloresMateriales[4],this.coloresMateriales[6]]);
		// CUBO 7
		this.cubies[7] = new THREE.Mesh(geometry, [this.coloresMateriales[6], this.coloresMateriales[6],
			this.coloresMateriales[2], this.coloresMateriales[6],this.coloresMateriales[4],this.coloresMateriales[6]]);
		// CUBO 8
		this.cubies[8] = new THREE.Mesh(geometry, [this.coloresMateriales[6], this.coloresMateriales[1],
			this.coloresMateriales[2], this.coloresMateriales[6],this.coloresMateriales[4],this.coloresMateriales[6]]);

		// CUBO 9
		this.cubies[9] = new THREE.Mesh(geometry, [this.coloresMateriales[0], this.coloresMateriales[6],
			this.coloresMateriales[6], this.coloresMateriales[3],this.coloresMateriales[6],this.coloresMateriales[6]]);
		// CUBO 10
		this.cubies[10] = new THREE.Mesh(geometry, [this.coloresMateriales[6], this.coloresMateriales[6],
			this.coloresMateriales[6], this.coloresMateriales[3],this.coloresMateriales[6],this.coloresMateriales[6]]);
		// CUBO 11
		this.cubies[11] = new THREE.Mesh(geometry, [this.coloresMateriales[6], this.coloresMateriales[1],
			this.coloresMateriales[6], this.coloresMateriales[3],this.coloresMateriales[6],this.coloresMateriales[6]]);
		// CUBO 12
		this.cubies[12] = new THREE.Mesh(geometry, [this.coloresMateriales[0], this.coloresMateriales[6],
			this.coloresMateriales[6], this.coloresMateriales[6],this.coloresMateriales[6],this.coloresMateriales[6]]);
		// CUBO 13
		this.cubies[13] = new THREE.Mesh(geometry, [this.coloresMateriales[6], this.coloresMateriales[6],
			this.coloresMateriales[6], this.coloresMateriales[6],this.coloresMateriales[6],this.coloresMateriales[6]]);
		// CUBO 14
		this.cubies[14] = new THREE.Mesh(geometry, [this.coloresMateriales[6], this.coloresMateriales[1],
			this.coloresMateriales[6], this.coloresMateriales[6],this.coloresMateriales[6],this.coloresMateriales[6]]);
		// CUBO 15
		this.cubies[15] = new THREE.Mesh(geometry, [this.coloresMateriales[0], this.coloresMateriales[6],
			this.coloresMateriales[2], this.coloresMateriales[6],this.coloresMateriales[6],this.coloresMateriales[6]]);
		// CUBO 16
		this.cubies[16] = new THREE.Mesh(geometry, [this.coloresMateriales[6], this.coloresMateriales[6],
			this.coloresMateriales[2], this.coloresMateriales[6],this.coloresMateriales[6],this.coloresMateriales[6]]);
		// CUBO 17
		this.cubies[17] = new THREE.Mesh(geometry, [this.coloresMateriales[6], this.coloresMateriales[1],
			this.coloresMateriales[2], this.coloresMateriales[6],this.coloresMateriales[6],this.coloresMateriales[6]]);

		// CUBO 18
		this.cubies[18] = new THREE.Mesh(geometry, [this.coloresMateriales[0], this.coloresMateriales[6],
			this.coloresMateriales[6], this.coloresMateriales[3],this.coloresMateriales[6],this.coloresMateriales[5]]);
		// CUBO 19
		this.cubies[19] = new THREE.Mesh(geometry, [this.coloresMateriales[6], this.coloresMateriales[6],
			this.coloresMateriales[6], this.coloresMateriales[3],this.coloresMateriales[6],this.coloresMateriales[5]]);
		// CUBO 20
		this.cubies[20] = new THREE.Mesh(geometry, [this.coloresMateriales[6], this.coloresMateriales[1],
			this.coloresMateriales[6], this.coloresMateriales[3],this.coloresMateriales[6],this.coloresMateriales[5]]);
		// CUBO 21
		this.cubies[21] = new THREE.Mesh(geometry, [this.coloresMateriales[0], this.coloresMateriales[6],
			this.coloresMateriales[6], this.coloresMateriales[6],this.coloresMateriales[6],this.coloresMateriales[5]]);
		// CUBO 22
		this.cubies[22] = new THREE.Mesh(geometry, [this.coloresMateriales[6], this.coloresMateriales[6],
			this.coloresMateriales[6], this.coloresMateriales[6],this.coloresMateriales[6],this.coloresMateriales[5]]);
		// CUBO 23
		this.cubies[23] = new THREE.Mesh(geometry, [this.coloresMateriales[6], this.coloresMateriales[1],
			this.coloresMateriales[6], this.coloresMateriales[6],this.coloresMateriales[6],this.coloresMateriales[5]]);
		// CUBO 24
		this.cubies[24] = new THREE.Mesh(geometry, [this.coloresMateriales[0], this.coloresMateriales[6],
			this.coloresMateriales[2], this.coloresMateriales[6],this.coloresMateriales[6],this.coloresMateriales[5]]);
		// CUBO 25
		this.cubies[25] = new THREE.Mesh(geometry, [this.coloresMateriales[6], this.coloresMateriales[6],
			this.coloresMateriales[2], this.coloresMateriales[6],this.coloresMateriales[6],this.coloresMateriales[5]]);
		// CUBO 26
		this.cubies[26] = new THREE.Mesh(geometry, [this.coloresMateriales[6], this.coloresMateriales[1],
			this.coloresMateriales[2], this.coloresMateriales[6],this.coloresMateriales[6],this.coloresMateriales[5]]);
	}
	
	// Esta función comprueba que los cubos están en su lugar respecto la versión original
	uSure(){
		/*
		let judge = true;
		for(let i = 0; i < this.cubies.length && judge; i++ ){
			if(this.cubies[i].name != i){
				judge = false;
			}
		}
		return judge;
		*/

		let judge = false;
		let xis = true;
		let yis = true;
		let zis = true;
		// Comprueba que la cara frontal tiene al menos una coordenada en el mismo igual en todos los cubos
		for(let i = 0; i < 7; i++){
			var este = this.getObjectByName( i );
			var siguiente = this.getObjectByName( i+1 );
			if(Math.round(este.position.x) != Math.round(siguiente.position.x)){
				xis = false;
			}
			if(Math.round(este.position.y) != Math.round(siguiente.position.y)){
				yis = false;
			}
			if(Math.round(este.position.z) != Math.round(siguiente.position.z)){
				zis = false;
			}
		}
		// Si la cara anterior pasa la prueba, se pasa ahora a la siguiente
		if (xis || yis || zis){
			let xih = true;
			let yih = true;
			let zih = true;
			// Comprueba que la cara del medio tiene al menos una coordenada en el mismo igual en todos los cubos
			for(let i = 9; i < 17; i++){
				var este = this.getObjectByName( i );
				var siguiente = this.getObjectByName( i+1 );
				if(Math.round(este.position.x) != Math.round(siguiente.position.x)){
					xih = false;
				}
				if(Math.round(este.position.y) != Math.round(siguiente.position.y)){
					yih = false;
				}
				if(Math.round(este.position.z) != Math.round(siguiente.position.z)){
					zih = false;
				}
			}

			if (xih || yih || zih){
				let xij = true;
				let yij = true;
				let zij = true;
				// Comprueba que la cara Trasera tiene al menos una coordenada en el mismo igual en todos los cubos
				for(let i = 18; i < 26; i++){
					var este = this.getObjectByName( i );
					var siguiente = this.getObjectByName( i+1 );
					if(Math.round(este.position.x) != Math.round(siguiente.position.x)){
						xij = false;
					}
					if(Math.round(este.position.y) != Math.round(siguiente.position.y)){
						yij = false;
					}
					if(Math.round(este.position.z) != Math.round(siguiente.position.z)){
						zij = false;
					}
				}
	
				if (xij || yij || zij){
					judge = true;
				}
			}
		}

		return judge;
	}

	// Define una serie de colores y los añade al array colores[]
	setColors(){
		// ROJO
		this.colores[0] = 0xFF0000;
		// NARANJA
		this.colores[1] = 0xFF8000;
		// AZUL
		this.colores[2] = 0x0000FF;
		// VERDE
		this.colores[3] = 0x00FF00;
		// BLANCO
		this.colores[4] = 0xFFFFFF;
		// AMARILLO
		this.colores[5] = 0xFFFF00;
		// NEGRO
		this.colores[6] = 0x000000;
	}

	// Define una serie de materiales y los añade al array coloresMateriales[]
	// Estos materiales solo tienen un sombreado plano y un color solido
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
		for (let i = 0; i < this.cubies.length; i++){
			this.cubies[i].applyMatrix (new THREE.Matrix4().makeTranslation(this.cubePositions[i][0],
				this.cubePositions[i][1],this.cubePositions[i][2]));
		}
	}

	/*
	 Cambia las posiciones del vector cubePositions respecto a la rotación de la cara 
	 IMPORTANTÍSIMO: Hay que pasarle el vector de posiciones que rotan en sentido horario
	 EJEMPLO DE USO: 		let positions = [6,7,8,17,26,25,24,15];
							this.changePositions(positions);
						Rota los cubos 6,7,8,17,26,25,24,15 en sentido antihorario
	*/
	changePositions(positions){
		var aux = this.cubies[positions[0]];
		for(let i = 0; i < 7; i++){
			this.cubies[positions[i]] = this.cubies[positions[i+1]]; 
		}
		this.cubies[positions[7]] = aux; 
	}

	mouseUpFalse(){
		this.mouseUp = false;
	}

	mouseUpTrue(){
		this.mouseUp = true;
	}

	swapPositions(pos){
		var aux = [];
		aux.push(pos[0]);
		for (let i = (pos.length - 1); i > 0; i--)
			aux.push(pos[i]);
		for (let i = 0; i < pos.length; i++)
			pos[i] = aux [i];
	}

	// Función encargada de mostrar los controles de la interfaz
	createGUI () {
		this.guiControls = new function () {
			//this.rotacionY = 0.0;
			//this.rotacionZ = 0.0;

			// Giros de las distintas caras
			this.giroSeccionX1 = 0.0;
			this.giroSeccionX2 = 0.0;
			this.giroSeccionX3 = 0.0;
			this.giroSeccionY1 = 0.0;
			this.giroSeccionY2 = 0.0;
			this.giroSeccionY3 = 0.0;
			this.giroSeccionZ1 = 0.0;
			this.giroSeccionZ2 = 0.0;
			this.giroSeccionZ3 = 0.0;
			this.isRandom = false;
			this.isSolved = false;

			this.random = function(){
				this.isRandom = true;
			}

			this.solved = function(){
				this.isSolved = true;
			}

			this.vic = function(){
				window.location.href = "http://github.com/vicferpoy";
			}

			this.luis = function(){
				window.location.href = "http://github.com/cotelus";
			}
		} 
		
		// Se crea una sección para los controles de la caja
		var folder = gui.addFolder ('Controles del cubo');
		var doneby = gui.addFolder ('Crafteado por:');
		// Estas lineas son las que añaden los componentes de la interfaz
		// Las tres cifras indican un valor mínimo, un máximo y el incremento
		// Hay que cambiar el Math.PI/4 por Math.PI/2 cuando se haga la rotación bien
		//folder.add (this.guiControls, 'rotacionY', 0.0, 2*Math.PI, Math.PI/4).name ('Rotación Y : ').listen();
		//folder.add (this.guiControls, 'rotacionZ', 0.0, 2*Math.PI, Math.PI/4).name ('Rotación Z : ').listen();
		
		folder.add (this.guiControls, 'giroSeccionX1', -90.0, 90.0, 1.0).name ('Giro Sec X1: ').listen();
		folder.add (this.guiControls, 'giroSeccionX2', -90.0, 90.0, 1.0).name ('Giro Sec X2: ').listen();
		folder.add (this.guiControls, 'giroSeccionX3', -90.0, 90.0, 1.0).name ('Giro Sec X3: ').listen();
		folder.add (this.guiControls, 'giroSeccionY1', -90.0, 90.0, 1.0).name ('Giro Sec Y1: ').listen();
		folder.add (this.guiControls, 'giroSeccionY2', -90.0, 90.0, 1.0).name ('Giro Sec Y2: ').listen();
		folder.add (this.guiControls, 'giroSeccionY3', -90.0, 90.0, 1.0).name ('Giro Sec Y3: ').listen();
		folder.add (this.guiControls, 'giroSeccionZ1', -90.0, 90.0, 1.0).name ('Giro Sec Z1: ').listen();
		folder.add (this.guiControls, 'giroSeccionZ2', -90.0, 90.0, 1.0).name ('Giro Sec Z2: ').listen();
		folder.add (this.guiControls, 'giroSeccionZ3', -90.0, 90.0, 1.0).name ('Giro Sec Z3: ').listen();
		folder.add (this.guiControls, 'random').name('¿Me desordeno?').listen();
		folder.add (this.guiControls, 'isSolved').name('¡JA! Te resolví').listen();

		doneby.add (this.guiControls, 'luis').name('Luis Ángel Cotelo Leyva').listen();
		doneby.add (this.guiControls, 'vic').name('Víctor Fernández Poyatos').listen();
	}

	/*
		Esta función, dependiendo de la cara que se vaya a rotar coge un conjunto de cubitos
		y los rota respecto el eje del cubo de rubik. El problema es que el centro de cada cara
		no se contempla	en la rotación, ya que hay que coger los cubos en sentido antihorario, y 
		no hay una selección clara en el caso de 8 cubos exteriores y 1 cubo central.
			-La solución es rotar el cubo central a parte sobre su propio eje la misma cantidad
			que rotan los cubos exteriores. Esta solución además es extrapolable a otros cubos de mayor tamaño,
			por ejemplo en un 4x4x4, tenemos un anillo exterior de 12 cubos y una interior de 4. 
			Habria que hacer la misma selección de giros que se hacen aquí, pero primero la cara exterior y luego
			la interior.

		************ RESUMIENDO ******************
		Hay que rotar el cubo central de cada cara si fuese necesario.

		***ADEMÁS***
		Se llama 2 veces a change positions, porque hay que desplazar 2 veces 
		los cubos que rotan. Hay que mejorar la función changePositions para que
		admita un valor de desplazamientos a la derecha o algo
	*/
	decideGiros(){
		// Decide qué hacer si se ha movido la palanquita de la sección X1
		if(this.guiControls.giroSeccionX1 != this.controlSecX1 || this.controlSecX1 != 0){
			// Se cambian las posiciones
			// Centro: 12
			let positions = [0,3,6,15,24,21,18,9];
			
			let giro = this.toRadians(this.guiControls.giroSeccionX1) - this.toRadians(this.controlSecX1);
			//Crea la matriz que se va a usar para rotar los elementos
			var matrix = new THREE.Matrix4();
			//Rota la matriz
			matrix.makeRotationX(-giro);

			this.controlSecX1 = this.guiControls.giroSeccionX1;

			// Se le pasa la matriz giro y las posiciones que rotan
			this.rotaCubos(matrix, positions);
			// Se rota el centro tambien
			this.cubies[12].applyMatrix(matrix);

			// Devuelve la palanquita a 0
			//this.guiControls.giroSeccionX1 = 0.0;
			// Si es multiplo de 90º, se rotan las caras
			if (this.mouseUp){
				var giro_final;
				if (this.guiControls.giroSeccionX1 >= 45.0){
				this.swapPositions(positions);
				giro_final = (Math.PI / 2) - (this.toRadians(this.guiControls.giroSeccionX1));
				this.changePositions(positions);
				this.changePositions(positions);
				}
				else if (this.guiControls.giroSeccionX1 <= -45.0){
					giro_final = (-1 * Math.PI / 2) - (this.toRadians(this.guiControls.giroSeccionX1));
					this.changePositions(positions);
					this.changePositions(positions);
				}
				else {
					giro_final = (this.toRadians(this.guiControls.giroSeccionX1)) * (-1);
				}
				matrix.makeRotationX(-giro_final);
				this.cubies[12].applyMatrix(matrix);
				this.rotaCubos(matrix, positions);


				this.guiControls.giroSeccionX1 = 0.0;
				this.controlSecX1 = 0.0;
				this.mouseUp = false;
			}
		}
		// Decide qué hacer si se ha movido la palanquita de la sección X2
		if(this.guiControls.giroSeccionX2 != this.controlSecX2 || this.controlSecX2 != 0){
			// Se cambian las posiciones
			// Centro: 13
			let positions = [1,4,7,16,25,22,19,10];
			
			let giro = this.toRadians(this.guiControls.giroSeccionX2) - this.toRadians(this.controlSecX2);
			//Crea la matriz que se va a usar para rotar los elementos
			var matrix = new THREE.Matrix4();
			//Rota la matriz
			matrix.makeRotationX(-giro);

			this.controlSecX2 = this.guiControls.giroSeccionX2;

			// Se le pasa la matriz giro y las posiciones que rotan
			this.rotaCubos(matrix, positions);
			// Devuelve la palanquita a 0
			//this.guiControls.giroSeccionX1 = 0.0;
			// Si es multiplo de 90º, se rotan las caras

			if (this.mouseUp){
				var giro_final;
				if (this.guiControls.giroSeccionX2 >= 45.0){
				this.swapPositions(positions);
				giro_final = (Math.PI / 2) - (this.toRadians(this.guiControls.giroSeccionX2));
				this.changePositions(positions);
				this.changePositions(positions);
				}
				else if (this.guiControls.giroSeccionX2 <= -45.0){
					giro_final = (-1 * Math.PI / 2) - (this.toRadians(this.guiControls.giroSeccionX2));
					this.changePositions(positions);
					this.changePositions(positions);
				}
				else {
					giro_final = (this.toRadians(this.guiControls.giroSeccionX2)) * (-1);
				}
				matrix.makeRotationX(-giro_final);
				this.rotaCubos(matrix, positions);


				this.guiControls.giroSeccionX2 = 0.0;
				this.controlSecX2 = 0.0;
				this.mouseUp = false;
			}


		}
		// Decide qué hacer si se ha movido la palanquita de la sección X3
		if(this.guiControls.giroSeccionX3 != this.controlSecX3 || this.controlSecX3 != 0){
			// Se cambian las posiciones
			// Centro: 14
			let positions = [2,5,8,17,26,23,20,11];
			
			let giro = this.toRadians(this.guiControls.giroSeccionX3) - this.toRadians(this.controlSecX3);
			//Crea la matriz que se va a usar para rotar los elementos
			var matrix = new THREE.Matrix4();
			//Rota la matriz
			matrix.makeRotationX(-giro);

			this.controlSecX3 = this.guiControls.giroSeccionX3;

			// Se le pasa la matriz giro y las posiciones que rotan
			this.rotaCubos(matrix, positions);
			// Se rota el centro tambien
			//this.cubies[12].applyMatrix(matrix);

			// Devuelve la palanquita a 0
			//this.guiControls.giroSeccionX1 = 0.0;
			// Si es multiplo de 90º, se rotan las caras
			if (this.mouseUp){
				var giro_final;
				if (this.guiControls.giroSeccionX3 >= 45.0){
				this.swapPositions(positions);
				giro_final = (Math.PI / 2) - (this.toRadians(this.guiControls.giroSeccionX3));
				this.changePositions(positions);
				this.changePositions(positions);
				}
				else if (this.guiControls.giroSeccionX3 <= -45.0){
					giro_final = (-1 * Math.PI / 2) - (this.toRadians(this.guiControls.giroSeccionX3));
					this.changePositions(positions);
					this.changePositions(positions);
				}
				else {
					giro_final = (this.toRadians(this.guiControls.giroSeccionX3)) * (-1);
				}
				matrix.makeRotationX(-giro_final);
				this.rotaCubos(matrix, positions);


				this.guiControls.giroSeccionX3 = 0.0;
				this.controlSecX3 = 0.0;
				this.mouseUp = false;
			}
		}

		// Decide qué hacer si se ha movido la palanquita de la sección Y1
		if(this.guiControls.giroSeccionY1 != this.controlSecY1 || this.controlSecY1 != 0){
			// Se cambian las posiciones
			// Centro: 16
			let positions = [6,7,8,17,26,25,24,15];

			let giro = this.toRadians(this.guiControls.giroSeccionY1) - this.toRadians(this.controlSecY1);
			//Crea la matriz que se va a usar para rotar los elementos
			var matrix = new THREE.Matrix4();
			//Rota la matriz
			matrix.makeRotationY(-giro);

			this.controlSecY1 = this.guiControls.giroSeccionY1;

			// Se le pasa la matriz giro y las posiciones que rotan
			this.rotaCubos(matrix, positions);
			// Se rota el centro tambien
			this.cubies[16].applyMatrix(matrix);

			// Devuelve la palanquita a 0
			//this.guiControls.giroSeccionX1 = 0.0;
			// Si es multiplo de 90º, se rotan las caras
			if (this.mouseUp){
				var giro_final;
				if (this.guiControls.giroSeccionY1 >= 45.0){
				this.swapPositions(positions);
				giro_final = (Math.PI / 2) - (this.toRadians(this.guiControls.giroSeccionY1));
				this.changePositions(positions);
				this.changePositions(positions);
				}
				else if (this.guiControls.giroSeccionY1 <= -45.0){
					giro_final = (-1 * Math.PI / 2) - (this.toRadians(this.guiControls.giroSeccionY1));
					this.changePositions(positions);
					this.changePositions(positions);
				}
				else {
					giro_final = (this.toRadians(this.guiControls.giroSeccionY1)) * (-1);
				}
				matrix.makeRotationY(-giro_final);
				this.cubies[16].applyMatrix(matrix);
				this.rotaCubos(matrix, positions);


				this.guiControls.giroSeccionY1 = 0.0;
				this.controlSecY1 = 0.0;
				this.mouseUp = false;
			}
		}
		// Decide qué hacer si se ha movido la palanquita de la sección Y2
		if(this.guiControls.giroSeccionY2 != this.controlSecY2 || this.controlSecY2 != 0){
			// Se cambian las posiciones
			// Centro: 13
			let positions = [3,4,5,14,23,22,21,12];
			
			let giro = this.toRadians(this.guiControls.giroSeccionY2) - this.toRadians(this.controlSecY2);
			//Crea la matriz que se va a usar para rotar los elementos
			var matrix = new THREE.Matrix4();
			//Rota la matriz
			matrix.makeRotationY(-giro);

			this.controlSecY2 = this.guiControls.giroSeccionY2;

			// Se le pasa la matriz giro y las posiciones que rotan
			this.rotaCubos(matrix, positions);

			// Devuelve la palanquita a 0
			//this.guiControls.giroSeccionX1 = 0.0;
			// Si es multiplo de 90º, se rotan las caras

			if (this.mouseUp){
				var giro_final;
				if (this.guiControls.giroSeccionY2 >= 45.0){
				this.swapPositions(positions);
				giro_final = (Math.PI / 2) - (this.toRadians(this.guiControls.giroSeccionY2));
				this.changePositions(positions);
				this.changePositions(positions);
				}
				else if (this.guiControls.giroSeccionY2 <= -45.0){
					giro_final = (-1 * Math.PI / 2) - (this.toRadians(this.guiControls.giroSeccionY2));
					this.changePositions(positions);
					this.changePositions(positions);
				}
				else {
					giro_final = (this.toRadians(this.guiControls.giroSeccionY2)) * (-1);
				}
				matrix.makeRotationY(-giro_final);
				this.rotaCubos(matrix, positions);


				this.guiControls.giroSeccionY2 = 0.0;
				this.controlSecY2 = 0.0;
				this.mouseUp = false;
			}
		}
		// Decide qué hacer si se ha movido la palanquita de la sección Y3
		if(this.guiControls.giroSeccionY3 != this.controlSecY3 || this.controlSecY3 != 0){
			// Se cambian las posiciones
			// Centro: 10
			let positions = [0,1,2,11,20,19,18,9];
			
			let giro = this.toRadians(this.guiControls.giroSeccionY3) - this.toRadians(this.controlSecY3);
			//Crea la matriz que se va a usar para rotar los elementos
			var matrix = new THREE.Matrix4();
			//Rota la matriz
			matrix.makeRotationY(-giro);

			this.controlSecY3 = this.guiControls.giroSeccionY3;

			// Se le pasa la matriz giro y las posiciones que rotan
			this.rotaCubos(matrix, positions);

			// Devuelve la palanquita a 0
			//this.guiControls.giroSeccionX1 = 0.0;
			// Si es multiplo de 90º, se rotan las caras

			if (this.mouseUp){
				var giro_final;
				if (this.guiControls.giroSeccionY3 >= 45.0){
				this.swapPositions(positions);
				giro_final = (Math.PI / 2) - (this.toRadians(this.guiControls.giroSeccionY3));
				this.changePositions(positions);
				this.changePositions(positions);
				}
				else if (this.guiControls.giroSeccionY3 <= -45.0){
					giro_final = (-1 * Math.PI / 2) - (this.toRadians(this.guiControls.giroSeccionY3));
					this.changePositions(positions);
					this.changePositions(positions);
				}
				else {
					giro_final = (this.toRadians(this.guiControls.giroSeccionY3)) * (-1);
				}
				matrix.makeRotationY(-giro_final);
				this.rotaCubos(matrix, positions);


				this.guiControls.giroSeccionY3 = 0.0;
				this.controlSecY3 = 0.0;
				this.mouseUp = false;
			}
		}

		// Decide qué hacer si se ha movido la palanquita de la sección Z1
		if(this.guiControls.giroSeccionZ1 != this.controlSecZ1 || this.controlSecZ1 != 0){
			// Se cambian las posiciones
			// Centro: 4
			let positions = [0,1,2,5,8,7,6,3];

			let giro = this.toRadians(this.guiControls.giroSeccionZ1) - this.toRadians(this.controlSecZ1);
			//Crea la matriz que se va a usar para rotar los elementos
			var matrix = new THREE.Matrix4();
			//Rota la matriz
			matrix.makeRotationZ(-giro);

			this.controlSecZ1 = this.guiControls.giroSeccionZ1;

			// Se le pasa la matriz giro y las posiciones que rotan
			this.rotaCubos(matrix, positions);
			this.cubies[4].applyMatrix(matrix);
			// Se rota el centro tambien

			// Devuelve la palanquita a 0
			//this.guiControls.giroSeccionX1 = 0.0;
			// Si es multiplo de 90º, se rotan las caras
			if (this.mouseUp){
				var giro_final;
				if (this.guiControls.giroSeccionZ1 >= 45.0){
				this.swapPositions(positions);
				giro_final = (Math.PI / 2) - (this.toRadians(this.guiControls.giroSeccionZ1));
				this.changePositions(positions);
				this.changePositions(positions);
				}
				else if (this.guiControls.giroSeccionZ1 <= -45.0){
					giro_final = (-1 * Math.PI / 2) - (this.toRadians(this.guiControls.giroSeccionZ1));
					this.changePositions(positions);
					this.changePositions(positions);
				}
				else {
					giro_final = (this.toRadians(this.guiControls.giroSeccionZ1)) * (-1);
				}
				matrix.makeRotationZ(-giro_final);
				this.cubies[4].applyMatrix(matrix);
				this.rotaCubos(matrix, positions);


				this.guiControls.giroSeccionZ1 = 0.0;
				this.controlSecZ1 = 0.0;
				this.mouseUp = false;
			}
		}
		// Decide qué hacer si se ha movido la palanquita de la sección Z2
		if(this.guiControls.giroSeccionZ2 != this.controlSecZ2 || this.controlSecZ2 != 0){
			// Se cambian las posiciones
			// Centro: 13
			let positions = [9,10,11,14,17,16,15,12];
			
			let giro = this.toRadians(this.guiControls.giroSeccionZ2) - this.toRadians(this.controlSecZ2);
			//Crea la matriz que se va a usar para rotar los elementos
			var matrix = new THREE.Matrix4();
			//Rota la matriz
			matrix.makeRotationZ(-giro);

			this.controlSecZ2 = this.guiControls.giroSeccionZ2;

			// Se le pasa la matriz giro y las posiciones que rotan
			this.rotaCubos(matrix, positions);
			// Se rota el centro tambien

			// Devuelve la palanquita a 0
			//this.guiControls.giroSeccionX1 = 0.0;
			// Si es multiplo de 90º, se rotan las caras
			if (this.mouseUp){
				var giro_final;
				if (this.guiControls.giroSeccionZ2 >= 45.0){
				this.swapPositions(positions);
				giro_final = (Math.PI / 2) - (this.toRadians(this.guiControls.giroSeccionZ2));
				this.changePositions(positions);
				this.changePositions(positions);
				}
				else if (this.guiControls.giroSeccionZ2 <= -45.0){
					giro_final = (-1 * Math.PI / 2) - (this.toRadians(this.guiControls.giroSeccionZ2));
					this.changePositions(positions);
					this.changePositions(positions);
				}
				else {
					giro_final = (this.toRadians(this.guiControls.giroSeccionZ2)) * (-1);
				}
				matrix.makeRotationZ(-giro_final);
				this.rotaCubos(matrix, positions);


				this.guiControls.giroSeccionZ2 = 0.0;
				this.controlSecZ2 = 0.0;
				this.mouseUp = false;
			}
		}
		// Decide qué hacer si se ha movido la palanquita de la sección Z3
		if(this.guiControls.giroSeccionZ3 != this.controlSecZ3 || this.controlSecZ3 != 0){
			// Se cambian las posiciones
			// Centro: 22
			let positions = [18,19,20,23,26,25,24,21];
			
			let giro = this.toRadians(this.guiControls.giroSeccionZ3) - this.toRadians(this.controlSecZ3);
			//Crea la matriz que se va a usar para rotar los elementos
			var matrix = new THREE.Matrix4();
			//Rota la matriz
			matrix.makeRotationZ(-giro);

			this.controlSecZ3 = this.guiControls.giroSeccionZ3;

			// Se le pasa la matriz giro y las posiciones que rotan
			this.rotaCubos(matrix, positions);
			// Se rota el centro tambien

			// Devuelve la palanquita a 0
			//this.guiControls.giroSeccionX1 = 0.0;
			// Si es multiplo de 90º, se rotan las caras
			if (this.mouseUp){
				var giro_final;
				if (this.guiControls.giroSeccionZ3 >= 45.0){
				this.swapPositions(positions);
				giro_final = (Math.PI / 2) - (this.toRadians(this.guiControls.giroSeccionZ3));
				this.changePositions(positions);
				this.changePositions(positions);
				}
				else if (this.guiControls.giroSeccionZ3 <= -45.0){
					giro_final = (-1 * Math.PI / 2) - (this.toRadians(this.guiControls.giroSeccionZ3));
					this.changePositions(positions);
					this.changePositions(positions);
				}
				else {
					giro_final = (this.toRadians(this.guiControls.giroSeccionZ3)) * (-1);
				}
				matrix.makeRotationZ(-giro_final);
				this.rotaCubos(matrix, positions);


				this.guiControls.giroSeccionZ3 = 0.0;
				this.controlSecZ3 = 0.0;
				this.mouseUp = false;
			}
		}

	}

	// Rota todos los cubos del array positions según la matriz matrix
	rotaCubos(matrix, positions){
		this.cubies[positions[0]].applyMatrix(matrix);
		this.cubies[positions[1]].applyMatrix(matrix);
		this.cubies[positions[2]].applyMatrix(matrix);
		this.cubies[positions[3]].applyMatrix(matrix);
		this.cubies[positions[4]].applyMatrix(matrix);
		this.cubies[positions[5]].applyMatrix(matrix);
		this.cubies[positions[6]].applyMatrix(matrix);
		this.cubies[positions[7]].applyMatrix(matrix);
	}
	// Función encargada de rotar 90º una cara aleatoria 
	randomize(){
			var cara = Math.floor(Math.random() * 9);
			switch(cara){
				case 0:
					this.guiControls.giroSeccionX1 = 90;
					break;

				case 1:
					this.guiControls.giroSeccionX2 = 90;
					break;

				case 2:
					this.guiControls.giroSeccionX3 = 90;
					break;

				case 3:
					this.guiControls.giroSeccionY1 = 90;
					break;

				case 4:
					this.guiControls.giroSeccionY2 = 90;
					break;

				case 5:
					this.guiControls.giroSeccionY3 = 90;
					break;

				case 6:
					this.guiControls.giroSeccionZ1 = 90;
					break;

				case 7:
					this.guiControls.giroSeccionZ2 = 90;
					break;

				case 8:
					this.guiControls.giroSeccionZ3 = 90;
					break;
			}
			this.mouseUpTrue();
	}

	update(){
		// Comprobación para saber si se ha pulsado el botón RANDOM para mover el cubo
		// de forma aleatoria
		if(this.guiControls.isRandom){
			this.contadorRand += 1;
			this.rotation.x += 0.05;
			this.rotation.y += 0.05;
			this.rotation.z += 0.05;
			if ((this.contadorRand % 10) == 1){
				this.randomize();
			}

			if(this.contadorRand > 200){
				this.guiControls.isRandom = false;
				this.rotation.x = 0;
				this.rotation.y = 0;
				this.rotation.z = 0;
			}
		}
		
		if(this.guiControls.isSolved == true){
			this.guiControls.isSolved = this.uSure();			
		}

		if (this.guiControls.isSolved == true){
			document.getElementById("posX").innerHTML =  "LO RESOLVISTE, ENHORABUENA AMIGO";
			this.sonido = true;
		}else{
			document.getElementById("posX").innerHTML =  "";
			this.sonido = false;
		}

		// Función que se encarga de realizar los giros en cada eje
		this.decideGiros();

		
	}

	// Convierte grados en radianes
	toRadians(degrees){
		var pi = Math.PI;
		return degrees * (pi/180);
	}

}