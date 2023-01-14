const burgerBtn = document.querySelector('#burger')
const navList = document.querySelector('.header-nav__list')
const classNameShow = 'header-nav__list-show'
const classNameHidden = 'header-nav__list-hidden'

function hiddenOrShowNavBar() {
    const cls = navList.classList
    if (cls.contains(classNameShow)) {
        cls.remove(classNameShow);
        cls.add(classNameHidden)
    } else {
        cls.add(classNameShow);
        cls.remove(classNameHidden);
    }
}

burgerBtn.addEventListener('click', function (event) {
    hiddenOrShowNavBar()
})

