$(function() {
    $(".hover-link").hover(
        function() {
            var hoverImg = $(this).data("hover");
            var freshGifUrl = hoverImg + "?t=" + new Date().getTime();
            $(this).find("img").attr("src", freshGifUrl);
        },
        function() {
            var staticImg = $(this).data("static");  
            $(this).find("img").attr("src", staticImg);
        }                         
    );                  
});

function updateView(event) {
  // Handle the difference in whether the event is fired on the <a> or the <img>
  const targetIdentifier = event.target.firstChild || event.target;

  const displayNewImage = () => {
    const mainSrc = `${targetIdentifier.src.split("_th.jpg")[0]}.jpg`;
    galleryImg.src = mainSrc;
    galleryCaption.textContent = targetIdentifier.alt;
  };

  // Fallback for browsers that don't support View Transitions:
  if (!document.startViewTransition) {
    displayNewImage();
    return;
  }

  // With View Transitions:
  const transition = document.startViewTransition(() => displayNewImage());
}

