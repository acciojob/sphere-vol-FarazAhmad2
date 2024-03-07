function volume_sphere() {
    //Write your code here
	// Get the value of radius input
    let radiusValue = parseFloat(document.getElementById("radius").value);
    if (radiusValue <0) {
        document.getElementById("volume").value = NaN;
    } else {

    // Calculate the volume of the sphere
    let volume = (4/3) * Math.PI * Math.pow(radiusValue, 3);

    // Set the calculated volume to the volume input field
    document.getElementById("volume").value = volume.toFixed(4);
    }
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
