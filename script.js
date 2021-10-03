window.addEventListener('load', () => {
  const sound = document.querySelectorAll(".mixs");
  const pod = document.querySelectorAll('.pod div');
  const display = document.querySelector('.front-End');
  const pop = [
    "#FFE459",
    "#3D087B",
    "#290FBA",
    "#4AA96C",
    "#C7753D",
    "#84142D"
  ];



pod.forEach((pod, index) =>{
  pod.addEventListener('click', function(){
    sound[index].currentTime = 0;
    sound[index].play();
    bubble(index);
  });
});
const bubble = (index) =>{
  const bob = document.createElement('div');
  display.appendChild(bob);
  bob.style.backgroundColor = pop[index];
  bob.style.animation = `jump 1s ease`;
};
});
