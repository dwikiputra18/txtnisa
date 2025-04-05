function openEnvelope() {
    document.querySelector('button').style.display = 'none';
    const wrapper = document.getElementById('envelopeWrapper');
    wrapper.style.display = 'block';
  
    setTimeout(() => {
      document.getElementById('envelope').classList.add('show');
  
      setTimeout(() => {
        document.getElementById('nextButton').style.display = 'block';
      }, 1500);
    }, 100);
  }
  function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.animationDuration = (Math.random() * 5 + 5) + 's'; // 5 - 10s
    document.body.appendChild(flower);
  
    setTimeout(() => {
      flower.remove();
    }, 10000);
  }
  
  setInterval(createFlower, 500);
  