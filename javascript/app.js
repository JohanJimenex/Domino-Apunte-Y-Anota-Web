const ANDROID_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.jopamstudio.nolansgalaxy";
const APPLE_STORE_URL =
  "https://apps.apple.com/us/developer/johan-jimenez/id1503858642";

function detectDevicePlatform() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  setTimeout(() => {
    if (/android/i.test(userAgent)) {
      window.location.href = ANDROID_STORE_URL;
      return;
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.location.href = APPLE_STORE_URL;
      return;
    }
  }, 2000);

  console.warn("Unsupported platform");
}

window.onload = detectDevicePlatform;

