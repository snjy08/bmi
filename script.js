function checking() {
    // Get the input values
    const weightInput = document.getElementById('weight_entry').value;
    const heightInput = document.getElementById('height_entry').value;

    // Input validation
    if (!weightInput || !heightInput) {
        alert("Please enter valid values for weight and height.");
        return;
    }

    // Convert input values to numbers
    const weight = parseFloat(weightInput);
    const height = parseFloat(heightInput);

    // Further input validation
    if (isNaN(weight) || isNaN(height) || height <= 0) {
        alert("Please enter valid values for weight and height.");
        return;
    }

    // Calculate BMI
    const bmi = weight / ((height / 100) ** 2);
    console.log(bmi);

    // Update BMI result on the page
    const bmiResultElement = document.getElementById('bmiresultt');
    bmiResultElement.textContent = bmi.toFixed(2);

    if (bmi > 16 && bmi < 21) {
        resultvalue.textContent = "THIN";
        resultvalue.style.color = "orange";
    } else if (bmi > 20 && bmi < 25) {
        resultvalue.textContent = "NORMAL";
        resultvalue.style.color = "green";
    } else if ( bmi>25 && bmi < 30) {
        resultvalue.textContent = "OVER-WEIGHT";
        resultvalue.style.color = "red";
    } else if ( bmi>30 && bmi < 37) {
        resultvalue.textContent = "OBESE..XXX";
        resultvalue.style.color = "red";
    } else {
        resultvalue.textContent = "X...Error...X"
    }

}

const btn = document.getElementsByClassName('btn')[0];

btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = 'red';
  btn.style.color = 'white';
});