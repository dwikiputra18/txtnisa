function openEnvelope() {
    document.querySelector('button').style.display = 'none';
    const wrapper = document.getElementById('envelopeWrapper');
    wrapper.style.display = 'block';
  
    setTimeout(() => {
      document.getElementById('envelope').classList.add('show');
    }, 100);
  }
  