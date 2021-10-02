import * as THREE from 'three'

export default class Sketch {
  constructor(option) {
    this.time = 0
     this.scene = new THREE.Scene();
     this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    this.camera.position.z = 1;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    option.dom.appendChild(this.renderer.domElement);

  }

  addMesh(){
     this.geometry = new THREE.PlaneBufferGeometry(.5, .5);
     this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
     this.cube = new THREE.Mesh( this.geometry, this.material );
    this.scene.add( this.cube );
  }

  render() {
    this.time++;
    window.requestAnimationFrame(this.render.bind(this));
    this.renderer.render(this.scene, this.camera)
  }
}


