let counter = function () {
    let btns = document.querySelectorAll('.counter__btn');
    btns.forEach(function (item) {
        item.addEventListener('click', counterState)
    });

    function counterState() {
        let dir = this.dataset.direction,
            inputEl = this.parentElement.previousElementSibling,
            currentValue = inputEl.value;
        dir === 'plus' ? counterPlus(inputEl, currentValue) : counterMinus(inputEl, currentValue);
    }

    const counterPlus = (el, val) => {
        el.value = +val + 1;
    };

    const counterMinus = (el, val) => {
        if (val - 1) el.value = +val - 1;
    };

};


counter();
