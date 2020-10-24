var water = 0;
var goal = 100;
var waterheight = 0;

function addWater(){


water = water + Number(document.getElementById('newwater').value);
document.getElementById("wateramount").innerHTML = "Total: " + water + " oz";

if (water >= goal)
{
	waterheight = 0;
  	document.getElementById("bluewater").style.visibility = "hidden";

}
else
	waterheight = 150 - (water/goal * 150);


document.getElementById("bluewater").style.height = waterheight + "px";

}