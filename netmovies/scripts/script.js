/** @format */

//Swiper

var swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// drop down functioality
// let dropdown = document.querySelector(".dropdown");
// dropdown.onclick = function () {
// 	dropdown.classList.toggle("activate");
// };

const dropdown = document.querySelector(".dropdown");
dropdown.addEventListener("click", () => {
	dropdown.classList.toggle("activate");
});

// hamburger menu functinality
const menutoggleicon = document.querySelector(".menu-toggle-icon");

const toggleMenu = () => {
	const mobileMenu = document.querySelector("#nav-links");
	mobileMenu.classList.toggle("actives");
	menutoggleicon.classList.toggle("actives");
};
menutoggleicon.addEventListener("click", toggleMenu);

// functionality of when the admin add's movie the movie displays on the client side
const data = JSON.parse(localStorage.getItem("homemovies"));
if (data != null) {
	for (let i = 0; i < data.length; i++) {
		if (data[i].section.toLowerCase().includes("home")) {
			document.querySelector("#swiper-wrapper").innerHTML += `
			<div class="swiper-slide">
							<img
								src="${data[i].imageurl}"
								alt=""
							/>
							<div class="slide-txt">
								<h3>${data[i].movie}</h3>
								<i class="material-symbols-outlined"> play_circle</i>
							</div>
						</div>
		`;
		}
	}
}
