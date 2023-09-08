// const sections = document.querySelectorAll('.section');
// const sectBtns = document.querySelectorAll('.controls');
// const sectBtn = document.querySelectorAll('.control');
// const allSections = document.querySelectorAll('.main-content');

// function PageTransitions(){
//     // Button click -> active class
//     for (let i = 0; i < sectBtn.length; i++) {
//         sectBtn[i].addEventListener('click', function() {
//             // current button
//             let currentBtn = document.querySelectorAll('.active-btn');
//             // remove 'active-btn' from current button's class name
//             currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
//             // add 'active-btn' to new clicked button's class name
//             this.className += 'active-btn'
//         })
//     }
// }

// PageTransitions();

(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();