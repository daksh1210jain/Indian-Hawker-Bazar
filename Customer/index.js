// JavaScript for the first page

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.button');
  let previousButton = null;
  let selectedRating = null;

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (previousButton) {
        previousButton.classList.remove('fixedColor');
      }
      button.classList.add('fixedColor');
      previousButton = button;
      selectedRating = button.textContent;
    });
  });

  const submitBtn = document.querySelector('.submitButton');
  submitBtn.addEventListener('click', () => {
    window.location.href = `thank-you.html?rating=${selectedRating}`;
  });
});
