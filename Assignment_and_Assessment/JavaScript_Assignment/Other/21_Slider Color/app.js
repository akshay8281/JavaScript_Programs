const slides = document.querySelectorAll('.slide')

// console.log(slides)

let counter = 0
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`
})

// tap Backward btn to scroll to the Previous slide
const goPrevious = () => {
  counter--
  slideColor()
}

// tap forward btn to scroll to the next slide
const goNext = () => {
  counter++
  slideColor()
}

const slideColor = () => {
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
