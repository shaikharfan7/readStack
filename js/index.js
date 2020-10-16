var arr=[];
var myVar;

function loadScreen(){
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("mainCardContainer").style.display = "block";
}


fetch('https://script.google.com/macros/s/AKfycbzRtjjLe2Gdh9VbTjQCpJ9PHKB-ojfLuR_4Bm6fOLhyWd_gMjA/exec')
    .then(res => res.json())
    .then((out) => {
        for(var i = 0; i < out.user.length; i++){
            var link = document.createElement("a");
            link.target = '_blank';
            link.href = out.user[i].link;
            var y = document.createElement("li");
            var t = document.createTextNode(out.user[i].title + " By " + out.user[i].author);
            y.appendChild(t);
            document.getElementById("cardList").appendChild(link).appendChild(y);
        }
        //arr=out;
        //for (var i = 3 - 1; i >= 0; i--) {
        //document.getElementById('mainCardContainer').innerHTML = "<div id='card' onclick='assignLink()'><div/><br><br>";
        //document.getElementById('card').innerHTML=out.user[i].title + "<br> By " + out.user[i].author;
        //console.log(out.user[i].title + " By " + out.user[i].author)
      //}
}).catch(err => console.error(err));

