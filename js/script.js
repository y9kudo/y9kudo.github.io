// Инициализация сцены, камеры и рендера
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

// Создание геометрической фигуры (тетраэдр)
const geometry = new THREE.TetrahedronGeometry(1, 0);
const edges = new THREE.EdgesGeometry(geometry);
const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
const line = new THREE.LineSegments(edges, lineMaterial);
scene.add(line);

// Установка позиции камеры
camera.position.z = 5;

// Анимация
function animate() {
    requestAnimationFrame(animate);

    // Вращение фигуры line.rotation.x += 0.01;
    line.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();

// Обработка изменения размера окна
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});