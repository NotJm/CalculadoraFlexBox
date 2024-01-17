const buttons = document.querySelectorAll("#btn");
buttons.forEach((button, iterator) => {
    button.addEventListener('click', (e) => {
        console.log(button.textContent);
    });
})
