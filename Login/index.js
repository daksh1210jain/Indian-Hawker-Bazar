document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);

// carosuel start
const carousel = document.querySelector('.carousel');
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    let intervalId = null;
    const intervalTime = 2000;
    const goToIndex = (index) => {
      carouselInner.style.transform = `translateX(-${index * 100}%)`;
      currentIndex = index;
    };
    const nextIndex = () => {
      const nextIndex = currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1;
      goToIndex(nextIndex);
    };
    const startInterval = () => {
      intervalId = setInterval(nextIndex, intervalTime);
    };
    const stopInterval = () => {
      clearInterval(intervalId);
    };
    carousel.addEventListener('mouseenter', stopInterval);
    carousel.addEventListener('mouseleave', startInterval);
    startInterval();

    // carosuel end