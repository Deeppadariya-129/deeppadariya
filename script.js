const light = document.querySelector('.light');

document.addEventListener('mousemove', (e) => {
  gsap.to(light, {
    x: e.clientX - light.clientWidth / 2,
    y: e.clientY - light.clientHeight / 2,
    duration: 0.2,
    ease: 'power2.out'
  });
});


const textanimation = document.querySelector('.textanimation');
gsap.to(textanimation, {
    duration: 0.5,  // Duration of each "beep"
    opacity: 0.2,   // Target opacity for the "beep"
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true  // Easing function for smooth animation
});

const navlinks=document.querySelector('.navbar')
// console.log(navlinks);


function showmenu(){
  navlinks.style.display="block"
  navlinks.style.right="0" 
}

function hidemenu(){
  navlinks.style.right="-200px"
}


