function launchModal(img){
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById(img);
  var modalImg = document.getElementById("img01");
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }
}
function launchModal2(img){
  // Get the modal
  var modal = document.getElementById("myModal2");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById(img);
  var modalImg = document.getElementById("img02");
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[1];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }
}

function launchModal3(img){
  // Get the modal
  var modal = document.getElementById("myModal3");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById(img);
  var modalImg = document.getElementById("img03");
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[2];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }
}

function launchModal4(img){
  // Get the modal
  var modal = document.getElementById("myModal4");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById(img);
  var modalImg = document.getElementById("img04");
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[3];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }
}

function launchModal5(img){
  // Get the modal
  var modal = document.getElementById("myModal5");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById(img);
  var modalImg = document.getElementById("img05");
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[4];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }
}