"use strict";

const gE = (p) => { return document.getElementById(p) }

var isDisabled = false;
var FlagClick = 0;
var opacityValue;
var CountPreferences = 0;


const OprosClick = () => {
	gE('next_btn').style.backgroundColor = 'rgba(0, 145, 215, 1)';
	gE('next_btn1').style.backgroundColor = 'rgba(0, 145, 215, 1)';
	gE('next_btn2').style.backgroundColor = 'rgba(0, 145, 215, 1)';

	gE('next_btn1').style.color = 'white';
	gE('next_btn2').style.color = 'white';

	isDisabled = true;
}

const NetworkClick =(el) => {
	CountPreferences = 0;

	const radios = document.querySelectorAll("input[type='radio'][name='network']");
	let countNC = 0;
	for (const radio of radios) {
		if (radio.checked) {
			countNC++;
		}
	}

	//console.log(countNC);
	const checkboxes = document.querySelectorAll("input[type='checkbox'][name='models']");
	const selectedModels = [];
	for (const checkbox of checkboxes) {
		if (checkbox.checked) {
			selectedModels.push(checkbox.value);
		}
	}
	let sl = selectedModels.length;
	//console.log(selectedModels); // ["model1", "model2"]
	//console.log(selectedModels.length); // ["model1", "model2"]

	if (sl == 6) {
		gE('p3_stage2').style.color = `rgba(0, 145, 215, 1)`;
	} else if (sl < 6){
		gE('p3_stage2').style.color = `rgba(255, 86, 12, 1)`;

	}

	if (sl > 6){
		el.checked = false;
		sl--;
	}

	gE('p3_stage2').innerText = `${sl}/6 selected`;



	const radios1 = document.querySelectorAll("input[type='radio'][name='condition']");
	let countNC1 = 0;
	for (const radio1 of radios1) {
		if (radio1.checked) {
			countNC1++;
		}
	}

	CountPreferences += countNC + sl + countNC1;

	if (CountPreferences == 8) {
		gE('next_btn').style.backgroundColor = 'rgba(0, 145, 215, 1)';
		gE('next_btn1').style.backgroundColor = 'rgba(0, 145, 215, 1)';
		gE('next_btn2').style.backgroundColor = 'rgba(0, 145, 215, 1)';
		gE('next_btn1').style.color = 'white';
		gE('next_btn2').style.color = 'white';
		isDisabled = true;
	} else {
		gE('back_next').style.backgroundColor = `rgba(255, 255, 255, 0)`;
		gE('next_btn1').style.color = `rgba(136, 136, 136, 1)`; gE('next_btn1').style.backgroundColor = `rgba(237, 239, 240, 1)`;
		gE('next_btn2').style.color = `rgba(136, 136, 136, 1)`; gE('next_btn2').style.backgroundColor = `rgba(237, 239, 240, 1)`;
		isDisabled = false;
	}

}

function fadeIn(blok) {
	FlagClick = 1;

	let myBlock = document.getElementById(blok);
	let computedStyle = window.getComputedStyle(myBlock);
	opacityValue = computedStyle.getPropertyValue('opacity');
//	console.log(opacityValue);

	//console.log(opacityValue);

	if (opacityValue < 1){
		myBlock.classList.remove('hovanka');
		myBlock.classList.add('pokaz');
	}
	else{
		myBlock.classList.remove('pokaz');
		myBlock.classList.add('hovanka');
	}

	setTimeout(() => {
		FlagClick = 0;
	}, 750);
	//console.log(opacityValue);

}

window.onload = ()=>{
	gE('punkt1').style.backgroundColor = `rgba(90, 151, 204, 1)`;
	gE('back_btn').style.display = `none`;
	gE('stage1').style.display = `flex`;


	fadeIn('stage1');

/*
	gE('opros1').click();

	setTimeout(() => {
		gE('next_btn1').click();
		setTimeout(() => {
			gE('network1').click();
			gE('model1').click();
			gE('model2').click();
			gE('model3').click();
			gE('model4').click();
			gE('model5').click();
			gE('model6').click();
			gE('condition1').click();
			gE('next_btn1').click();
		}, 3000);
	}, 750);
*/

/*
	setTimeout(() => {
		fadeIn('stage1');
		setTimeout(() => {
			//gE('opros1').click();
			setTimeout(() => {
				//gE('next_btn1').click();
			}, 750);
		}, 750);


	}, 100);
*/


}

