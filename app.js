const tabs = document.querySelectorAll(".tabs li");
const contents = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", ()=> {
        
        contents.forEach(c => c.classList.remove("active"));

        contents[index].classList.add("active");
    });
});