import {elements} from "./utils/base";

export const circle1Event = () => {
  let ismoving = false;
  let a = [];
  // let width = line2.getBoundingClientRect().width;
  // console.log("width: " + width);
  elements.circle1.addEventListener("mousedown", e => {
    ismoving = true;
  });

  elements.circle1.addEventListener("mousemove", e => {
    let line_width;
    if (ismoving == true) {
      const x = e.clientX;
      // console.log("x of: " + x);
      const x1 = x - 17.5;
      const y1 = x - 27.5;

      // console.log("x1of circle1: " + x1);
      if (
        x1 <= 250 &&
        x1 > 5 &&
        elements.line2.getBoundingClientRect().width >= 20
      ) {
        if (a.length == 0) {
          a.push(y1);
        } else if (a[0] !== y1) {
          a.push(y1);
        }
        let circle_left = x1 + "px";
        let line_left = y1 + "px";
        console.log("circle_left: " + circle_left);
        elements.circle1.style.left = circle_left;
        elements.line2.style.left = line_left;
        console.log(
          "elements.circle1.getBoundingClientRect().left: " +
            elements.circle1.getBoundingClientRect().left
        );
        if (a[0] == y1) {
          // this elseif will handle first move.
          if (elements.line2.getBoundingClientRect().width == 248) {
            line_width =
              elements.line2.getBoundingClientRect().width - y1 + "px";
            // console.log("line_width: " + line_width);
            // console.log("pop because it is initial: " + a[0]);
          }
        } else if (a[0] !== a[1]) {
          line_width =
            elements.line2.getBoundingClientRect().width - (a[1] - a[0]) + "px";
          // console.log("line_width am inside else if: " + line_width);
          if (a.length > 1) {
            a.shift();

            // console.log("pop because it is different: " + a);
            // console.log("a:" + a);
          }
        }

        elements.line2.style.width = line_width;
      }
    }
  });

  elements.circle1.addEventListener("mouseup", e => {
    ismoving = false;
    console.log("ismoving:" + ismoving);
  });
};

// Circle2 Listner
export const circle2Event = () => {
  let ismoving = false;
  let a = [];
  let boundary = 248;
  elements.circle2.addEventListener("mousedown", e => {
    ismoving = true;
    elements.circle2.addEventListener("mousemove", e => {
      if (ismoving == true) {
        const x = e.clientX;

        const circleLeft = x - 269;
        const line2Left = x - 274;
        console.log("circle2Left :" + circleLeft);
        console.log(
          "elements.circle2.getBoundingClientRect().left: " +
            elements.circle2.getBoundingClientRect().left
        );
        if (
          elements.circle2.getBoundingClientRect().left -
            elements.circle1.getBoundingClientRect().left >
          20
        ) {
          if (circleLeft < 6 && line2Left <= 0) {
            elements.circle2.style.left = circleLeft + "px";
            // line2.style.left = line2Left + "px";
          }

          if (line2Left < 0) {
            console.log(line2Left);
            if (a.length == 0) {
              a.push(-line2Left);
            } else if (a[0] !== line2Left) {
              a.push(-line2Left);
              if (a.length > 2) {
                a.shift();
              }
            }
            console.log("a:" + a);

            if (a[0] == -line2Left && a.length == 1) {
              elements.line2.style.width =
                elements.line2.getBoundingClientRect().width - a[0] + "px";
              console.log("firstWidthChange: " + elements.line2.style.width);
            } else if (a.length > 0) {
              if (
                elements.line2.getBoundingClientRect().width - (a[1] - a[0]) >=
                20
              ) {
                elements.line2.style.width =
                  elements.line2.getBoundingClientRect().width -
                  (a[1] - a[0]) +
                  "px";
                console.log("secondWidthChange: " + elements.line2.style.width);
                boundary = elements.line2.getBoundingClientRect().width;
              }
            }
          }
        }
      }
    });
  });

  elements.circle2.addEventListener("mouseup", e => {
    ismoving = false;
  });
};
