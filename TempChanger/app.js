const currencyURL =
  'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/'

const dropDowns = document.querySelectorAll('.dropDown select')
const button = document.querySelector('form button')
const fromCurr = document.querySelector('.from select')
const toCurr = document.querySelector('.to select')
const msg = document.querySelector('.msg')
window.addEventListener('load', () => {
  updateCuurRate()
})
/// Check the Data is availableor not using FOR IN LOOP
// for (let code in countryList) {
//     console.log(code,countryList[code]);
// }

for (let select of dropDowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement('option')
    newOption.innerText = currCode
    newOption.value = currCode
    if (select.name === 'from' && currCode === 'USD') {
      newOption.selected = 'selected'
    } else if (select.name === 'to' && currCode === 'INR') {
      newOption.selected = 'selected'
    }
    select.append(newOption)
  }
  select.addEventListener('change', evt => {
    updateFlag(evt.target)
  })
}

let updateCuurRate = async () => {
  let amount = document.querySelector('.amount input')
  let amtValue = amount.value
  if (amtValue === '' || amtValue < 1) {
    amtValue = 1
    amount.value = '1'
  }
  //   console.log(fromCurr.value, toCurr.value)
  const myURL = `${currencyURL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`
  let response = await fetch(myURL)
  let data = await response.json()
  let rate = data[toCurr.value.toLowerCase()]
  console.log(rate)

  let finalAmount = amtValue * rate
  //   msg.innerText = `1 USD = 80 INR`
  msg.innerText = `${amtValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
}

const updateFlag = element => {
  let currCode = element.value
  console.log(currCode)
  let countryCode = countryList[currCode]
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
  let img = element.parentElement.querySelector('img')
  img.src = newSrc
}

button.addEventListener('click', evt => {
  evt.preventDefault()
  updateCuurRate()
})
