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
  const name = [
    "계정",
    "검색",
    "지도",
    "YouTube",
    "뉴스",
    "Gmail",
    "Meet",
    "채팅",
    "주소록",
    "드라이브",
    "Calender",
    "Play",
    "번역",
    "사진",
    "쇼핑",
    "금융",
    "Docs",
    "Sheets",
    "Slides",
    "도서",
    "Blogger",
    "Keep",
    "어스",
    "저장됨",
    "아트 앤 컬쳐",
    "Google Ads",
    "Merchant Center",
    "여행",
    "Forms",
    "Google Store",
    "Chrome 웹 스토어",
    "Google 애널리틱스",
  ];
  for (let i = 0; i < 32; i++) {
    const item = document.createElement("div");
    // 클래스 추가
    item.className = "dropdown-item";
    // 아이템 내용
    item.textContent = name[i];
    // 드롭다운에 추가
    dropdown.appendChild(item);
  }

  //클릭 시
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
};
