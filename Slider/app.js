const slides = document.querySelectorAll('.slide')

// console.log(slides)

let counter = 0
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`
})

const goPrevious = () => {
  counter--
  slideImage()
}

const goNext = () => {
  counter++
  slideImage()
}

const slideImage = () => {
  slides.forEach(slide => {
    slide.style.transform = `translateX(-${counter * 100}%)`
    totalSlides = 6
    if (counter < 0) {
      counter = 0
    } else if (counter >= totalSlides) {
      counter = totalSlides - 1
    }
  })
}
