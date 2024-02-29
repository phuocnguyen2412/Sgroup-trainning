const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);
// setTimeout(() => {
//     $("#preloader").style.display = "none";
// }, 2000);
//// TAble-mobile-nav////
$$(".nav-body-item").forEach((block) => {
    block.addEventListener("click", (e) => {
        block.classList.toggle("active");
        const isActive = block.classList.contains("active");
        const subMenu = block.querySelector(".nav-sub-menu");

        subMenu.style.height = `${isActive ? 90 : 0}px`;
    });
});
///----------------------------------------------------------------
$$(".faq-item").forEach((block) => {
    block.addEventListener("click", (e) => {
        $$(".faq-item").forEach((block) => {
            block.classList.remove("active");
            const isActive = block.classList.contains("active");
            const answer = block.querySelector(".answer");
            answer.style.height = `${
                isActive ? answer.querySelector(".inner").clientHeight + 4 : 0
            }px`;
        });
        block.classList.toggle("active");
        const isActive = block.classList.contains("active");
        const answer = block.querySelector(".answer");
        answer.style.height = `${
            isActive ? answer.querySelector(".inner").clientHeight + 4 : 0
        }px`;
    });
});

///////// countdown //////////////////////////////////
function setProcessClock(clock, currentValue, color) {
    const circle = clock.querySelector(".outer");
    const maxValue = circle.getAttribute("max-value");

    let current = 0;
    if (currentValue == 0) {
        current = 360;
    } else {
        current = Math.floor(360 - (currentValue * 360) / maxValue);
    }
    console.log();
    circle.style.background = `conic-gradient(
        ${color} ${current}deg,
        rgb(237, 237, 237) 0deg
    )`;
}

////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
    const daysElement = $(".days-coutdown");
    const hoursElement = $(".hours-coutdown");
    const minutesElement = $(".minutes-coutdown");
    const secondsElement = $(".seconds-coutdown");

    let timeDifference = ((49 * 24 + 8) * 60 + 36) * 60 * 1000;
    function updateCountdown() {
        const clocks = $$(".clock-item");

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        const hours = Math.floor(
            (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );

        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        setProcessClock($(".days"), days, "#00c4f4");
        setProcessClock($(".hours"), hours, "#ff9700");
        setProcessClock($(".minutes"), minutes, "#ff4581");
        setProcessClock($(".seconds"), seconds, "#14d176");
        daysElement.innerHTML = days;
        hoursElement.innerHTML = hours;
        minutesElement.innerHTML = minutes;
        secondsElement.innerHTML = seconds;
        timeDifference = timeDifference - 1000;
    }

    // Initial call to update the countdown
    updateCountdown();

    // Update the countdown every second
    setInterval(updateCountdown, 1000);
});
function handleClickMobileNavClose() {
    $(".tablet-moblie-nav").classList.remove("tablet-moblie-nav-active");
    $(".tablet-moblie-nav").classList.add("tablet-moblie-nav-disabled");
}
function handleClickMobileNavOpen() {
    $(".tablet-moblie-nav").classList.remove("tablet-moblie-nav-disabled");

    $(".tablet-moblie-nav").classList.add("tablet-moblie-nav-active");
}
let hasRun = false;

