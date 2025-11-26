const shareBtn = document.getElementById("share");
const footer = document.getElementById("footer");

// Crear el contenedor de share
const shareContainer = document.createElement("div");
shareContainer.style.padding = "15px";
shareContainer.style.display = "flex";
shareContainer.style.justifyContent = "space-between";
shareContainer.style.alignItems = "center";
shareContainer.style.flexDirection = "row";
shareContainer.style.backgroundColor = "hsl(217, 19%, 35%)";
shareContainer.style.borderRadius = "10px";
shareContainer.style.position = "absolute";
shareContainer.style.bottom = "400px"; // Ajusta según sea necesario
shareContainer.style.right = "0";
shareContainer.style.left = "700px";
shareContainer.style.margin = "0 auto";
shareContainer.style.width = "fit-content";
shareContainer.style.zIndex = "2";
shareContainer.style.gap = "10px";
shareContainer.className = "share-icons";
shareContainer.innerHTML = `
    <span class="share-text" style="color: hsl(210, 46%, 95%); letter-spacing: 3px; font-size: 12px;">SHARE</span>
    <a href='https://facebook.com' target='_blank' ><img src="images/icon-facebook.svg" alt=""></a>
    <a href='https://pinterest.com' target='_blank' ><img src="images/icon-pinterest.svg" alt=""></a>
    <a href='https://twitter.com' target='_blank' ><img src="images/icon-twitter.svg" alt=""></a>
`;

shareContainer.style.display = "none";
shareBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const isActive = shareContainer.style.display === "flex";

  if (isActive) {
    shareContainer.style.display = "none";
  } else {
    shareContainer.style.display = "flex";
    if (!shareContainer.parentElement) {
      footer.appendChild(shareContainer);
    }
  }
  if (window.innerWidth <= 360) {
    shareContainer.parentNode.removeChild(shareContainer);
  }
});
