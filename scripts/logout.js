let logout = document.getElementsByClassName("logout")[0];

logout.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});
