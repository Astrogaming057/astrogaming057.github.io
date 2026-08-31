
// background script
const bg = new Image();
bg.src = "images/GSUJ4tFXoAAjUZe.webp";

bg.addEventListener("load", () => {
    const viewWidth = window.innerWidth;
    const viewHeight = window.innerHeight;
    const imageWidth = bg.naturalWidth;
    const imageHeight = bg.naturalHeight;

    const coverScale = Math.max(viewWidth / imageWidth, viewHeight / imageHeight);
    const scale = coverScale * 1.45;
    const drawnWidth = imageWidth * scale;
    const drawnHeight = imageHeight * scale;

    const offsetX = Math.random() * Math.max(0, drawnWidth - viewWidth);
    const offsetY = Math.random() * Math.max(0, drawnHeight - viewHeight);

    document.body.style.setProperty("--bg-size", `${drawnWidth}px ${drawnHeight}px`);
    document.body.style.setProperty("--bg-pos", `${-offsetX}px ${-offsetY}px`);
});
// background script end

