const sliderEl = document.querySelector("#range")


function progressScript() {

  const sliderValue = sliderEl.value;
  sliderEl.style.background = `linear-gradient(to right, #FAD8DF ${sliderValue}%, #B1E7FF ${sliderValue}%)`;

  const selectedOptionIndex = Math.floor(sliderValue / 25);

  const contentAreas = document.querySelectorAll('.content-area');
  contentAreas.forEach(area => area.style.display = 'none');

  const selectedContentArea = document.getElementById(`content-${selectedOptionIndex + 1}`);
  selectedContentArea.style.display = 'block';

}
  
progressScript()



