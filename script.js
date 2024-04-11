function updateCountdown() {
    var month = parseInt(document.getElementById("month").value);
    var date = parseInt(document.getElementById("date").value);
  
    if (!month || !date || date > 31 || date < 1) {
      document.getElementById("countdown").innerHTML = "Please select both a valid month and a valid date (1-31).";
      return;
    }
  
    var today = new Date();
    var currentYear = today.getFullYear();
  
    // Assuming the current year
    var birthdayDate = new Date(currentYear, month - 1, date);
  
    // Check if birthday has already occurred in the current year
    if (today.getMonth() > birthdayDate.getMonth() || (today.getMonth() === birthdayDate.getMonth() && today.getDate() > birthdayDate.getDate())) {
      // Birthday has already passed, calculate for next year
      birthdayDate.setFullYear(currentYear + 1);
    }
  
    var timeLeft = birthdayDate.getTime() - today.getTime();
  
    if (today.getMonth() === birthdayDate.getMonth() && today.getDate() === birthdayDate.getDate()) {
      document.getElementById("countdown").innerHTML = "Happy Birthday!";
      return;
    }
  
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
    document.getElementById("countdown").innerHTML = days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds left until your next birthday";
  }
  
  // Add event listeners to month dropdown and date input for live update
  document.getElementById("month").addEventListener("change", updateCountdown);
  document.getElementById("date").addEventListener("input", updateCountdown);
  
  // Get references to the color pickers and apply buttons
  const colorPicker = document.getElementById('color-picker');
  const applyColorButton = document.getElementById('apply-color');
  const textColorPicker = document.getElementById('text-color-picker');
  const applyTextColorButton = document.getElementById('apply-text-color');
  const containerColorPicker = document.getElementById('container-color-picker');
  const applyContainerColorButton = document.getElementById('apply-container-color');
  
  // Get references to the month and date elements
  const monthElement = document.getElementById('month');
  const dateElement = document.getElementById('date');
  
  // Add event listener for the apply background color button
  applyColorButton.addEventListener('click', () => {
      const selectedColor = colorPicker.value;
      document.documentElement.style.setProperty('--custom-color', selectedColor);
      document.body.classList.add('custom-color');
      monthElement.style.backgroundColor = selectedColor;
      dateElement.style.backgroundColor = selectedColor;
  });
  
  // Add event listener for the apply text color button
  applyTextColorButton.addEventListener('click', () => {
    const selectedTextColor = textColorPicker.value;
    document.documentElement.style.setProperty('--text-color', selectedTextColor);
    monthElement.style.color = selectedTextColor;
    dateElement.style.color = selectedTextColor;
  });
  
  // Add event listener for the apply container color button
  applyContainerColorButton.addEventListener('click', () => {
    const selectedContainerColor = containerColorPicker.value;
    document.documentElement.style.setProperty('--container-color', selectedContainerColor);
    monthElement.style.borderColor = selectedContainerColor;
    dateElement.style.borderColor = selectedContainerColor;
  });
  
  // Initial update
  updateCountdown();
  
  // Live update every second
  setInterval(updateCountdown, 1000);