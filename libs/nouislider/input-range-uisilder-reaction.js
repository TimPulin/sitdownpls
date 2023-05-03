const sliderHandles = document.querySelectorAll('.noUi-handle');
const sliderConnect = document.querySelector('.noUi-connect');

sliderHandles.forEach(handle => {
  handle.addEventListener('mousedown', () => {
    sliderConnect.classList.add('noUi-connect--focus');
  })

  handle.addEventListener('mouseup', () => {
    sliderConnect.classList.remove('noUi-connect--focus');
  })

  handle.addEventListener('mouseout', () => {
    sliderConnect.classList.remove('noUi-connect--focus');
  })
})
