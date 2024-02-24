const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

$$(".faq-item").forEach((block) => {
    console.log(block);
    block.addEventListener("click", (e) => {
        e.target.classList.toggle("faq-item-active");
        console.log(block.childNodes);
        block.childNodes[3].classList.toggle("answer-active");
    });
});
