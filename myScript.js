
function beginSliding(e) {
    slider.onpointermove = slide;
    slider.setPointerCapture(e.pointerId);
  }
  
  function stopSliding(e) {
    slider.onpointermove = null;
    slider.releasePointerCapture(e.pointerId);
  }
  
  function slide(e) {
    slider.style.transform = `translate(${e.clientX - 70}px)`;
  }
  
  const slider = document.getElementById('slider');
  
  slider.onpointerdown = beginSliding;
  slider.onpointerup = stopSliding;