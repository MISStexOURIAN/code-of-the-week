window.addEventListener('scroll', function () {
    const div1 = document.getElementById('wine');
    const div2 = document.getElementById('about');

    if (window.scrollY > 200) {
        div1.classList.add('fade-in-up-from-left');
        div2.classList.add('fade-in-up-from-right');
    } else {
        div1.classList.remove('fade-in-up-from-left');
        div2.classList.remove('fade-in-up-from-right');
    }
});