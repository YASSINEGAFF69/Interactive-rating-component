const hiddenElements = [
    ...document.querySelectorAll('.hidden')
  ];
  
  const visibleElements = [
    ...document.querySelectorAll('.main > *:not(.hidden)'),
    ...document.querySelectorAll('.choices button') // Include the buttons in the visible elements
  ];
  
  const btns = document.querySelectorAll('.choices button');
  const submitBtn = document.querySelector('.Submit');
  let choice = 0;
  
  btns.forEach(btn => {
    btn.addEventListener("click", function () {
      choice = btn.innerHTML;
      btns.forEach(b => b.style.backgroundColor = ''); // Reset background for all buttons
      btn.style.backgroundColor = 'hsl(25, 97%, 53%)'; // Highlight the selected button
    });
  });
  
  submitBtn.addEventListener("click", function () {
    hiddenElements.forEach(element => element.classList.toggle("hidden"));
    visibleElements.forEach(element => element.classList.toggle("hidden"));
    document.querySelector('.selection span').innerHTML = choice;
    document.querySelector('.main').style.alignItems = "center"; 

  });
  