const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector(".results");
  const weightRange = document.querySelector(".weightRange");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `<h3> Please enter a valid Height ${height}</h3>`;
    results.style.backgroundColor = "darkGreen";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `<h3> Please enter a valid Weight ${weight}</h3>`;
    results.style.backgroundColor = "darkGreen";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //SHow the result
    results.innerHTML = `<span>${bmi}</span>`;
    results.style.backgroundColor = "darkGreen";

    if (bmi <= 18.6) {
      weightRange.innerHTML = `<h3>${bmi} is Underweight</h3>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      weightRange.innerHTML = `<h3>${bmi} is Normal weight range</h3>`;
    } else {
      weightRange.innerHTML = `<h3>${bmi} is Overweight - Greater than 24.9</h3>`;
    }
  }
});
