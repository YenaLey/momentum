let videoBox = document.getElementsByClassName("video")[0];
let videoInput = document.querySelector("div.video > input");

videoInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    let videoUrl = videoInput.value.trim();

    let embedUrl = convertToEmbedUrl(videoUrl);
    if (!embedUrl) {
      alert("Invalid YouTube URL");
      return;
    }

    let iframe = document.createElement("iframe");
    iframe.setAttribute("src", embedUrl);
    iframe.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    );
    iframe.setAttribute("allowfullscreen", "true");

    videoBox.appendChild(iframe);
    videoInput.remove();
  }
});

function convertToEmbedUrl(url) {
  let match = url.match(
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)|youtu\.be\/([^?&]+)/
  );
  if (match) {
    let videoId = match[1] || match[2];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return null;
}