gE('back_btn').onclick = () => {
	if (FlagClick == 0) {


		if (window.getComputedStyle(gE('stage2')).display == 'flex') {
			fadeIn('stage2');
			setTimeout(() => {
				gE('stage2').style.display = 'none';

				gE('punkt1').innerHTML = `1`;
				gE('ryska1').style.backgroundColor = `rgba(207, 225, 239, 1)`;
				gE('punkt2').style.backgroundColor = `rgba(207, 225, 239, 1)`;
				gE('back_btn').style.display = 'none';

				gE('stage1').style.display = 'flex';
				fadeIn('stage1');
				isDisabled = true;

				gE('back_next').style.backgroundColor = `rgba(255, 255, 255, 0)`;
				gE('next_btn1').style.color = `rgba(255, 255, 255, 1)`; gE('next_btn1').style.backgroundColor = `rgba(0, 145, 215, 1)`;
				gE('next_btn2').style.color = `rgba(255, 255, 255, 1)`; gE('next_btn2').style.backgroundColor = `rgba(0, 145, 215, 1)`;

			}, 500);

		}
		else
			if (window.getComputedStyle(gE('stage3_1')).display == 'flex') {
				//opacityValue = 0;

				fadeIn('stage3_1');
				setTimeout(() => {
					gE('stage3_1').style.display = 'none';

					gE('punkt2').innerHTML = `2`;
					gE('ryska2').style.backgroundColor = `rgba(207, 225, 239, 1)`;
					gE('punkt3').style.backgroundColor = `rgba(207, 225, 239, 1)`;
					//gE('back_btn').style.display = 'none';
					gE('next_btn1').innerText = `Next`;

					gE('stage2').style.display = 'flex';
					fadeIn('stage2');

					if (CountPreferences == 8) { OprosClick(); }

				}, 500);


			}
			else
				if (window.getComputedStyle(gE('stage3_2')).display == 'flex') {
					fadeIn('stage3_2');
					setTimeout(() => {
						gE('stage3_2').style.display = 'none';

						gE('ryska3_1').style.backgroundColor = `rgba(207, 225, 239, 1)`;
						//gE('punkt3').style.backgroundColor = `rgba(207, 225, 239, 1)`;
						//gE('back_btn').style.display = 'none';
						gE('next_btn1').innerText = `Next Tip (1/3)`;

						gE('stage3_1').style.display = 'flex';
						fadeIn('stage3_1');
					}, 500);

				}
				else
					if (window.getComputedStyle(gE('stage3_3')).display == 'flex') {
						fadeIn('stage3_3');
						setTimeout(() => {
							gE('stage3_3').style.display = 'none';

							gE('ryska3_2').style.backgroundColor = `rgba(207, 225, 239, 1)`;
							gE('next_btn1').innerText = `Next Tip (2/3)`;

							gE('stage3_2').style.display = 'flex';
							fadeIn('stage3_2');
						}, 500);
					}
					else
						if (window.getComputedStyle(gE('stage4')).display == 'flex') {
							fadeIn('stage4');
							setTimeout(() => {
								gE('stage4').style.display = 'none';

								gE('ryska3_3').style.backgroundColor = `rgba(207, 225, 239, 1)`;
								gE('next_btn1').innerText = `Next Tip (3/3)`;
								gE('punkt3').innerHTML = `3`;
								gE('punkt4').style.backgroundColor = `rgba(207, 225, 239, 1)`;


								gE('stage3_3').style.display = 'flex';
								fadeIn('stage3_3');
							}, 500);

						}
						else
							if (window.getComputedStyle(gE('stage5')).display == 'flex') {
								fadeIn('stage5');
								setTimeout(() => {
									gE('stage5').style.display = 'none';

									gE('ryska4').style.backgroundColor = `rgba(207, 225, 239, 1)`;
									gE('next_btn1').innerText = `Next`;
									gE('punkt4').innerHTML = `4`;
									gE('punkt5').style.backgroundColor = `rgba(207, 225, 239, 1)`;


									gE('stage4').style.display = 'flex';
									fadeIn('stage4');
								}, 500);

							}
	}
}

