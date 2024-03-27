let sect2_txt = document.querySelector(".sect2_txt");
window.addEventListener("scroll", function () {
	let value = window.scrollY;
	console.log("scroll", value);
	if (value < 200) {
		sect2_txt.style.animation = "disappear 1s ease-out forwards";
	} else {
		sect2_txt.style.animation = "slide 1s ease-out";
	}
});

let sect2_text4 = document.querySelector(".text_t4");
window.addEventListener("scroll", function () {
	let value = window.scrollY;
	console.log("scroll", value);
	if (value < 300) {
		sect2_text4.style.animation = "disappear 1.2s ease-out forwards";
	} else {
		sect2_text4.style.animation = "slide 1.2s ease-out";
	}
});

let sect2_ul = document.querySelector("ul");
window.addEventListener("scroll", function () {
	let value = window.scrollY;
	console.log("scroll", value);
	if (value < 200) {
		sect2_ul.style.animation = "disapper2 1.3s ease-out forwards";
	} else {
		sect2_ul.style.animation = "slide2 1.3s ease-out";
	}
});

let sect4_img2 = document.querySelector(".section4 .img2");
window.addEventListener("scroll", function () {
	let value = window.scrollY;
	console.log("scroll", value);
	if (value < 200) {
		sect4_img2.style.animation = "imgslide 3s ease-out";
	}
});
let sect4_img3 = document.querySelector(".section4 .img3");
window.addEventListener("scroll", function () {
	let value = window.scrollY;
	console.log("scroll", value);
	if (value < 300) {
		sect4_img3.style.animation = "imgslide 3.4s ease-out";
	}
});
let sect4_img4 = document.querySelector(".section4 .img4");
window.addEventListener("scroll", function () {
	let value = window.scrollY;
	console.log("scroll", value);
	if (value < 300) {
		sect4_img4.style.animation = "imgslide 3.8s ease-out";
	}
});

let observer = new IntersectionObserver((e) => {
	e.forEach((sect5_tit) => {
		if (sect5_tit.isIntersecting) {
			sect5_tit.target.style.opacity = 1;
			sect5_tit.target.style.transform = "rotate(0deg)";
		} else {
			sect5_tit.target.style.opacity = 0;
		}
	});
});

let sect5_tit = document.querySelector(".section5 h2");
observer.observe(sect5_tit);

const hide = (item) => {
	gsap.set(item, { autoAlpha: 0 });
};

const animate = (item) => {
	let x = 0;
	let y = 0;
	let delay = item.dataset.delay;

	if (item.classList.contains("p")) {
		(y = -100), (x = 0);
	} else if (item.classList.contains("p")) {
		(y = 0), (x = 100);
	} else {
		(y = 100), (x = 0);
	}

	gsap.fromTo(
		item,
		{ autoAlpha: 0, x: x, y: y },
		{
			autoAlpha: 1,
			x: 0,
			y: 0,
			delay: delay,
			duration: 1.25,
			overwrite: "auto",
			ease: "expo",
		}
	);
};

gsap.utils.toArray("p").forEach((item) => {
	hide(item);

	ScrollTrigger.create({
		trigger: item,
		start: "top bottom",
		end: "bottom top",
		markers: false,
		onEnter: () => {
			animate(item);
		},
	});
});
