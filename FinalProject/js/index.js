const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

$$(".faq-item").forEach((block) => {
    block.addEventListener("click", (e) => {
        block.childNodes[1].classList.toggle("faq-item-active");

        block.childNodes[1].classList.toggle("faq-item-disabled");

        block.childNodes[3].classList.toggle("answer-active");

        block.childNodes[3].classList.toggle("answer-disabled");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const daysElement = $(".days-coutdown");
    const hoursElement = $(".hours-coutdown");
    const minutesElement = $(".minutes-coutdown");
    const secondsElement = $(".seconds-coutdown");

    // Set the target date for the countdown
    const targetDate = new Date("2024-12-31T23:59:59");

    function updateCountdown() {
        const currentDate = new Date();
        const timeDifference = targetDate - currentDate;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
            (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        daysElement.innerHTML = days;
        hoursElement.innerHTML = hours;
        minutesElement.innerHTML = minutes;
        secondsElement.innerHTML = seconds;
    }

    // Initial call to update the countdown
    updateCountdown();

    // Update the countdown every second
    setInterval(updateCountdown, 1000);
});
window.addEventListener("scroll", function () {
    // About //
    const about = $("#about");
    const about_img = $(".about-img");
    const about_content = $(".about-content");
    const scrollPosition = window.scrollY;

    if (scrollPosition - 400 > about.offsetTop - window.innerHeight) {
        about_content.classList.add("fadeRightToLeft");
        about_img.classList.add("fadeLeftToRight");
    }
    //----------------------------------------------------------------
    //Nav//
    if (scrollPosition > about.offsetTop - window.innerHeight) {
        $("#nav").classList.add("nav-sticky");
    }
    //----------------------------------------------------------------
    // Reason //
    const reason = $("#reason");
    const reason_item_1 = $(".reason-item-1");
    const reason_item_2 = $(".reason-item-2");
    const reason_item_3 = $(".reason-item-3");
    const reason_item_4 = $(".reason-item-4");

    if (scrollPosition - 400 > reason.offsetTop - window.innerHeight) {
        reason_item_1.classList.add("fadeUpDelay1");
        reason_item_2.classList.add("fadeUpDelay2");
        reason_item_3.classList.add("fadeUpDelay3");
        reason_item_4.classList.add("fadeUpDelay4");
    }
    //----------------------------------------------------------------
    // Out Team //
    const out_team = $("#out-team");
    const out_team_item_1 = $(".out-team-item-1");
    const out_team_item_2 = $(".out-team-item-2");
    const out_team_item_3 = $(".out-team-item-3");
    const out_team_item_4 = $(".out-team-item-4");
    if (scrollPosition - 400 > out_team.offsetTop - window.innerHeight) {
        out_team_item_1.classList.add("fadeUpDelay1");
        out_team_item_2.classList.add("fadeUpDelay2");
        out_team_item_3.classList.add("fadeUpDelay3");
        out_team_item_4.classList.add("fadeUpDelay4");
    }
    //----------------------------------------------------------------
    // Download //
    const download = $("#download");
    const download_content = $(".download-content");
    const download_img = $(".download-img");
    if (scrollPosition - 400 > download.offsetTop - window.innerHeight) {
        download_content.classList.add("fadeLeftToRight");
        download_img.classList.add("fadeRightToLeft");
    }
    //----------------------------------------------------------------

    // Faq //
    const faq = $("#faq");
    const faq_content = $(".faq-content");
    if (scrollPosition - 400 > faq.offsetTop - window.innerHeight) {
        faq_content.classList.add("fadeUp");
    }
    // Contact //
    if (scrollPosition - 400 > $("#contact").offsetTop - window.innerHeight) {
        $(".contact-info").classList.add("fadeLeftToRight");
        $(".sending-message").classList.add("fadeRightToLeft");
    }
});
