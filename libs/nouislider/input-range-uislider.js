(() => {
  const inputRange = document.getElementById('inputRangeUislider');

  noUiSlider.create(inputRange, {
    connect: true,
    tooltips: false,
    start: [2000, 150000],
    range: {
      'min': 0,
      'max': 200000,
    },
  })

  const priceMIn = document.getElementById('price-min');
  const priceMax = document.getElementById('price-max');

  inputRange.noUiSlider.on('update', (values) => {
    setInputsValues(values);
  })

  priceMIn.addEventListener('input', () => {
    if (checkMInLessMax(priceMIn.value, priceMax.value)) {
      inputRange.noUiSlider.set([priceMIn.value, null]);
    }
  })

  priceMax.addEventListener('input', () => {
    if (checkMInLessMax(priceMIn.value, priceMax.value)) {
      inputRange.noUiSlider.set([null, priceMax.value]);
    }
  })

  function checkMInLessMax(min, max) {
    console.log(min <= max);
    return min <= max;
  }

  function setInputsValues(values) {

    priceMIn.value = Math.round(Number(values[0]));
    priceMax.value = Math.round(Number(values[1]));
  }
})()
