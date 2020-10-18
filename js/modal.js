var modal = document.getElementsByClassName("modal")[0];

const imgs = document.querySelectorAll(".img-bg");
var modalImg = document.getElementById("displayimg");
var captionText = document.getElementById("caption");

imgs.forEach(img =>
    {
        img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
          }
    })

modal.onclick = function() { 
  modal.style.display = "none";
}