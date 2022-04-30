function solutionhandler() {
  const x = prompt("Current location of frog is", 10);
  const y = prompt("Frog destination position is located at", 85);
  const d = prompt("Frog always jump at a fixed distance of", 30);
  let result;

  if (!Number.isNaN(x) && !Number.isNaN(y) && !Number.isNaN(d)) {
    result = Math.round((y-x)/d);
    console.log("entered");
  } else {
    alert("Kindly enter numbers ONLY");
  }

  document.getElementById("solutionDisplay").innerHTML = "Minimum steps to reach the target are :" + result;
}