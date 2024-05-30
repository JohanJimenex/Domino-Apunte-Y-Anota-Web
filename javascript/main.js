const ANDROID_STORE_URL =
  "https://play.google.com/store/apps/dev?id=6933809884096731950";
const APPLE_STORE_URL =
  "https://apps.apple.com/us/app/super-charadas-guessup/id1503858643?l=es";

function detectDevicePlatform() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    window.location.href = ANDROID_STORE_URL;
    return;
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    window.location.href = APPLE_STORE_URL;
    return;
  }

  console.warn("Unsupported platform");
}

window.onload = detectDevicePlatform;
