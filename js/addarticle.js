const scriptURL = 'https://script.google.com/macros/s/AKfycbzRtjjLe2Gdh9VbTjQCpJ9PHKB-ojfLuR_4Bm6fOLhyWd_gMjA/exec'
const form = document.forms['addarticleform']
          
form.addEventListener('submit', e => {
    e.preventDefault()
    Swal.fire({
        title: "Adding to stack...",
        text: "Please wait",
        showConfirmButton: false,
        allowOutsideClick: false,
        });
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {Swal.fire({
  	 title: "Successfully Added!",
  	 icon: "success",

		}); setTimeout(function() {location.reload();}, 3000);})
      .catch(error => {Swal.fire({
  						title: "Error Occured!!",
  						text: "Please Try Again!!",
  						icon: "warning",
					});})
            })