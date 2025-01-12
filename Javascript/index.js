// 변수 선언
const dropdown = document.querySelector("#dropdown");
const dropdown_menu = document.querySelector(".dropdown_menu");
const dropdown_menu_inner = document.querySelector(".dropdown_menu_inner");

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

// 드롭다운 버튼 클릭 시 메뉴 보이기
let cnt = 0;
dropdown.addEventListener("click", (event) => {
  if (cnt === 0) {
    dropdown_menu.style.display = "flex";
    dropdown_menu_inner.style.display = "grid";
    dropdown_menu_inner.style.gridTemplateColumns = "repeat(3, 1fr)"; // 3열
    dropdown_menu_inner.style.gridTemplateRows = "repeat(5, auto)"; // 5행
    toggleDropdown();
    // 클릭 이벤트가 document로 전파되지 않도록 중단
    event.stopPropagation();
    cnt = 1;
  } else {
    dropdown_menu.style.display = "";
    cnt = 0;
  }
});

// 드롭다운 외부 클릭 시 메뉴 숨기기
document.addEventListener("click", (event) => {
  if (!dropdown_menu.contains(event.target)) {
    // 클릭한 요소가 드롭다운 내부인지 확인
    dropdown_menu.style.display = "";
  }
});

//드롭다운
function toggleDropdown() {
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
  ];
  const app_img = [
    "./img/account.png",
    "./img/googlesearch.png",
    "./img/map.png",
    "./img/googleyoutube.png",
    "./img/news.png",
    "./img/gmail.png",
    "./img/meet.png",
    "./img/chat.png",
    "./img/addressbook.png",
    "./img/drive.png",
    "./img/calendar.png",
    "./img/play.png",
    "./img/translation.png",
    "./img/photo.png",
    "./img/shopping.png",
  ];
  for (let i = 0; i < 15; i++) {
    const item = document.createElement("div");
    // 클래스 추가
    item.className = "dropdown_item";

    // 이미지 추가
    const img = document.createElement("img");
    img.src = app_img[i];
    img.alt = name[i];
    img.className = "dropdown_item_img";

    // 텍스트 추가
    const text = document.createElement("div");
    text.className = "dorpdown_item_text";
    text.textContent = name[i];

    // 아이템에 이미지와 텍스트 추가
    item.appendChild(img);
    item.appendChild(text);

    // 드롭다운에 추가
    dropdown_menu_inner.appendChild(item);
  }
}
