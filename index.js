const medias = {
  audio: false,
  video: {
    facingMode: "environment"
  }
};
const mainContainer = document.getElementById("main-container");
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const promise = navigator.mediaDevices.getUserMedia(medias);

promise.then(successCallback)
       .catch(errorCallback);

function successCallback(stream) {
  video.srcObject = stream;
  requestAnimationFrame(draw);
}

function errorCallback(err) {
  console.log(err);
  alert(err);
}

function draw() {
  canvas.width  = video.videoWidth;
  canvas.height = video.videoHeight;
  ctx.drawImage(video, 0, 0);

  ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  requestAnimationFrame(draw);
}