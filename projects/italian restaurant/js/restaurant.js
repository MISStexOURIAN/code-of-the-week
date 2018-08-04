window.addEventListener('scroll', function () {
    const div1 = document.getElementById('wine');
    const div2 = document.getElementById('about');
    const lasagnaText = document.getElementById('lasagna-text');
    const baricole = document.getElementById('baricole');
    const eggplant = document.getElementById('eggplant-text');

    if (window.scrollY > 200) {
        div1.classList.add('fade-in-up-from-left');
        div2.classList.add('fade-in-up-from-right');
    } else {
        div1.classList.remove('fade-in-up-from-left');
        div2.classList.remove('fade-in-up-from-right');
        lasagnaText.classList.remove('fade-in-up-from-left');
    }

    if (window.scrollY > 950) {
        lasagnaText.classList.add('fade-in-up-from-left');
        baricole.classList.add('fade-in-up');
        eggplant.classList.add('fade-in-up-from-right');
    } else {
        lasagnaText.classList.remove('fade-in-up-from-left');
        baricole.classList.remove('fade-in-up');
        eggplant.classList.remove('fade-in-up-from-right');


    }
});