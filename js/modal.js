var modal = document.getElementsByClassName("modal")[0];

const imgs = document.querySelectorAll(".img-bg");
const vids = document.querySelectorAll(".vid");
var modalImg = document.getElementById("displayimg");
var modalVid = document.getElementById("displayVid");
var modalVidSRC = document.getElementById("displaySRC");
var captionText = document.getElementById("caption");

imgs.forEach(img =>
    {
        img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
          }
    });


vids.forEach(video =>
  {
      video.onclick = function(){
        modal.style.display = "block";
        modalVid.setAttribute("src",this.childNodes[1].src);
        }
  });

modal.onclick = function() { 
  modal.style.display = "none";
}