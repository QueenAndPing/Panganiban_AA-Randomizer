const num1 = Math.ceil(Math.random() * 20);
const num2 = Math.ceil(Math.random() * 20);
const num3 = Math.ceil(Math.random() * 20);
document.getElementById("randomvalue-one").innerText = `${num1}`;
document.getElementById("randomvalue-two").innerText = `${num2}`;
document.getElementById("randomvalue-three").innerText = `${num3}`;
let highest = Math.max(num1, num2, num3);
let subject = "";
if (highest === num1) {
	subject += "Chemistry";
}
if (highest === num2) {
	if (subject !== "") {
		subject += ", ";
	}
	subject += "Social Science";
}
if (highest === num3) {
	if (subject !== "") {
		subject += ", ";
	}
	subject += "Statistics";
}
document.getElementById("highestpassers").innerText = `${subject} (${highest})`;
document.getElementById("passersubject").innerText = `${subject}`;
document.getElementById("passersubject2").innerText = `${subject}`;
const nthLetter = String.fromCharCode(num1 + 96);
document.getElementById("nthletter").innerText = nthLetter.toUpperCase();
const totalMins = num2 * num3;
const hours = Math.floor(totalMins / 60);
const mins = totalMins % 60;
document.getElementById("timebreakdown").innerText = `${hours} hr ${mins} mins (total mins: ${totalMins})`;