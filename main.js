const generateBTn = document.querySelector(".generate-btn");
const wrapper = document.querySelector(".input-wrapper");
const downloadBtn = document.querySelector(".download-btn");
const design = document.querySelector(".design");

generateBTn.addEventListener("click", () => {
  wrapper.style.display = "none";
});

downloadBtn.addEventListener("click", () => {
  html2canvas(design).then((canvas) => {
    const imagedesign = document.createElement("a");
    document.body.appendChild(imagedesign);
    imagedesign.download = "cfi.jpg";
    imagedesign.href = canvas.toDataURL();
    imagedesign.target = "_blank";
    imagedesign.click();
    // document.body.appendChild(canvas);
  });
});
