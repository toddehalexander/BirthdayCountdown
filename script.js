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

// Initial update
updateCountdown();

// Live update every second
setInterval(updateCountdown, 1000);
