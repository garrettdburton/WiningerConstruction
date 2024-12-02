var upgrade1Value = "No";
var upgrade2Value = "No";
var upgrade3Value = "No";
// This function sets which upgraded packages have been selected
function selectedUpgrades() {
  var upgrade1;
  var upgrade2;
  var upgrade3;


  if ($('#accpackage1').prop('checked')) {
    upgrade1 = ["Matte Black Bathroom Accessories", "images/build/blackAccessory.jpg"];
    $("#upgradeBathroomAccName").text(upgrade1[0]);
    $("#upgradeBathroomAccImage").attr('src', upgrade1[1]);
    upgrade1Value = "Yes";
    console.log(upgrade1Value);
    $('#upgradeBathroomAccDiv').show();
  } else {
    $('#upgradeBathroomAccDiv').hide();
  }

  if ($('#accpackage2').prop('checked')) {
    upgrade2 = ["Matte Black Light Fixtures", "images/build/lightPackage.png"];
    $("#upgradeLightFixName").text(upgrade2[0]);
    $("#upgradeLightFixImage").attr('src', upgrade2[1]);
    upgrade2Value = "Yes";
    console.log(upgrade2Value);
    $('#upgradeLightFixDiv').show();
  } else {
    $('#upgradeLightFixDiv').hide();
  }

  if ($('#accpackage3').prop('checked')) {
    upgrade3 = ["Kitchen Tile BackSplash", "images/build/backsplash.jpg"];
    $("#upgradeKitchenBackName").text(upgrade3[0]);
    $("#upgradeKitchenBackImage").attr('src', upgrade3[1]);
    upgrade3Value = "Yes";
    console.log(upgrade3Value);
    $('#upgradeKitchenBackDiv').show();
  } else {
    $('#upgradeKitchenBackDiv').hide();
  }
}