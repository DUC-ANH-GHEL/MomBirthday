document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById('video');
        const captureBtn = document.getElementById('captureBtn');
        const capturedImage = document.getElementById('capturedImage');
        const capturedImageContainer = document.getElementById('capturedImageContainer');
        const downloadLink = document.getElementById('downloadLink');
        const errorMessage = document.getElementById('errorMessage');

        async function initCamera() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                video.srcObject = stream;
            } catch (err) {
                showError('Unable to access camera. Please ensure you have given permission.');
            }
        }

        function capturePhoto() {
            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas.getContext('2d').drawImage(video, 0, 0);
            capturedImage.src = canvas.toDataURL('image/png');
            downloadLink.href = capturedImage.src;
            capturedImageContainer.classList.remove('d-none');
            capturedImageContainer.classList.add('animate__animated', 'animate__fadeIn');
        }

        function showError(message) {
            errorMessage.textContent = message;
            errorMessage.classList.remove('d-none');
        }

        captureBtn.addEventListener('click', capturePhoto);
        initCamera();
});
