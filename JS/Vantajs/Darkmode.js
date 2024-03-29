document.addEventListener("DOMContentLoaded", function () {
    const VantaDark = function () {
        document.querySelector('#JS-Background').style.display = "none";
        document.querySelector('#JS-BackgroundDark').style.display = "block";
    };

    const VantaLight = function () {
        document.querySelector('#JS-Background').style.display = "block";
        document.querySelector('#JS-BackgroundDark').style.display = "none";
    };

    const NotSmart = function () {
        document.querySelector('#JS-Background').style.display = "none";
        document.querySelector('#JS-BackgroundDark').style.display = "none";
    };

    function VantaChangecolor() {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches == true) {
            VantaDark();
        } else {
            VantaLight();
        }

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (e.matches) {
                VantaDark();

            } else {
                VantaLight();
            }
        });
    }



    if (window.matchMedia('(max-device-width: 530px)').matches == true) {
        NotSmart();
    } else {
        VantaChangecolor();
    }


    window.matchMedia('(max-device-width: 530px)').addEventListener('change', () => {
        if (matches) {
            NotSmart();

        } else {
            VantaChangecolor();
        }
    });
});