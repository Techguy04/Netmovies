/** @format */

const images = document.getElementsByClassName("hero-dtls");

for (i = 0; i < images.length; i++) {
	images[i].addEventListener("click", function () {
		this.classList.toggle("img");
	});
}

//drop ddown functionality
let dropdown = document.querySelector(".dropdown");
dropdown.onclick = function () {
	dropdown.classList.toggle("activate");
};

// functionality on when the admin add's movie it'll display on the client side
const data = JSON.parse(localStorage.getItem("homemovies"));
if (data != null) {
	for (let i = 0; i < data.length; i++) {
		if (data[i].section.toLowerCase().includes("movie")) {
			document.querySelector("#moviedtls").innerHTML += `<div class="hero-dtls">
			<img src="${data[i].imageurl}" alt="">
			<div class="img-desc">
				<h1>${data[i].movie}</h1>
				<div class="info">
					<div class="action"><button type="submit" class="img-btn">Action</button></div>
					<div class="crime">
						<button type="submit" class="img-btn">Crime</button>
					</div>
					<div class="thriller">
						<button type="submit" class="img-btn">Thriller</button>
					</div>
				</div>
				<div class="desc">
					<p
						>${data[i].desc}</p
					>
				</div>
			</div>
		</div>`;
		}
	}
}
