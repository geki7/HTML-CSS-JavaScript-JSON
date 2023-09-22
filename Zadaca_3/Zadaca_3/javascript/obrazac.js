
// I would add the hidden classes to the elements in your html, 

var title = document.getElementById('title');
var email2 = document.getElementById('email2');
var kategorija = document.getElementById('kategorija')
var opis = document.getElementById('opis')
var vrijeme_datum_kreiranja = document.getElementById('vrijeme_datum_kreiranja')
var telefon = document.getElementById('telefon')
var poveznica = document.getElementById('poveznica')
var next = document.getElementById("next")
var submitButton = document.getElementById('obrazac-gumb-za-predaju')

// I think inputs with no textContent return as undefined or falsey or null, omg js with so many values.
// so I think you can check for those values like this also -> if (phone.textContent) { }


next.addEventListener("click", () => {
    if (title.value.length != 0) {
        email2.classList.remove('hidden');
        email2.classList.add('not-hidden');
    } else {
        email2.classList.remove('not-hidden')
        email2.classList.add('hidden');
    }

    if (email2.value.length != 0) {
        kategorija.classList.remove('hidden');
        kategorija.classList.add('not-hidden');
    } else {
        kategorija.classList.remove('not-hidden')
        kategorija.classList.add('hidden');
    }

    if (kategorija.options[kategorija.selectedIndex].value != "default") {
        console.log(kategorija.options[kategorija.selectedIndex].value)
        opis.classList.remove('hidden');
        opis.classList.add('not-hidden');
    } else {
        opis.classList.remove('not-hidden')
        opis.classList.add('hidden');
    }

    if (opis.value.length != 0) {
        vrijeme_datum_kreiranja.classList.remove('hidden');
        vrijeme_datum_kreiranja.classList.add('not-hidden');
    } else {
        vrijeme_datum_kreiranja.classList.remove('not-hidden')
        vrijeme_datum_kreiranja.classList.add('hidden');
    }

    if (vrijeme_datum_kreiranja.value) {
        telefon.classList.remove('hidden');
        telefon.classList.add('not-hidden');
    } else {
        telefon.classList.remove('not-hidden')
        telefon.classList.add('hidden');
    }

    if (telefon.value.length != 0) {
        poveznica.classList.remove('hidden');
        poveznica.classList.add('not-hidden');
    } else {
        poveznica.classList.remove('not-hidden')
        poveznica.classList.add('hidden');
    }
    
    if (poveznica.value.length != 0) {
        submitButton.classList.remove('hidden');
        submitButton.classList.add('not-hidden');
    } else {
        submitButton.classList.remove('not-hidden')
        submitButton.classList.add('hidden');
    }
})



// Get the title element
var title = document.getElementById("title");

// Listen for key presses in the title field
title.addEventListener("keydown", function(event) {
  // Get the key code of the pressed key
  var keyCode = event.key;
  console.log("KEY", keyCode)

  // If the pressed key is a forbidden character, prevent the default action (i.e. typing the character)
  if (keyCode === '"' || keyCode === '’' || keyCode === '%' || keyCode === '+' || keyCode === '-') {
    event.preventDefault();
  }
});

function validateForm() {

    // validate email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|hr|info)$/;
    if (!emailPattern.test(email.value)) {
      alert("Email nije ispravnog formata");
      email.focus();
      return false;
    }

    // validate message length and remove HTML tags
    var messageLength = opis.value.replace(/<[^>]*>?/gm, '').length;
    if (messageLength < 50) {
      alert("Poruka mora imati najmanje 50 znakova");
      opis.focus();
      return false;
    }

    // enable submit button
    document.getElementById("myForm").submit();
  }


  // Get form elements
const emailInput = document.getElementById("email2");
const messageTextarea = document.getElementById("opis");
const domainInput = document.getElementById('poveznica');

// Get the "Send" button
const sendButton = document.getElementById("obrazac-gumb-za-predaju");

// Add a click event listener to the "Send" button
sendButton.addEventListener("click", function(event) {
  
  // Validate the form data
  if (validateEmail(emailInput.value) && validateMessage(messageTextarea.value) && validateDomainLength(domainInput.value)) {
    document.getElementById('obrazac').submit();
  }
});


// Helper function to validate the email address
function validateEmail(email) {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|hr|info)$/;
  if (!emailRegex.test(email)) {
    alert("Molim te unesi važeću email adresu.");
    return false;
  }
  return true;
}

// Helper function to validate the message text
function validateMessage(messageText) {
  const invalidHtmlTags = /<|>/;
  if (messageText.length < 50) {
    alert("Poruka mora imati minimalno 50 slova.");
    return false;
  } else if (invalidHtmlTags.test(messageText)) {
    alert("Poruka sadržava tagove (< or >).");
    return false;
  }
  return true;
}

function validateDomainLength(messageText) {
    if (messageText.length > 253) {
      alert("Poruka može imati maksimalno 253 slova.");
      return false;
    }
    return true;
  }