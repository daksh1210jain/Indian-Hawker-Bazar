let continueReadingLinks = document.querySelectorAll('.continue-reading');

continueReadingLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        let extraPara = event.target.nextElementSibling;
        let arrowIcon = event.target.querySelector('i');
        
        if (extraPara.style.display === 'none') {
            extraPara.style.display = 'block';
            event.target.firstChild.nodeValue = 'Read Less ';
            arrowIcon.classList.remove('fa-arrow-down');
            arrowIcon.classList.add('fa-arrow-up');
        } else {
            extraPara.style.display = 'none';
            event.target.firstChild.nodeValue = 'Continue Reading ';
            arrowIcon.classList.remove('fa-arrow-up');
            arrowIcon.classList.add('fa-arrow-down');
        }
    });
});