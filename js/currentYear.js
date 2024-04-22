// Mendapatkan elemen dengan id "currentYear"
var currentYearElement = document.getElementById("currentYear");

// Mendapatkan tahun saat ini
var currentYear = new Date().getFullYear();

// Menampilkan tahun saat ini di dalam elemen HTML
currentYearElement.textContent = " " + currentYear;
