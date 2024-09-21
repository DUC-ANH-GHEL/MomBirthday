document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("video");
    const canvas = document.getElementById("canvas");
    const captureBtn = document.getElementById("capture-btn");
    const capturedImage = document.getElementById("captured-image");

    // Yêu cầu truy cập vào camera trước
    navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" }, // facingMode: "user" là camera trước
        audio: false
    })
    .then((stream) => {
        video.srcObject = stream;
    })
    .catch((err) => {
        console.error("Lỗi khi truy cập camera: ", err);
    });

    // Hàm chụp ảnh khi nhấn nút "Chụp ảnh"
    captureBtn.addEventListener("click", function () {
        const context = canvas.getContext("2d");
        // Vẽ video lên canvas
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        // Hiển thị ảnh chụp được
        const dataURL = canvas.toDataURL("image/png");
        capturedImage.src = dataURL;
        capturedImage.style.display = "block";
        canvas.style.display = "none"; // Ẩn canvas nếu không cần thiết
    });
});
