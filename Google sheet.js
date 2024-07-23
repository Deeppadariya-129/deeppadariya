const scriptURL = 'https://script.google.com/macros/s/AKfycbwnNFrTKK2J2SlPoY1MY4RNGdfHmey_gopcOYFkkIK9Cb4wJoxEp0bAUd-7FQG0ZArSSA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})
