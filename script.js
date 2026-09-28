/* =========================================================
   EVENT DATE
========================================================= */

// 23 October 2026
// Sri Lanka timezone = UTC +05:30

const EVENT_DATE =
    new Date("2026-10-23T09:00:00+05:30").getTime();


/* =========================================================
   GATE ELEMENTS
========================================================= */

const gateExperience =
    document.getElementById("gateExperience");

const enterBtn =
    document.getElementById("enterBtn");

const gateMessage =
    document.getElementById("gateMessage");


/* =========================================================
   OPEN GATE
========================================================= */

enterBtn.addEventListener("click", () => {

    // Prevent multiple clicks
    if (
        gateExperience.classList.contains("opening")
    ) {
        return;
    }


    // Start gate animation
    gateExperience.classList.add("opening");


    gateMessage.querySelector("span").textContent =
        "THE GATE IS OPENING...";


    // Change message after gate starts opening
    setTimeout(() => {

        gateMessage.querySelector("span").textContent =
            "ශ්‍රී රාහුලීය කලා මංගල්‍යය 2026";

    }, 1000);


    // Remove gate after animation
    setTimeout(() => {

        gateExperience.style.opacity = "0";

        gateExperience.style.transition =
            "opacity .8s ease";


        setTimeout(() => {

            gateExperience.style.display =
                "none";

            document.body.classList.remove(
                "no-scroll"
            );

            window.scrollTo({
                top: 0,
                behavior: "instant"
            });

        }, 800);

    }, 2200);

});


/* =========================================================
   COUNTDOWN
========================================================= */

function updateCountdown() {

    const now = new Date().getTime();

    const distance =
        EVENT_DATE - now;


    // Event has started
    if (distance <= 0) {

        setCountdownValue(
            "days",
            "00"
        );

        setCountdownValue(
            "hours",
            "00"
        );

        setCountdownValue(
            "minutes",
            "00"
        );

        setCountdownValue(
            "seconds",
            "00"
        );


        setCountdownValue(
            "bigDays",
            "00"
        );

        setCountdownValue(
            "bigHours",
            "00"
        );

        setCountdownValue(
            "bigMinutes",
            "00"
        );

        setCountdownValue(
            "bigSeconds",
            "00"
        );


        setCountdownValue(
            "gateDays",
            "00"
        );

        setCountdownValue(
            "gateHours",
            "00"
        );

        setCountdownValue(
            "gateMinutes",
            "00"
        );

        setCountdownValue(
            "gateSeconds",
            "00"
        );


        return;

    }


    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (distance %
                (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (distance %
                (1000 * 60 * 60)) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (distance %
                (1000 * 60)) /
            1000
        );


    const d = formatNumber(days);
    const h = formatNumber(hours);
    const m = formatNumber(minutes);
    const s = formatNumber(seconds);


    /* Main hero */

    setCountdownValue(
        "days",
        d
    );

    setCountdownValue(
        "hours",
        h
    );

    setCountdownValue(
        "minutes",
        m
    );

    setCountdownValue(
        "seconds",
        s
    );


    /* Big countdown */

    setCountdownValue(
        "bigDays",
        d
    );

    setCountdownValue(
        "bigHours",
        h
    );

    setCountdownValue(
        "bigMinutes",
        m
    );

    setCountdownValue(
        "bigSeconds",
        s
    );


    /* Opening gate */

    setCountdownValue(
        "gateDays",
        d
    );

    setCountdownValue(
        "gateHours",
        h
    );

    setCountdownValue(
        "gateMinutes",
        m
    );

    setCountdownValue(
        "gateSeconds",
        s
    );

}


function formatNumber(number) {

    return String(number)
        .padStart(2, "0");

}


function setCountdownValue(
    elementId,
    value
) {

    const element =
        document.getElementById(
            elementId
        );

    if (element) {

        element.textContent =
            value;

    }

}


/* Update immediately */

updateCountdown();


/* Update every second */

setInterval(
    updateCountdown,
    1000
);


/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn =
    document.getElementById(
        "menuBtn"
    );

const navLinks =
    document.getElementById(
        "navLinks"
    );


menuBtn.addEventListener(
    "click",
    () => {

        navLinks.classList.toggle(
            "open"
        );

    }
);


/* Close mobile menu */

document
    .querySelectorAll(
        ".nav-links a"
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navLinks.classList.remove(
                    "open"
                );

            }
        );

    });


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            function(event) {

                const targetId =
                    this.getAttribute(
                        "href"
                    );

                const target =
                    document.querySelector(
                        targetId
                    );

                if (!target) {
                    return;
                }

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


/* =========================================================
   IMAGE ERROR HANDLER
========================================================= */

document
    .querySelectorAll("img")
    .forEach(img => {

        img.addEventListener(
            "error",
            () => {

                console.warn(
                    "Image not found:",
                    img.src
                );

            }
        );

    });