function activeNavItem(NavItem, section) {
    const scrollPosition = window.scrollY;

    if (
        scrollPosition + 200 > section.offsetTop &&
        scrollPosition - 200 < section.offsetTop + section.offsetHeight
    ) {
        NavItem.classList.add("active");
    } else {
        NavItem.classList.remove("active");
    }
}
window.addEventListener("scroll", function () {
    ////  Introduction

    /////--------------------------------------------------------

    // About //
    const about = $("#about");
    const about_img = $(".about-img");
    const about_content = $(".about-content");
    const scrollPosition = window.scrollY;

    if (
        window.innerWidth > 1239 &&
        scrollPosition - 400 > about.offsetTop - window.innerHeight
    ) {
        about_content.classList.add("fadeRightToLeft");
        about_img.classList.add("fadeLeftToRight");
    }
    //----------------------------------------------------------------
    //Nav//
    if (scrollPosition > $("#coutdown").offsetTop - window.innerHeight) {
        $("#nav").classList.add("nav-sticky");
        $("#nav").classList.add("fadeDown");
    } else {
        $("#nav").classList.remove("nav-sticky");
        $("#nav").classList.remove("fadeDown");
    }
    activeNavItem($(".home"), $("#introduce"));
    activeNavItem($(".about"), $("#about"));
    activeNavItem($(".roadmap"), $("#roadmap"));
    activeNavItem($(".faq"), $("#faq"));
    activeNavItem($(".contact"), $("#contact"));

    //----------------------------------------------------------------
    // Reason //
    const reason = $("#reason");
    const reason_item_1 = $(".reason-item-1");
    const reason_item_2 = $(".reason-item-2");
    const reason_item_3 = $(".reason-item-3");
    const reason_item_4 = $(".reason-item-4");

    if (
        window.innerWidth > 1239 &&
        scrollPosition - 400 > reason.offsetTop - window.innerHeight
    ) {
        reason_item_1.classList.add("fadeUpDelay1");
        reason_item_2.classList.add("fadeUpDelay2");
        reason_item_3.classList.add("fadeUpDelay3");
        reason_item_4.classList.add("fadeUpDelay4");
    }
    //----------------------------------------------------------------
    // Archieved //

    const valueDisplays = $$(".archieved-number");
    const interval = 2000;
    if (
        !hasRun &&
        scrollPosition - 200 > $("#archives").offsetTop - window.innerHeight
    ) {
        valueDisplays.forEach((valueDisplay) => {
            let startValue = 0;
            const endValue = valueDisplay.getAttribute("value");

            const loot = setInterval(() => {
                startValue += 1;
                valueDisplay.innerHTML = startValue + "K";
                if (startValue == endValue) {
                    clearInterval(loot);
                }
            }, endValue / interval);
        });
        hasRun = true;
    }
    //----------------------------------------------------------------
    // Out Team //
    const out_team = $("#out-team");
    const out_team_item_1 = $(".out-team-item-1");
    const out_team_item_2 = $(".out-team-item-2");
    const out_team_item_3 = $(".out-team-item-3");
    const out_team_item_4 = $(".out-team-item-4");
    if (
        window.innerWidth > 1239 &&
        scrollPosition - 400 > out_team.offsetTop - window.innerHeight
    ) {
        out_team_item_1.classList.add("fadeUpDelay1");
        out_team_item_2.classList.add("fadeUpDelay2");
        out_team_item_3.classList.add("fadeUpDelay3");
        out_team_item_4.classList.add("fadeUpDelay4");
    }
    //// RoadMao ////

    ////----------------------------------------------------------------
    //----------------------------------------------------------------
    // Download //
    const download = $("#download");
    const download_content = $(".download-content");
    const download_img = $(".download-img");
    if (
        window.innerWidth > 1239 &&
        scrollPosition - 400 > download.offsetTop - window.innerHeight
    ) {
        download_content.classList.add("fadeLeftToRight");
        download_img.classList.add("fadeRightToLeft");
    }
    //----------------------------------------------------------------

    // Faq //
    const faq = $("#faq");
    const faq_content = $(".faq-content");

    if (
        window.innerWidth > 1239 &&
        scrollPosition - 400 > faq.offsetTop - window.innerHeight
    ) {
        faq_content.classList.add("fadeUp");
    }
    // Contact //
    if (
        window.innerWidth > 1239 &&
        scrollPosition - 400 > $("#contact").offsetTop - window.innerHeight
    ) {
        $(".contact-info").classList.add("fadeLeftToRight");
        $(".sending-message").classList.add("fadeRightToLeft");
    }
});
