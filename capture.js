document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("video");
    const canvas = document.getElementById("canvas");
    const captureBtn = document.getElementById("capture-btn");
    const confirmBtn = document.getElementById("confirm-btn");
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

    // Khi người dùng nhấn nút "Chụp ảnh"
    captureBtn.addEventListener("click", function () {
        // Ẩn nút chụp ảnh và hiển thị nút xác nhận
        captureBtn.style.display = "none";
        confirmBtn.style.display = "block";
    });

    // Khi người dùng nhấn nút "Xác nhận ảnh"
    confirmBtn.addEventListener("click", function () {
        const context = canvas.getContext("2d");
        // Vẽ video lên canvas để chụp ảnh
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataURL = canvas.toDataURL("image/png");
        
        // Hiển thị ảnh chụp được và ẩn canvas
        capturedImage.src = dataURL;
        capturedImage.style.display = "block";
        canvas.style.display = "none";
        
        // Ẩn video stream sau khi chụp
        video.style.display = "none";
        confirmBtn.style.display = "none"; // Ẩn nút xác nhận
    });
});
