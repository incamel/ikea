let lastScrollY = window.scrollY;

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.scrollY > lastScrollY) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }
  lastScrollY = window.scrollY;
  console.log();
});

const respSub = document.querySelector(".resp_submenu");
const closeBtn = document.querySelector(".close");
const openBtn = document.querySelector(".resp_menu");
const body = document.body;

openBtn.addEventListener("click", function () {
  respSub.classList.add("active");
  body.style.overflow = "hidden";
});
closeBtn.addEventListener("click", function () {
  respSub.classList.remove("active");
  body.style.overflow = "auto";
});

const menuOne = document.querySelector(".products");
const menuTwo = document.querySelector(".showroom");
const subMenuProduct = document.getElementById("productMenu");
const subMenuShowroom = document.getElementById("showroomMenu");

menuOne.addEventListener("mouseenter", function () {
  subMenuProduct.classList.add("active");
});

menuOne.addEventListener("mouseleave", function (event) {
  if (!subMenuProduct.contains(event.relatedTarget)) {
    subMenuProduct.classList.remove("active");
  }
});

menuTwo.addEventListener("mouseenter", function () {
  subMenuShowroom.classList.add("active");
});

menuTwo.addEventListener("mouseleave", function (event) {
  if (!subMenuShowroom.contains(event.relatedTarget)) {
    subMenuShowroom.classList.remove("active");
  }
});

subMenuProduct.addEventListener("mouseenter", function () {
  subMenuProduct.classList.add("active");
});
subMenuProduct.addEventListener("mouseleave", function (event) {
  if (!menuOne.contains(event.relatedTarget)) {
    subMenuProduct.classList.remove("active");
  }
});

subMenuShowroom.addEventListener("mouseenter", function () {
  subMenuShowroom.classList.add("active");
});
subMenuShowroom.addEventListener("mouseleave", function (event) {
  if (!menuTwo.contains(event.relatedTarget)) {
    subMenuShowroom.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const phone = document.querySelector(".phone_img");
  const bg = document.querySelector(".visual_bg");

  gsap.set(phone, {
    xPercent: -50,
    yPercent: -50,
    top: "50%",
    left: "50%",
    position: "absolute",
  });

  setTimeout(function () {
    gsap.to(phone, {
      rotateX: 0,
      scrollTrigger: {
        trigger: bg,
        markers: false,
        start: "top 50%",
        end: "bottom 90%",
        scrub: true,
        toggleActions: "play none reverse none",
      },
    });
  }, 100);
});


const particles01 = document.querySelectorAll(".particles_01 svg");
const particles02 = document.querySelectorAll(".particles_02 svg");
const visualImg = document.querySelector(".promotion_visual img");

gsap.matchMedia().add("(max-width: 768px)", () => {
  gsap.to(particles01, {
    y: -50,
    duration: 1,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".promotion_visual",
      start: "top center",
      end: "bottom center",
      scrub: 2,
    },
  });
});

gsap.matchMedia().add("(min-width: 768px)", () => {
  gsap.to(particles01, {
    y: -180,
    duration: 1,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".promotion_visual",
      start: "top center",
      end: "bottom center",
      scrub: 2,
    },
  });
});

gsap.matchMedia().add("(max-width: 768px)", () => {
  gsap.to(particles02, {
    y: 50,
    duration: 1,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".promotion_visual",
      start: "top center",
      end: "bottom center",
      scrub: 2,
    },
  });
});

gsap.matchMedia().add("(min-width: 768px)", () => {
  gsap.to(particles02, {
    y: 300,
    duration: 1,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".promotion_visual",
      start: "top center",
      end: "bottom center",
      scrub: 2,
    },
  });
});

gsap.matchMedia().add("(max-width: 768px)", () => {
  gsap.to(visualImg, {
    y: 50,
    duration: 1,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".promotion_visual",
      start: "top center",
      end: "bottom center",
      scrub: 1.5,
      markers: false,
    },
  });
});

gsap.matchMedia().add("(min-width: 768px)", () => {
  gsap.to(visualImg, {
    y: 100,
    duration: 1,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".promotion_visual",
      start: "top center",
      end: "bottom center",
      scrub: 1.5,
      markers: false,
    },
  });
});

document.querySelectorAll(".accordion_header").forEach((header) => {
  header.addEventListener("click", () => {
    const accordionList = header.nextElementSibling;
    const isActive = accordionList.classList.contains("active");

    document.querySelectorAll(".accordion_list").forEach((list) => {
      list.classList.remove("active");
    });

    if (!isActive) {
      accordionList.classList.add("active");
    }
  });
});

var options = {
  threshold: 0.1, // 요소가 10% 보일 때 동작
};

var observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // 더 이상 관찰하지 않음
    }
  });
}, options);

var fadeIns = document.querySelectorAll(".fade-in");
fadeIns.forEach(function (element) {
  observer.observe(element);
});
