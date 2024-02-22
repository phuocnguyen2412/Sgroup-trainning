const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

$$(".faq-item").forEach((block) => {
    block.onClikc = (e) => {
        e.target.classList.toggle("faq-item-active");
    };
});
