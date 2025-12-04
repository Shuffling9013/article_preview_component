const shareButton = document.querySelector(`button[aria-label="share-button"]`);
const linksList = document.querySelector(`ul[aria-label="links-menu"]`);

if (null === linksList) {
  throw Error("Link list not found");
}

if (null === shareButton) {
  throw Error("Share button not found");
}

shareButton.addEventListener("click", (e) => {
  if (shareButton === e.currentTarget) {
    shareButton.ariaPressed = "true";
    linksList.ariaHidden = "false";
  }
});

document.addEventListener("click", (e) => {
  const targets = e.composedPath();

  if (!targets.includes(shareButton) && !targets.includes(linksList)) {
    shareButton.ariaPressed = "false";
    linksList.ariaHidden = "true";
  }
});
