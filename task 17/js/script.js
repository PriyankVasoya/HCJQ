
move()
function move() {

    let id = null;

    const elem = document.getElementById("square");
    let top = 0;
    let bottom = 750;
    let left = 0;
    let right = 0;

    id = setInterval(frame, 5);

    function frame() {

        if (top >= 375) {
            // console.log("true");
            top++;
            left = left - 2;
            elem.style.top = top + "px";
            elem.style.left = left + "px";

            if (top >= 750) {
                if (bottom >= 375 && bottom <= 750) {
                    // console.log("in");
                    bottom--;
                    right = right + 2;

                    elem.style.top = bottom + "px";
                    elem.style.left = right + "px";
                }
                else if (bottom < 376) {
                    // console.log("out");
                    bottom--;
                    right = right - 2;

                    elem.style.top = bottom + "px";
                    elem.style.left = right + "px";


                    if (right < 0) {
                        top = 0;
                        bottom = 750;
                        left = 0;
                        right = 0;
                    }
                }
            }
        }
        else {
            // console.log("false");
            top++;
            left = left + 2;

            elem.style.top = top + "px";
            elem.style.left = left + "px";
        }
    }
}
