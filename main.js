let maskAll = document.querySelector(".container header > span");
let articles = document.querySelectorAll(".notifications article");
let count = document.querySelector(".container header h2 span")


function updateCount() {
    count.textContent = document.querySelectorAll("article.no").length;
}
updateCount();

function read(item) {
    item.classList.remove("no");
}

maskAll.addEventListener("click", function(){articles.forEach(read);updateCount();});

