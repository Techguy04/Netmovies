/** @format */
const data = JSON.parse(localStorage.getItem("user"));
document.querySelector("#signup-frm").addEventListener("submit", (e) => {
	e.preventDefault();
	const formData = new FormData(e.target);
	const name = formData.get("name");
	const email = formData.get("email");
	const passwrd = formData.get("password");

	const userDetails = {
		name,
		email,
		passwrd,
	};

	if (localStorage.getItem("user") == null) {
		localStorage.setItem("user", "[]");
	}

	const data = JSON.parse(localStorage.getItem("user"));
	data.push(userDetails);

	localStorage.setItem("user", JSON.stringify(data));
	document.querySelector("#signup-name").value = "";
	document.querySelector("#eml").value = "";
	document.querySelector("#pswrd").value = "";
});
if (user.name === name && user.email === email && user.passwrd === passwrd) {
	localStorage.setItem("session", "set");
}
