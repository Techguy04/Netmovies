/**
 * /* @format
 *
 * @format
 */

// The Add Movie Form Functionality
const upload = document.querySelector("#upload");
const uploadFormContainer = document.querySelector(".container");
const removeFormContainer = document.querySelector("#remove");
upload.addEventListener("click", () => {
	uploadFormContainer.classList.add("activated");
});
removeFormContainer.addEventListener("click", () => {
	uploadFormContainer.classList.remove("activated");
});

window.addEventListener("keyup", (event) => {
	if (event.key === "Escape") uploadFormContainer.classList.remove("activated");
});

// Upload Box Functionality
const addBtn = document.querySelector(".add-btn");
addBtn.addEventListener("click", () => {
	uploadFormContainer.classList.add("activated");
	// console.log(fileInpuut.value);
});

const tvfrm = document.querySelector("#tv-form");
tvfrm.addEventListener("click", () => {
	uploadFormContainer.classList.add("activated");
});

const moviefrm = document.querySelector("#movie-frm");
moviefrm.addEventListener("click", () => {
	uploadFormContainer.classList.add("activated");
});

const newsfrm = document.querySelector("#news-frm");
newsfrm.addEventListener("click", () => {
	uploadFormContainer.classList.add("activated");
});

const data = JSON.parse(localStorage.getItem("homemovies"));

// Uploading Movis to Home Section
document.querySelector("#home-dtls").addEventListener("submit", function (e) {
	e.preventDefault();
	const homeForm = new FormData(e.target);
	const section = homeForm.get("section");
	const imageurl = homeForm.get("image-url");
	const movie = homeForm.get("name");
	const desc = homeForm.get("desc");

	const movieDetails = {
		id: Math.floor(Math.random() * 357395 + 553865),
		section,
		imageurl,
		movie,
		desc,
	};

	if (localStorage.getItem("homemovies") === null) {
		localStorage.setItem("homemovies", "[]");
	}

	const data = JSON.parse(localStorage.getItem("homemovies"));
	data.push(movieDetails);

	localStorage.setItem("homemovies", JSON.stringify(data));

	document.querySelector("#section").value = "";
	document.querySelector("#imageurl").value = "";
	document.querySelector("#movienm").value = "";
	document.querySelector("#m-desc").value = "";
	location.reload();
});

// adding information to home section
//checking if local storage exists
if (data != null) {
	for (i = 0; i < data.length; i++) {
		// checking the section input
		if (data[i].section.toLowerCase().includes("home")) {
			document.querySelector("#homerow").innerHTML += `<tbody>
			<tr class="tablerow">
				<td class="id">${data[i].id}</td>
				<td>
					<img
						src="${data[i].imageurl}"
						alt=""
					/>
				</td>
				<td class="name">${data[i].movie}</td>
				<td>
					<p class="desc"
						>${data[i].desc}</p
					>
				</td>
				<td><i class="fa-solid fa-pen edit" onclick="editFormContainer(${data[i].id})"></i></td>
				<td><i class="fa-regular fa-trash-can delete" onclick= deleteMovie(${data[i].id})></i></td>
			</tr>
		</tbody>`;
		} //for the tv section
		else if (data[i].section.toLowerCase().includes("tv")) {
			document.querySelector("#tvsection").innerHTML += `<tbody>
			<tr class="tablerow">
				<td class="id">8633247</td>
				<td>
					<img
						src="${data[i].imageurl}"
						alt=""
					/>
				</td>
				<td class="name">${data[i].movie}</td>
				<td>
					<p class="desc"
						>${data[i].desc}</p
					>
				</td>
				<td><i class="fa-solid fa-pen edit" onclick="editFormContainer(${data[i].id})"></i></td>
				<td><i class="fa-regular fa-trash-can delete" onclick=deleteMovie(${data[i].id})></i></td>
			</tr>
		</tbody>`;
		} //for the movie section
		else if (data[i].section.toLowerCase().includes("movie")) {
			document.querySelector("#movie").innerHTML += `<tbody>
			<tr class="tablerow">
				<td class="id">8633247</td>
				<td>
					<img
						src="${data[i].imageurl}"
						alt=""
					/>
				</td>
				<td class="name">${data[i].movie}</td>
				<td>
					<p class="desc"
						>${data[i].desc}</p
					>
				</td>
				<td><i class="fa-solid fa-pen edit" onclick="editFormContainer(${data[i].id})"></i></td>
				<td><i class="fa-regular fa-trash-can delete" onclick=deleteMovie(${data[i].id})></i></td>
			</tr>
		</tbody>`;
		} //for news and popular section
		else if (
			data[i].section.toLowerCase().includes("news") ||
			data[i].section.toLowerCase().includes("popular")
		) {
			document.querySelector("#news").innerHTML += `<tbody>
			<tr class="tablerow">
				<td class="id">${data[i].id}</td>
				<td>
					<img
						src="${data[i].imageurl}"
						alt=""
					/>
				</td>
				<td class="name">${data[i].movie}</td>
				<td>
					<p class="desc"
						>${data[i].desc}</p
					>
				</td>
				<td><i class="fa-solid fa-pen edit" onclick="editFormContainer(${data[i].id})"></i></td>
				<td><i class="fa-regular fa-trash-can delete" onclick=deleteMovie(${data[i].id})></i></td>
			</tr>
		</tbody>`;
		}
	}
}

// // Edit.Js
function editFormContainer(value) {
	document.querySelector("#edit-form-container").style.display = "block";

	for (let i = 0; i < data.length; i++) {
		if (data[i].id == value) {
			console.log(data[i].section);
			document.querySelector("#edit-section").value = data[i].section;
			document.querySelector("#edit-imageurl").value = data[i].imageurl;
			document.querySelector("#edit-movienm").value = data[i].movie;
			document.querySelector("#edit-desc").value = data[i].desc;
		}
	}

	document.querySelector("#edit-dtls").addEventListener("submit", function (e) {
		e.preventDefault();
		const editEvent = new FormData(e.target);
		const esection = editEvent.get("section");
		const eimageurl = editEvent.get("image-url");
		const emovie = editEvent.get("name");
		const edesc = editEvent.get("desc");

		for (i = 0; i < data.length; i++) {
			if (data[i].id == value) {
				data[i].section = esection;
				data[i].imageurl = eimageurl;
				data[i].movie = emovie;
				data[i].desc = edesc;
			}
		}
		localStorage.setItem("homemovies", JSON.stringify(data));
	});
}

// delete Functionality
function deleteMovie(value) {
	const newArr = [];
	for (i = 0; i < data.length; i++) {
		if (data[i].id != value) {
			newArr.push(data[i]);
		}
	}
	localStorage.setItem("homemovies", JSON.stringify(newArr));
	location.reload();
}

// for counts
let totalcount = 0;
let tvshows = 0;
let movies = 0;
let newrelease = 0;

for (i = 0; i < data.length; i++) {
	if (data[i].section.toLowerCase().includes("tv")) {
		tvshows++;
	} else if (data[i].section.toLowerCase().includes("movie")) {
		movies++;
	} else if (data[i].section.toLowerCase().includes("new")) {
		newrelease++;
	}
}

document.querySelector("#totalcount").innerHTML = data.length;
document.querySelector("#tvshows").innerHTML = tvshows;
document.querySelector("#movies").innerHTML = movies;
document.querySelector("#newrelease").innerHTML = newrelease;
