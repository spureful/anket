export default function jsSkills() {
	const arrow = document.querySelector(".js-arrow");
	const skillsBlock = document.querySelector(".js-skills__block");
	const arr = [ "365px", "758px", "-10px", "138px"];

	let arrowPosLeft = getComputedStyle(arrow).left;

	let i = 0;

	function moveArrow() {
		i++;
		arrowPosLeft = arr[i];
		arrow.style.left = arr[i];
		 if ( i == 3) {
			 i = -1;
		 }

	};


	arrow.addEventListener("click", function () {

		moveArrow();


	});


};



jsSkills()
