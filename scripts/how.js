let how = document.getElementsByClassName("how")[0];

how.addEventListener("mouseenter", (e) => {
  let tooltip = document.createElement("div");
  tooltip.innerHTML = `
    <strong>📋 사용법 가이드</strong><br/><br/>
    ✅ <em>To-Do List</em> <br/>
    - 완료하려면 <strong>한 번 클릭</strong><br/>
    - 삭제하려면 <strong>우클릭</strong><br/><br/>
    ⏱️ <em>공부 타이머</em> <br/>
    - <strong>C키</strong>를 눌러 <strong>시작/정지</strong> 토글<br/><br/>
    📺 <em>유튜브 링크</em> <br/>
    - <strong>새로고침</strong>을 하여 새로 설정<br/><br/>
    🔵➡️ <em>로그아웃 기능</em> <br/>
    - 파란 화살표를 눌러 <strong>모든 데이터를 초기화</strong>
  `;
  tooltip.style.position = "absolute";
  tooltip.style.left = `${e.pageX + 10}px`;
  tooltip.style.top = `${e.pageY + 10}px`;
  tooltip.style.background = "rgba(255, 255, 255, 0.9)";
  tooltip.style.color = "#333";
  tooltip.style.padding = "10px 15px";
  tooltip.style.borderRadius = "10px";
  tooltip.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  tooltip.style.fontSize = "12px";
  tooltip.style.lineHeight = "1.5";
  tooltip.style.zIndex = "1000";
  tooltip.style.border = "1px solid #ddd";
  tooltip.style.fontFamily = "Arial, sans-serif";
  tooltip.style.transition = "opacity 0.3s ease";
  tooltip.style.opacity = "0";

  document.body.appendChild(tooltip);

  setTimeout(() => {
    tooltip.style.opacity = "1";
  }, 100);

  how.addEventListener("mouseleave", () => {
    tooltip.style.opacity = "0";
    setTimeout(() => {
      tooltip.remove();
    }, 300);
  });
});
