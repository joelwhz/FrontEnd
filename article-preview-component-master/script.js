const shareBtn = document.querySelector("#share");
const footer = document.querySelector("#footer");

// Create share icons container
const shareContainer = document.createElement("div");
shareContainer.style.marginBottom = "100px"
shareContainer.style.width = "100%"
shareContainer.className = "share-icons";
shareContainer.innerHTML = `
  <span class="share-text">SHARE</span>
  <img src="images/icon-facebook.svg" alt="">
  <img src="images/icon-pinterest.svg" alt="">
  <img src="images/icon-share.svg" alt="">
  <a href = 'https://twitter.com' > <img src="images/icon-twitter.svg" alt=""></a>
`;

// Toggle share icons on button click
shareBtn.addEventListener("click", (e) => {
  e.preventDefault();
  shareContainer.classList.toggle("active");
  shareBtn.classList.toggle("active");
  
  // If showing, append to footer; if hiding, we keep it in DOM but hide with CSS
  if (shareContainer.classList.contains("active") && !shareContainer.parentElement) {
    footer.appendChild(shareContainer);
  }
});