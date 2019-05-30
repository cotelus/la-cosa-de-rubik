class Cubies extends THREE.Mesh {
    constructor(geometry, id, material){
		super();

        this.geometry = geometry;
        this.material = material;
        this.id = id;

        this.add(new THREE.Mesh(this.geometry, this.material));

    }
}