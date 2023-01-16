const burgerBtn = document.querySelector('#burger')
const navList = document.querySelector('.header-nav__list')
const classNameShow = 'header-nav__list-show'
const classNameHidden = 'header-nav__list-hidden'

const btnSliderLeft = document.querySelector('#slider__left')
const btnSliderRight =document.querySelector('#slider__right')
const sliderPhoto =document.querySelector('#slider__photo')

const arrayPhotosSrc = [
    'img/html.jpg',
    'img/css.jpg',
    'img/js.jpg',
]

let currentIndexPhoto = 0

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

function showPhotoInSlider(index) {
    sliderPhoto.src = arrayPhotosSrc[index]
}

showPhotoInSlider(currentIndexPhoto)

btnSliderLeft.addEventListener('click', () => changeCurrentIndex(-1))
btnSliderRight.addEventListener('click', () => changeCurrentIndex(+1))


function changeCurrentIndex(num) {
    let lengthArr = arrayPhotosSrc.length

    if (num === +1 && currentIndexPhoto < lengthArr - 1) {
        ++currentIndexPhoto
        showPhotoInSlider(currentIndexPhoto)
    } else if (num === +1 && currentIndexPhoto === lengthArr - 1) {
        currentIndexPhoto = 0
        showPhotoInSlider(currentIndexPhoto)
    } else if (num === -1 && currentIndexPhoto === 0) {
        currentIndexPhoto = lengthArr - 1
        showPhotoInSlider(currentIndexPhoto)
    } else if (num === -1 && currentIndexPhoto > 0) {
        --currentIndexPhoto
        showPhotoInSlider(currentIndexPhoto)
    }
}


