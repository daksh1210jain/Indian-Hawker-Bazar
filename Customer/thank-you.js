// JavaScript for the second page

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const rating = urlParams.get('rating');

  const ratingElement = document.querySelector('.mainBox-rating');

  if (!isNaN(rating)) {
    ratingElement.textContent = `You selected ${rating} out of 5`;
  } else {
    ratingElement.textContent = 'No Rating selected';
  }
});