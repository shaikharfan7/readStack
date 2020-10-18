fetch('https://script.google.com/macros/s/AKfycbzRtjjLe2Gdh9VbTjQCpJ9PHKB-ojfLuR_4Bm6fOLhyWd_gMjA/exec')
    .then(res => res.json())
    .then((out) => {
        for(var i = out.user.length -1 ; i >= 0 ; i--){
            var link = document.createElement("a");
            link.target = '_blank';
            link.href = out.user[i].link;
            var y = document.createElement("li");
            var t = document.createTextNode(out.user[i].title + " By " + out.user[i].author);
            y.appendChild(t);
            document.getElementById("cardList").appendChild(link).appendChild(y);
        }
        Spinner.hide();
}).catch(err => console.error(err));

