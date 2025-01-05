//준비중 alert
const ready_mic = () => {
  alert("마이크 준비 중 입니다");
};
const ready_camera = () => {
  alert("카메라 준비 중 입니다");
};

//페이지 이동
const movePage = (target) => {
  const urls = {
    webstore: "https://chrome.google.com/webstore",
    youtube: "https://www.youtube.com",
    naver: "https://www.naver.com",
  };
  window.location.href = `${urls[target]}`;
  document.getElementById("webstore").onclick = () => movePage("webstore");
  document.getElementById("youtube").onclick = () => movePage("youtube");
  document.getElementById("naver").onclick = () => movePage("naver");
};

//드롭다운
const toggleDropdown = () => {
  const dropdown = document.getElementById("appsDropdown");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
};
