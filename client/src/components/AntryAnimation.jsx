import "./anim.css";
import React, { useEffect } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";

function AnimatedTextAnimation() {
  useEffect(() => {
    gsap.registerPlugin(Flip);

    let layouts = ["final", "plain", "columns", "grid"],
      container = document.querySelector(".container"),
      curLayout = 0; // index of the current layout

    function nextState() {
      const state = Flip.getState(".letter, .for, .gsap", {
        props: "color,backgroundColor",
        simple: true,
      }); // capture current state

      container.classList.remove(layouts[curLayout]); // remove old class
      curLayout = (curLayout + 1) % layouts.length; // increment (loop back to the start if at the end)
      container.classList.add(layouts[curLayout]); // add the new class

      Flip.from(state, {
        // animate from the previous state
        absolute: true,
        stagger: 0.07,
        duration: 0.3,
        ease: "power2.inOut",
        spin: curLayout === 1, // only spin when going to the "final" layout
        simple: true,
        onEnter: (elements, animation) =>
          gsap.fromTo(
            elements,
            { opacity: 0 },
            { opacity: 1, delay: animation.duration() - 0.1 }
          ),
        onLeave: (elements) => gsap.to(elements, { opacity: 0 }),
        onComplete: () => {
          if (curLayout === 0) {
            setTimeout(() => {
              container.style.display = "none";
            }, 2000); // Hide the container
          }
        },
      });

      gsap.delayedCall(curLayout === 0 ? 10 : 1, nextState);
    }

    gsap.delayedCall(0, nextState);
  }, []);

  return (
    <div class="container final">
      <div class="letter F">T</div>
      <div class="letter l">E</div>
      <div class="letter i">C</div>
      <div class="letter p">H</div>
      <div class="for"> </div>
      <div class="gsap">NEWS</div>
    </div>
  );
}

export default AnimatedTextAnimation;
