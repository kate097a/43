import * as THREE from 'three'
import { OrbitControls } from 'OrbitControls'
import { GLTFLoader } from 'GLTFLoader'
import { RectAreaLightUniformsLib } from 'RectAreaLightUniformsLib'
import { RectAreaLightHelper } from 'RectAreaLightHelper'
import { RectAreaLight } from 'three'

document.addEventListener('DOMContentLoaded', () => {
  initThree()

  let flag = false;
  const btns = document.querySelectorAll(".navBtn");
  for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener('mouseenter', (e) => {
         // document.getElementById("fixedMenu").style.backdropFilter="blur(10px)"
           document.getElementById("back").style.opacity="0.6"
          e.target.classList.add('hovered')
          //animText(cheakerText(e.target.id))
          var typed = new Typed('.fixedText', {
              strings: [`${cheakerText(e.target.id)}`],
              typeSpeed: 10
            });
            
          flag = true;
      }, false);
  }

  for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener('mouseleave', (e) =>{
       //   document.getElementById("fixedMenu").style.backdropFilter="none"
          document.getElementById("back").style.opacity="0"
          document.getElementById("fixedText").textContent = "";
          e.target.classList.remove('hovered')
          flag = false;
      }, false);
  }
  

  function cheakerText(elem) {
    if (elem == "main") {
        return "главное меню"
    } else if (elem == "shop") {
        console.log("shop")
        return "магазин"
    } else if (elem == "place") {
        console.log("place")
        return "пространство"
    } else if (elem == "book") {
        console.log("book")
        return "книга"
    } else if (elem == "posters") {
        console.log("posters")
        return "постеры"
    }
}

  function animText(a, btn) {
      a = a.split("");
      btn.addEventListener("mouseleave", (e)=> {
          return
      })
  a.forEach((el, i) => setTimeout(() => {
      document.getElementById("fixedText").textContent += a[i]
      btn.addEventListener("mouseleave", (e) => {
          //removeText(a, e)
      })
  }, 100 * (i + 1)));

  }

  const menu = document.querySelector(".menu");
  menu.addEventListener("click", (e) => {
    let tip = e.target;
    for (let i = 0; i <= document.getElementsByClassName("block").length - 1; i++) {
      if (document.getElementsByClassName("block")[i].classList.contains("visible")) {
        document.getElementsByClassName("block")[i].classList.remove("visible")
      }
    }
    document.querySelector(`.${tip.id}`).classList.add("visible")
  })


})

function initThree() {
  //находим html-контейнер
  const model = document.querySelector('.model')

  //создаём сцену
  const scene = new THREE.Scene()
  scene.background = new THREE.Color("rgb(255, 255, 255)")
  scene.position.set(0, -30, 0)

  //создаём камеру
  const camera = new THREE.PerspectiveCamera(
    4,
    window.innerWidth / window.innerHeight,
    0.1,
    3000
  )

  camera.position.set(135, 48, 256)
  
  

  //создаём визуализатор-рендерер
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  model.appendChild(renderer.domElement)

  //подключаем модель
  {
    const loader = new GLTFLoader()
    loader.load(
      './model-narkomfin/place.glb',
      (gltf) => {
        scene.add(gltf.scene)
      },
      (error) => {
        console.log('Error:' + error)
      }
    )
  }

  //добавляем свет
  {
    const light = new THREE.AmbientLight(0xeeeeee)
    scene.add(light)
  }
  {
    const light = new THREE.DirectionalLight(0xeeeeee, 1)
    light.position.set(-80, 100, 0)
    light.lookAt(100, 100, 0)

    // const helper = new THREE.DirectionalLightHelper(light, 5)

    scene.add(light)
  }
  {
    const light = new THREE.DirectionalLight(0xeeeeee, 1)
    light.position.set(50, 100, 0)
    light.lookAt(100, 100, 0)

    // const helper = new THREE.DirectionalLightHelper(light, 5)

    scene.add(light)
  }

  {
    const rectAreaLight = new RectAreaLight(
      0x535353,
      20,
      20,
      20)
    scene.add(rectAreaLight)

    const rectAreaLightHelper = new RectAreaLightHelper(
      rectAreaLight,
      0.5
    )
    scene.add(rectAreaLightHelper)
  }


  //управление моделью
  const controls = new OrbitControls(camera, renderer.domElement)
  // controls.autoRotate = true
  // controls.autoRotateSpeed = 5
  controls.enableDamping = true
  controls.maxDistance = 100
  controls.minDistance = 300
  controls.maxPolarAngle = Math.PI / 2.2
  controls.enableDamping = true;

  function animate() {
    requestAnimationFrame(animate)
    controls.update()

			
    renderer.render(scene, camera)
  }

  window.addEventListener('resize', onWindowResize)

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()

    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  animate()
}
