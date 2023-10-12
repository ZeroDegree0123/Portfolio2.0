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
