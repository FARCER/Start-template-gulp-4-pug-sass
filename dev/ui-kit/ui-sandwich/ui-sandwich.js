let sandwichToggle = function () {
    // Выбираем элементы, которые нам нужны. В примере мы ищем элементы с классом "sandwich"
    let sandwichElements = document.querySelectorAll('.sandwich');
    // Проходим циклом по всем эдементам и на каждый элемент вешаем слушателя, который по клику будет переключать класс
    sandwichElements.forEach((item) => {
        item.addEventListener('click', showSandwichTarget);
    });

    function showSandwichTarget() {
        let targetId = this.getAttribute('data-target-id'),
            targetClassToggle = this.getAttribute('data-target-class-toggle');
        this.classList.toggle('is-active');
        if (targetId && targetClassToggle) {
            document.getElementById(targetId).classList.toggle(targetClassToggle);
        }
    }
};
sandwichToggle();
