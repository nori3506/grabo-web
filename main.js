function toggleOverlay() {
  let overlayStyle = document.getElementById("overlay").style.display;

  if (overlayStyle == "none" || overlayStyle == "") {
    document.getElementById("overlay").style.display = "block";
  } else {
    document.getElementById("overlay").style.display = "none";
  }

  document.getElementById("btn-trigger").classList.toggle("active");
}
