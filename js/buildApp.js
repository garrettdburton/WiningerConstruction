//  Variables for tab navigation
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  window.scroll(0, 0);
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}

// Global variables for form submission
let floorplanName, exteriorName, interiorName;

// This function sets form variables (name, bed, bath, floors, garage, features)
function setFloorplan(image, name, bed, bath, floor, garage, feature, space, price) {
  floorplanName = name;
  let floorplanImage = image;
  let floorplanBed = bed;
  let floorplanBath = bath;
  let floorplanFloor = floor;
  let floorplanGarage = garage;
  let floorplanFeat = feature;
  let floorplanSpace = space;
  let floorplanPrice = price;
  $("#floorplanImageSelected").attr('src', floorplanImage);
  $("#floorplanNameSelected").text(floorplanName);
  $("#floorplanBedSelected").text(floorplanBed);
  $("#floorplanBathSelected").text(floorplanBath);
  $("#floorplanFloorSelected").text(floorplanFloor);
  $("#floorplanGarageSelected").text(floorplanGarage);
  $("#floorplanFeatSelected").text(floorplanFeat);
  $("#floorplanSpaceSelected").text(floorplanSpace);
  $("#floorplanPriceSelected").text(floorplanPrice);
  console.log(floorplanImage, floorplanName, floorplanBed, floorplanBath, floorplanFloor, floorplanGarage, floorplanFeat, floorplanSpace, floorplanPrice);
}

// This function sets form variables
function setExterior(image, name, shingle, shingleImage, siding, sidingImage, color, colorImage, stone, stoneImage, door) {
  exteriorName = name;
  let exteriorImage = image;

  let exteriorShingle = shingle;
  let exteriorShingleImage = shingleImage;

  let exteriorSiding = siding;
  let exteriorSidingImage = sidingImage;

  let exteriorColor = color;
  let exteriorColorImage = colorImage;

  let exteriorStone = stone;
  let exteriorStoneImage = stoneImage;

  let exteriorDoor = door;

  $("#exteriorNameSelected").text(exteriorName);
  $("#exteriorImageSelected").attr('src', exteriorImage);

  $("#exteriorShingleSelected").text(exteriorShingle);
  $("#exteriorShingleImageSelected").attr('src', exteriorShingleImage);

  $("#exteriorSidingSelected").text(exteriorSiding);
  $("#exteriorSidingImageSelected").attr('src', exteriorSidingImage);

  $("#exteriorColorSelected").text(exteriorColor);
  $("#exteriorColorImageSelected").attr('src', exteriorColorImage);

  $("#exteriorStoneSelected").text(exteriorStone);
  $("#exteriorStoneImageSelected").attr('src', exteriorStoneImage);

  $("#exteriorDoorSelected").text(exteriorDoor);

  console.log(exteriorName, exteriorShingle, exteriorSiding, exteriorColor, exteriorStone, exteriorDoor);
}

// This function sets form variables
function setInterior(image, name, cabinetTop, cabinetTopImage, cabinetBottom, cabinetBottomImage, counter, counterImage, handle, laminate, laminateImage, carpet, carpetImage, paint, paintImage) {
  interiorName = name;
  let interiorImage = image;

  let interiorCabinetTop = cabinetTop;
  let interiorCabinetTopImage = cabinetTopImage;

  let interiorCabinetBottom = cabinetBottom;
  let interiorCabinetBottomImage = cabinetBottomImage;

  let interiorCounter = counter;
  let interiorCounterImage = counterImage;

  let interiorHandle = handle;

  let interiorLaminate = laminate;
  let interiorLaminateImage = laminateImage;

  let interiorCarpet = carpet;
  let interiorCarpetImage = carpetImage;

  let interiorPaint = paint;
  let interiorPaintImage = paintImage;

  $("#interiorNameSelected").text(interiorName);
  $("#interiorImageSelected").attr('src', interiorImage);

  $("#interiorCabinetTopSelected").text(interiorCabinetTop);
  $("#interiorCabinetTopImageSelected").attr('src', interiorCabinetTopImage);

  $("#interiorCabinetBottomSelected").text(interiorCabinetBottom);
  $("#interiorCabinetBottomImageSelected").attr('src', interiorCabinetBottomImage);

  $("#interiorCounterSelected").text(interiorCounter);
  $("#interiorCounterImageSelected").attr('src', interiorCounterImage);

  $("#interiorHandleSelected").text(interiorHandle);

  $("#interiorLaminateSelected").text(interiorLaminate);
  $("#interiorLaminateImageSelected").attr('src', interiorLaminateImage);

  $("#interiorCarpetSelected").text(interiorCarpet);
  $("#interiorCarpetImageSelected").attr('src', interiorCarpetImage);

  $("#interiorPaintSelected").text(interiorPaint);
  $("#interiorPaintImageSelected").attr('src', interiorPaintImage);

  console.log(interiorName, interiorCabinetTop, interiorCabinetBottom, interiorCounter, interiorHandle, interiorLaminate, interiorCarpet, interiorPaint);
}

//AJAX call for PHP Post
function submitForm() {
  var nameVar, emailVar, phoneVar;
  nameVar = document.getElementsByName("name")[0].value;
  emailVar = document.getElementsByName("email")[0].value;
  phoneVar = document.getElementsByName("phone")[0].value;
  $.ajax({
    url: "/submit.php",
    type: "post",
    data: { name: nameVar, email: emailVar, phone: phoneVar, floorplan: floorplanName, exterior: exteriorName, interior: interiorName },
    success: function (result) {
      console.log("successfully added record");
    }
  });
}

$("#scroll").on("click", function () {
  $("body").scrollTop(0);
});