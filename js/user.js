 //Change AppScript Link To Use With Your Google Sheet.
 var appScriptLink="https://script.google.com/macros/s/AKfycbzRtjjLe2Gdh9VbTjQCpJ9PHKB-ojfLuR_4Bm6fOLhyWd_gMjA/exec";
 var nameArg = "Suhail";
	
 function getUser() {
 	
  Swal.fire({
  title: 'Who is this?',
  text:"Select to view your readStack",
  icon:"question",
  allowOutsideClick: false,
  showDenyButton: true,
  showCancelButton: false,
  confirmButtonText: `Arfan`,
  denyButtonText: `Suhail`,
  denyButtonColor: '#4f4944',
  confirmButtonColor: '#4f4944'

	}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
  	displayMyLinks(nameArg);
    Swal.fire('Loading Stack For Arfan', '', 'success')
  } 
  else if (result.isDenied) {
  	displayLinks(nameArg);
    Swal.fire('Loading Stack For Suhail', '', 'success')
  }
	})

}

 
 function displayLinks(nameArg){
 	Spinner();
 	fetch(appScriptLink)
    .then(res => res.json())
    .then((out) => {
        for(var i = out.user.length -1 ; i >= 0 ; i--){
            if(out.user[i].author == nameArg){
            var link = document.createElement("a");
            link.target = '_blank';
            link.href = out.user[i].link;
            var y = document.createElement("li");
            var t = document.createTextNode(out.user[i].title + " By " + out.user[i].author);
            y.appendChild(t);
            document.getElementById("cardList").appendChild(link).appendChild(y);
        } 
        }
        Spinner.hide();
}).catch(err => console.error(err));

 }


 function displayMyLinks(nameArg){
 	Spinner();
 	fetch(appScriptLink)
    .then(res => res.json())
    .then((out) => {
 		 for(var i = out.user.length -1 ; i >= 0 ; i--){
 	 		if(out.user[i].author != nameArg){
        	var link = document.createElement("a");
            link.target = '_blank';
            link.href = out.user[i].link;
            var y = document.createElement("li");
            var t = document.createTextNode(out.user[i].title + " By " + out.user[i].author);
            y.appendChild(t);
            document.getElementById("cardList").appendChild(link).appendChild(y);     
        	}
        	else{	
        	continue;
        	}}
		Spinner.hide();
		}).catch(err => console.error(err));
 }