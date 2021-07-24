const slider = (() => {
    const slides = document.querySelectorAll('.slide');
    const prev = document.querySelector('#prev');
    const next = document.querySelector('#next');
    const auto = false;
    const intervalTime = 5000;

    let slideInterval;

    const timeOut = () => {
        setTimeout((()=> current.classList.remove('current')), 200);
    }

    const autoSlide = () => {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime)
    };

    const nextSlide = () => {
        const current = document.querySelector('.current')
        current.classList.remove('current');
        if(current.nextElementSibling) {
            current.nextElementSibling.classList.add('current')
        } else {
            slides[0].classList.add('current');
        }
        timeOut()
        }

    const prevSlide = () => {
        const current = document.querySelector('.current')
        current.classList.remove('current');
        if(current.previousElementSibling) {
            current.previousElementSibling.classList.add('current')
        } else {
            slides[slides.length -1].classList.add('current');
        }
        timeOut()
    }

    prev.addEventListener('click', e=> {
        prevSlide();
        if(auto) {
            autoSlide()
        }
    })
    next.addEventListener('click', e=> {
        nextSlide()
        if(auto) {
            autoSlide()
        }
    })
})()

export default slider;