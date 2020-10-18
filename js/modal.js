var modal = document.getElementById("myModal");

const imgs = document.querySelectorAll(".img-bg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

imgs.forEach(img =>
    {
        img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
          }
    })

var span = document.getElementsByClassName("modal")[0];

span.onclick = function() { 
  modal.style.display = "none";
}