var escena = new THREE.Scene();
var camara = new THREE.PerspectiveCamera();
camara.position.z = 30; 
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild( renderizador.domElement );
var forma1 = new THREE.CylinderGeometry(5, 5, 20, 32);
<!var forma2 = new THREE.SphereGeometry(5, 32, 32);>
var material = new THREE.MeshNormalMaterial();
var cuerpo= new THREE.Mesh(Forma1, material);
<!var arriba= new THREE.Mesh(Forma2, material);>
escena.add( cuerpo );
<!escena.add(arriba);>
renderizador.render( escena, camara );