gE('next_btn').onclick = () => {
	if (FlagClick == 0){

		if (isDisabled === true) {

			if (window.getComputedStyle(gE('stage1')).display == 'flex') {
				fadeIn('stage1');
				setTimeout(() => {
					gE('stage1').style.display = 'none';

					gE('punkt1').innerHTML = `&#10003;`;
					gE('ryska1').style.backgroundColor = `rgba(90, 151, 204, 1)`;
					gE('punkt2').style.backgroundColor = `rgba(90, 151, 204, 1)`;
					gE('back_btn').style.display = 'flex';

					gE('stage2').style.display = 'flex';
					fadeIn('stage2');

					isDisabled = false;
					gE('back_next').style.backgroundColor = `rgba(255, 255, 255, 0)`;
					gE('next_btn1').style.color = `rgba(136, 136, 136, 1)`; gE('next_btn1').style.backgroundColor = `rgba(237, 239, 240, 1)`;
					gE('next_btn2').style.color = `rgba(136, 136, 136, 1)`; gE('next_btn2').style.backgroundColor = `rgba(237, 239, 240, 1)`;


					if(CountPreferences==8){OprosClick();}

				}, 500);

			}
			else
				if (window.getComputedStyle(gE('stage2')).display == 'flex') {
					fadeIn('stage2');
					setTimeout(() => {
						gE('stage2').style.display = 'none';

						gE('punkt2').innerHTML = `&#10003;`;
						gE('ryska2').style.backgroundColor = `rgba(90, 151, 204, 1)`;
						gE('punkt3').style.backgroundColor = `rgba(90, 151, 204, 1)`;
						//gE('back_btn').style.display = 'flex';
						gE('next_btn1').innerText = `Next Tip (1/3)`;

						gE('stage3_1').style.display = 'flex';
						fadeIn('stage3_1');
					}, 500);

				}
				else
					if (window.getComputedStyle(gE('stage3_1')).display == 'flex') {
						fadeIn('stage3_1');
						setTimeout(() => {
							gE('stage3_1').style.display = 'none';

							gE('ryska3_1').style.backgroundColor = `rgba(90, 151, 204, 1)`;
							gE('next_btn1').innerText = `Next Tip (2/3)`;

							gE('stage3_2').style.display = 'flex';
							fadeIn('stage3_2');
						}, 500);

					}
					else
						if (window.getComputedStyle(gE('stage3_2')).display == 'flex') {
							fadeIn('stage3_2');
							setTimeout(() => {
								gE('stage3_2').style.display = 'none';

								gE('ryska3_2').style.backgroundColor = `rgba(90, 151, 204, 1)`;
								gE('next_btn1').innerText = `Next Tip (3/3)`;

								gE('stage3_3').style.display = 'flex';
								fadeIn('stage3_3');
							}, 500);
						}
						else
							if (window.getComputedStyle(gE('stage3_3')).display == 'flex') {
								fadeIn('stage3_3');
								setTimeout(() => {
									gE('stage3_3').style.display = 'none';

									gE('ryska3_3').style.backgroundColor = `rgba(90, 151, 204, 1)`;
									gE('next_btn1').innerText = `Next`;
									gE('punkt3').innerHTML = `&#10003;`;
									gE('punkt4').style.backgroundColor = `rgba(90, 151, 204, 1)`;

									gE('stage4').style.display = 'flex';
									fadeIn('stage4');
								}, 500);
							}
							else
								if (window.getComputedStyle(gE('stage4')).display == 'flex') {
									fadeIn('stage4');
									setTimeout(() => {
										gE('stage4').style.display = 'none';

										gE('ryska4').style.backgroundColor = `rgba(90, 151, 204, 1)`;
										gE('next_btn1').innerText = `Review Settings`;
										gE('punkt4').innerHTML = `&#10003;`;
										gE('punkt5').style.backgroundColor = `rgba(90, 151, 204, 1)`;

										gE('stage5').style.display = 'flex';
										fadeIn('stage5');
									}, 500);
								}
		}

	}

}

