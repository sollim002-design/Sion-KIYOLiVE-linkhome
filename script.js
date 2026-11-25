const email = "kiyolive26@gmail.com";
const toast = document.querySelector("#toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

async function copyText(text, successMessage) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(successMessage);
  } catch {
    showToast("복사하지 못했습니다. 다시 시도해 주세요.");
  }
}

document.querySelector("#shareButton").addEventListener("click", () => {
  copyText(window.location.href, "프로필 주소를 복사했습니다.");
});

document.querySelector("#copyEmailButton").addEventListener("click", () => {
  copyText(email, "문의 이메일을 복사했습니다.");
});
