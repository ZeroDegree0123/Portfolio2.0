// Project Modals
const modals = document.querySelectorAll('[data-modal]');

modals.forEach(function (trigger) {
    trigger.addEventListener('click', function (evt) {
        evt.preventDefault();
        const modal = document.getElementById(trigger.dataset.modal);
        const exits = modal.querySelectorAll('.modal-exit');

        modal.classList.add('open');

        exits.forEach(function (exit) {
            exit.addEventListener('click', function (evt) {
                evt.preventDefault()
                modal.classList.remove('open');
            })
        })
    })
})


// ANIMATIONS
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show-slide-up');
        } else {
            entry.target.classList.remove('show-slide-up');
        }
    })
})

const blurElements = document.querySelectorAll('.blur-hidden')
const slideElements = document.querySelectorAll('.slide-hidden');
const oppositeSlideElements = document.querySelectorAll('.slide-opposite-hidden');
const slideUpElements = document.querySelectorAll('.slide-up-hidden');

blurElements.forEach((element) => observer.observe(element))
slideElements.forEach((element) => observer.observe(element))
oppositeSlideElements.forEach((element) => observer.observe(element))
slideUpElements.forEach((element) => observer2.observe(element))

