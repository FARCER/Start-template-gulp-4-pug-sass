let select = () => {
    let selectCurrent = document.querySelectorAll('.select__header'),
        selectItem = document.querySelectorAll('.select__list_item');
    selectCurrent.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.currentTarget.parentElement.classList.toggle('is-open');
        })
    });
    selectItem.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.currentTarget.closest('.select').querySelector('.select__current_text').innerHTML = this.innerHTML;
            e.currentTarget.closest('.select').classList.remove('is-open');
        })
    });
};
select();
