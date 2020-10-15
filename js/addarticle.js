const scriptURL = 'https://script.google.com/macros/s/AKfycbzRtjjLe2Gdh9VbTjQCpJ9PHKB-ojfLuR_4Bm6fOLhyWd_gMjA/exec'
const form = document.forms['addarticleform']
          
form.addEventListener('submit', e => {
    e.preventDefault()
    window.swal({
        title: "Adding to stack...",
        text: "Please wait",
        imageUrl: "images/ajaxloader.gif",
        showConfirmButton: false,
        allowOutsideClick: false,
        });
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {window.swal({
  	 title: "Successfully Added!",
  	 icon: "success",
  	button: "Yay!",

		});})
      .catch(error => {window.swal({
  						title: "Error Occured!!",
  						text: "Please Try Again!!",
  						icon: "warning",
  						button: "Ok",
					});})
            })