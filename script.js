// Получаем элементы
    const g = document.getElementById('greeting');
    const btn = document.getElementById('askName');

    // Функция показывает приветствие
    function showGreeting(name) {
      g.textContent = name
        ? `Hello, ${name}!`
        : 'Welcome!';
    }

    // Функция спрашивает имя
    function askName() {
      const name = prompt('What is your name?');
      if (name) {
        localStorage.setItem('visitorName', name);
      } else {
        localStorage.removeItem('visitorName');
      }
      showGreeting(localStorage.getItem('visitorName'));
    }

    // Когда нажимаем кнопку — спрашиваем имя
    btn.addEventListener('click', askName);

    // Если имя уже сохранено — показываем сразу
    showGreeting(localStorage.getItem('visitorName'));

const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

const toTop = document.getElementById("toTop");


// BURGER MENU

burger.addEventListener("click", function() {

    const isOpen = nav.classList.toggle("open");

    burger.setAttribute("aria-expanded", String(isOpen));

});


// CLOSE MENU AFTER CLICK

nav.querySelectorAll("a").forEach(function(link) {

    link.addEventListener("click", function() {

        nav.classList.remove("open");

        burger.setAttribute("aria-expanded", "false");

    });

});


// BACK TO TOP BUTTON

function updateTopButton() {

    if (window.scrollY > 150) {

        toTop.classList.add("visible");

    } else {

        toTop.classList.remove("visible");

    }

}

window.addEventListener("scroll", updateTopButton);

updateTopButton();


// SCROLL TO TOP

toTop.addEventListener("click", function() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});