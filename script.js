const shareButton = document.getElementById("share-button");
const popup = document.getElementById("popup");

shareButton.addEventListener("click", () => {
  popup.classList.toggle("showApps");
});