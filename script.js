
window.addEventListener('keydown', e => {
   const audio = document.querySelector(`audio[data-key = '${e.keyCode}']`
   );
   const animal = document.querySelector(`.animal[data-key='${e.keyCode}']`
   );
   const photo = document.querySelector('.photo');

   photo.setAttribute("data-key", `${e.keyCode}`);
   console.log(photo);

   const sounds = document.querySelectorAll('audio');

   if(!audio) return;
   sounds.forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
   });
   audio.play();
   animal.classList.add('playing');

   if (e.keyCode == "49") {
      photo.classList.remove('chicken','cow','elephant','gorilla','pig','wolf');
      photo.classList.add('chicken');
   }
   if (e.keyCode == "50") {
      photo.classList.remove('chicken','cow','elephant','gorilla','pig','wolf');
      photo.classList.add('cow');
   }
   if (e.keyCode == "51") {
      photo.classList.remove('chicken','cow','elephant','gorilla','pig','wolf');
      photo.classList.add('elephant');
   }
   if (e.keyCode == "52") {
      photo.classList.remove('chicken','cow','elephant','gorilla','pig','wolf');
      photo.classList.add('gorilla');
   }
   if (e.keyCode == "53") {
      photo.classList.remove('chicken','cow','elephant','gorilla','pig','wolf');
      photo.classList.add('pig');
   }
   if (e.keyCode == "54") {
      photo.classList.remove('chicken','cow','elephant','gorilla','pig','wolf');
   photo.classList.add('wolf');
   }

   audio.addEventListener('ended', () => {
   photo.classList.remove('chicken');
   photo.classList.remove('cow');
   photo.classList.remove('elephant');
   photo.classList.remove('gorilla');
   photo.classList.remove('pig');
   photo.classList.remove('wolf');
    });
});

function removeTransition(e) {
   if(e.propertyName !== 'transform') return;
   this.classList.remove('playing');
 };
 
 const animals = document.querySelectorAll('.animal');
 animals.forEach(animal => animal.addEventListener('transitionend', removeTransition));

