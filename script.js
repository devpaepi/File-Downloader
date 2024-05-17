const fileInput = document.querySelector("input");
const downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click", (e) => {
  e.preventDefault();
  downloadBtn.innerText = "Downloading file...";
  fetchFile(fileInput.value);
});

function fetchFile(url) {
  // fetching and returning response as blo
  fetch(url)
    .then((res) => res.blob())
    .then((file) => {
      //create url of passed objects
      let tempUrl = URL.createObjectURL(file);
      let aTag = document.createElement("a");
      aTag.href = tempUrl;
      aTag.download = url.replace(/^.*[\\\/]/, "");
      document.body.appendChild(aTag);
      console.log(tempUrl);
      aTag.click();
      aTag.remove();
      URL.revokeObjectURL(tempUrl);
      downloadBtn.innerText = "Download File";
    })
    .catch(() => {
      downloadBtn.innerText = "Download File";
      alert("Failed to download file");
    });
}
