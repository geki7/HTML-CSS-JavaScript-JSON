var users = [
  {
      "id_user": "9",
      "id_status": "2",
      "id_type": "3",
      "username": "mjurisic",
      "name": "Markos",
      "surname": "Juri\u0161i\u0107",
      "email": "mjurisic@suremail.info",
      "image": "images\/users\/mjurisic_Chrysanthemum.jpg",
      "code": "1356647516",
      "failed_login": "0",
      "blocked_until": "0000-00-00 00:00:00",
      "password": "321"
  },
  {
      "id_user": "10",
      "id_status": "2",
      "id_type": "1",
      "username": "jseva",
      "name": "Jurica",
      "surname": "\u0160eva",
      "email": "jseva@mailinator.com",
      "image": "images\/users\/default.jpg",
      "code": "1334431668",
      "failed_login": "0",
      "blocked_until": "0000-00-00 00:00:00",
      "password": "321"
  },
];

// Define a variable to store the search results


  // Define a variable to store the search results
  var allResults = [];

  // Listen for changes to the search input
  $('#search-input').on('input', function() {
    // Clear the previous search results
    $('#search-results').empty();

    // Retrieve the search query
    var query = $(this).val();

    // If the query is not empty, search for results
    if (query !== '') {
      // Perform an AJAX request to retrieve all search results
      $.ajax({
        url: 'json/search.json',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
          // Store all search results in the 'allResults' variable
          allResults = data;

          // Filter the results based on the search query
          var filteredResults = allResults.filter(function(result) {
            return result.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
          });

          // Loop through the filtered search results and append them to the list
          for (var i = 0; i < filteredResults.length; i++) {
            var result = filteredResults[i];
            // Create a list item with the result title and URL
            var li = $('<li>').text(result.title).data('url', result.url);
            // Add a click event listener to navigate to the result URL when clicked
            li.on("click", function() {
              window.location.href = $(this).data('url');
            });
            // Append the list item to the search results list
            $('#search-results').append(li);
          }
        },
        error: function() {
          console.log('Error retrieving search results');
        }
      });
    }
  });


const emailInput = document.getElementById('email');
const checkEmailBtn = document.getElementById('check-email-btn');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('potvrda_lozinke');
const submitBtn = document.getElementById('registriraj');

// check email existence
checkEmailBtn.addEventListener('click', () => {
  const userEmail = emailInput.value;
  const user = users.find((user) => user.email === userEmail);
  if (user) {
    alert('Email već postoji');
  }
});

// check password strength
passwordInput.addEventListener('blur', () => {
  const password = passwordInput.value;
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^\s=/*%]{1}.{12,23}[^\s=/*%]{1}$/;
  if (!regex.test(password)) {
    alert('Šifra mora sadržavati 1 veliko slovo, 1 malo slovo, 1 broj, i 0 razmaka. Specijalna slova (=, *, /, %) su dozvoljena, ali ne mogu biti na početku ili kraju. Šifra mora biti između 15 i 25 slova.');
    passwordInput.focus();
  }
});

// check passwords match
confirmPasswordInput.addEventListener('blur', () => {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  if (password !== confirmPassword) {
    alert('Šifre se ene podudaraju');
    confirmPasswordInput.focus();
  }
});

// submit form
const registrationForm = document.getElementById('registration-form');
registrationForm.addEventListener('submit', (event) => {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  if (password !== confirmPassword) {
    alert('Šifre se ne podudaraju!');
    event.preventDefault();
  }
});

