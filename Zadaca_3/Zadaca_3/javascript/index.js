// I would add the hidden classes to the elements in your html, 

var email = document.getElementById('email');
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
    if (email.value.length != 0) {
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

