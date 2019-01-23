let select = () => {
    let selectCurrent = document.querySelectorAll('.select__header'),
        selectItem = document.querySelectorAll('.select__list_item');
    selectCurrent.forEach(function (item) {
        item.addEventListener('click', function () {
            this.parentElement.classList.toggle('is-open');
        })
    });
    selectItem.forEach(function (item) {
        item.addEventListener('click', function () {
            this.closest('.select').querySelector('.select__current_text').innerHTML = this.innerHTML;
            this.closest('.select').classList.remove('is-open');
        })
    });
};
select();
