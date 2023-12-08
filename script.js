const dark = document.querySelector(".dark");
const pink = document.querySelector(".pink");
const white = document.querySelector(".white");
const sidebar = document.querySelector(".sidebar");
const activeListItem = document.querySelector(".list-item.active");


dark.addEventListener("click", ()=> {
    sidebar.className = "sidebar";
    activeListItem = "list-item.active"
})

pink.addEventListener("click", ()=> {
    sidebar.className = "sidebar pink";
    activeListItem = "list-item.active pink"
})

white.addEventListener("click", ()=> {
    sidebar.className = "sidebar white";
    activeListItem = "list-item.active white"
})