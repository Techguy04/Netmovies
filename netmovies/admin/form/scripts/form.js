/** @format */

let email = "wutchechikaome@gmail.com";
let pswrd = "wutche1234";
document.querySelector("#loginfrm").addEventListener("submit", function (e) {
	e.preventDefault();

	const details = new FormData(e.target);

	const gmail = details.get("email");
	const psw = details.get("password");

	if (gmail == email && psw == pswrd) {
		localStorage.setItem("session", "true");

		setTimeout(function () {
			window.location.replace("/netmovies/admin/admin.html");
		});
	}
});
