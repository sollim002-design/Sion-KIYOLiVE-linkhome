const toast = document.querySelector("#toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

document.querySelector("#shareButton").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    showToast("프로필 주소를 복사했습니다");
  } catch {
    showToast("브라우저 메뉴에서 주소를 공유해 주세요");
  }
});
