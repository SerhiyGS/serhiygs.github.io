"use strict";

const gE = (p) => { return document.getElementById(p) }

var isDisabled = false;
var FlagClick = 0;
var opacityValue;
var CountPreferences = 0;

// ------------------------------------------------------------
function isMobileDevice() { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); }
// -----------------------------------------------------------------------------

const OprosClick = () => {

	gE('next_btn').style.background = `url('./images/svg/desktop/next1b.svg') center/cover no-repeat`;

	//background: url('../images/svg/desktop/next1s.svg') center / cover no - repeat;

/*
	gE('next_btn').style.backgroundColor = 'rgba(0, 145, 215, 1)';
	gE('next_btn1').style.backgroundColor = 'rgba(0, 145, 215, 1)';
	gE('next_btn2').style.backgroundColor = 'rgba(0, 145, 215, 1)';

	gE('next_btn1').style.color = 'white';
	gE('next_btn2').style.color = 'white';
*/
	isDisabled = true;
}


function blinkText(blinkingElement) {
	const toggleColor =()=>blinkingElement.style.color = (blinkingElement.style.color === `rgb(0, 145, 215)`) ? 'red' : `rgb(0, 145, 215)`;
	let intervalId = setInterval(toggleColor, 100);
	setTimeout(()=>{
		clearInterval(intervalId);
		blinkingElement.style.color = `rgba(0, 145, 215)`;
	}, 1000);
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

	if (sl >0) {
		gE('p3_stage2').style.color = `rgba(0, 145, 215, 1)`;
	} else {
		gE('p3_stage2').style.color = `rgba(255, 86, 12, 1)`;
	}

	if (sl > 6){
		el.checked = false;
		sl--;
		blinkText(gE('p3_stage2'));
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

	if (countNC == 1 && countNC1 == 1 && CountPreferences >= 3) {
		gE('next_btn').style.background = `url('./images/svg/desktop/next2b.svg') center/cover no-repeat`;
		isDisabled = true;
	} else {
		gE('next_btn').style.background = `url('./images/svg/desktop/next2s.svg') center/cover no-repeat`;
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
	}, 1000);
	//console.log(opacityValue);

}

window.onload = ()=>{
/*
	gE('punkt1').style.backgroundColor = `rgba(90, 151, 204, 1)`;
*/
	gE('back_btn').style.display = `none`;
	gE('stage1').style.display = `flex`;


	fadeIn('stage1');

	const AutoHod = ()=>{
		gE('opros1').click();
		setTimeout(() => {
			gE('next_btn').click();
			setTimeout(() => {
				gE('network1').click();
				gE('model1').click();
				gE('condition1').click();

				gE('next_btn').click();

				setTimeout(() => {
					gE('next_btn').click();

					setTimeout(() => {
						gE('next_btn').click();


						setTimeout(() => {
							gE('next_btn').click();
							setTimeout(() => {
								gE('next_btn').click();
								setTimeout(() => {
									gE('next_btn').click();

								}, 1000);


							}, 1000);



						}, 1000);


					}, 100);


				}, 1000);



			}, 1000);

		}, 1000);
	}

	//AutoHod();


/*
	setTimeout(() => {
		//gE('next_btn1').click();
		setTimeout(() => {
			gE('network1').click();
			gE('model1').click();

			//gE('model2').click();
			//gE('model3').click();
			//gE('model4').click();
			//gE('model5').click();
			//gE('model6').click();
			//gE('condition1').click();
			//gE('next_btn1').click();

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
				if (isMobileDevice()) {
					gE('indicators').style.background = `url('./images/svg/mobile/indicators_stage/ind_2_mob.svg') center/cover no-repeat`;
				} else {
					gE('indicators').style.background = `url('./images/svg/desktop/indicators_stage/ind_1.svg') center/cover no-repeat`;
					//gE('indicators').style.height = `20px`;
				}
				//gE('punkt1').innerHTML = `1`;gE('ryska1').style.backgroundColor = `rgba(207, 225, 239, 1)`;gE('punkt2').style.backgroundColor = `rgba(207, 225, 239, 1)`;

				gE('stage1').style.display = 'flex';
				fadeIn('stage1');
				isDisabled = true;

				gE('back_next').style.backgroundColor = `rgba(255, 255, 255, 0)`;
				gE('back_btn').style.display = 'none';
				gE('next_btn').style.background = `url('./images/svg/desktop/next1b.svg') center/cover no-repeat`;

				/*
				gE('next_btn1').style.color = `rgba(255, 255, 255, 1)`; gE('next_btn1').style.backgroundColor = `rgba(0, 145, 215, 1)`;
				gE('next_btn2').style.color = `rgba(255, 255, 255, 1)`; gE('next_btn2').style.backgroundColor = `rgba(0, 145, 215, 1)`;
*/

			}, 500);

		}
		else
			if (window.getComputedStyle(gE('stage3_1')).display == 'flex') {
				//opacityValue = 0;

				fadeIn('stage3_1');
				setTimeout(() => {
					gE('stage3_1').style.display = 'none';
					if (isMobileDevice()) {
						gE('indicators').style.background = `url('./images/svg/mobile/indicators_stage/ind_2_mob.svg') center/cover no-repeat`;
					} else {
						gE('indicators').style.background = `url('./images/svg/desktop/indicators_stage/ind_2.svg') center/cover no-repeat`;
						//gE('indicators').style.height = `21px`;
					}
					//gE('punkt2').innerHTML = `2`;gE('ryska2').style.backgroundColor = `rgba(207, 225, 239, 1)`;gE('punkt3').style.backgroundColor = `rgba(207, 225, 239, 1)`;
					//gE('back_btn').style.display = 'none';

					//gE('next_btn1').innerText = `Next`;

					gE('stage2').style.display = 'flex';
					fadeIn('stage2');

					gE('next_btn').style.background = `url('./images/svg/desktop/next2b.svg') center/cover no-repeat`;
					//NetworkClick();

				}, 500);


			}
			else
				if (window.getComputedStyle(gE('stage3_2')).display == 'flex') {
					fadeIn('stage3_2');
					setTimeout(() => {
						gE('stage3_2').style.display = 'none';
						if (isMobileDevice()) {
							gE('indicators').style.background = `url('./images/svg/mobile/indicators_stage/ind_2_mob.svg') center/cover no-repeat`;
						} else {
							gE('indicators').style.background = `url('./images/svg/desktop/indicators_stage/ind_3_1.svg') center/cover no-repeat`;
						}
						//gE('ryska3_1').style.backgroundColor = `rgba(207, 225, 239, 1)`;
						//gE('punkt3').style.backgroundColor = `rgba(207, 225, 239, 1)`;
						//gE('back_btn').style.display = 'none';
						//gE('next_btn1').innerText = `Next Tip (1/3)`;

						gE('stage3_1').style.display = 'flex';
						fadeIn('stage3_1');

						//NetworkClick();

						gE('next_btn').style.background = `url('./images/svg/desktop/next1-3.svg') center/cover no-repeat`;


					}, 500);

				}
				else
					if (window.getComputedStyle(gE('stage3_3')).display == 'flex') {
						fadeIn('stage3_3');
						setTimeout(() => {
							gE('stage3_3').style.display = 'none';

							if (isMobileDevice()) {
								gE('indicators').style.background = `url('./images/svg/mobile/indicators_stage/ind_2_mob.svg') center/cover no-repeat`;
							} else {
								gE('indicators').style.background = `url('./images/svg/desktop/indicators_stage/ind_3_2.svg') center/cover no-repeat`;
							}
							//gE('ryska3_2').style.backgroundColor = `rgba(207, 225, 239, 1)`;
							//gE('next_btn1').innerText = `Next Tip (2/3)`;

							gE('stage3_2').style.display = 'flex';
							fadeIn('stage3_2');
							gE('next_btn').style.background = `url('./images/svg/desktop/next2-3.svg') center/cover no-repeat`;

						}, 500);
					}
					else
						if (window.getComputedStyle(gE('stage4')).display == 'flex') {
							fadeIn('stage4');
							setTimeout(() => {
								gE('stage4').style.display = 'none';
								if (isMobileDevice()) {
									gE('indicators').style.background = `url('./images/svg/mobile/indicators_stage/ind_2_mob.svg') center/cover no-repeat`;
								} else {
									gE('indicators').style.background = `url('./images/svg/desktop/indicators_stage/ind_3_3.svg') center/cover no-repeat`;
								}
								//gE('ryska3_3').style.backgroundColor = `rgba(207, 225, 239, 1)`;gE('punkt3').innerHTML = `3`;gE('punkt4').style.backgroundColor = `rgba(207, 225, 239, 1)`;

								//gE('next_btn1').innerText = `Next Tip (3/3)`;

								gE('stage3_3').style.display = 'flex';
								fadeIn('stage3_3');
								gE('next_btn').style.background = `url('./images/svg/desktop/next3-3.svg') center/cover no-repeat`;

							}, 500);

						}
						else
							if (window.getComputedStyle(gE('stage5')).display == 'flex') {
								fadeIn('stage5');
								setTimeout(() => {
									gE('stage5').style.display = 'none';

									if (isMobileDevice()) {
										gE('indicators').style.background = `url('./images/svg/mobile/indicators_stage/ind_2_mob.svg') center/cover no-repeat`;
									} else {
										gE('indicators').style.background = `url('./images/svg/desktop/indicators_stage/ind_4.svg') center/cover no-repeat`;
									}
									//gE('next_btn1').innerText = `Next`;

									//gE('ryska4').style.backgroundColor = `rgba(207, 225, 239, 1)`;gE('punkt4').innerHTML = `4`;gE('punkt5').style.backgroundColor = `rgba(207, 225, 239, 1)`;

									gE('stage4').style.display = 'flex';
									fadeIn('stage4');

									gE('next_btn').style.background = `url('./images/svg/desktop/next2b.svg') center/cover no-repeat`;
								}, 500);

							}
	}
}
// ------------------------------------------ NEXT BUTTON ------------------------------------------
gE('next_btn').onclick = () => {
	if (FlagClick == 0){

		if (isDisabled === true) {

			if (window.getComputedStyle(gE('stage1')).display == 'flex') {
				fadeIn('stage1');
				setTimeout(() => {
					gE('stage1').style.display = 'none';

					//gE('punkt1').innerHTML = `&#10003;`;gE('ryska1').style.backgroundColor = `rgba(90, 151, 204, 1)`;gE('punkt2').style.backgroundColor = `rgba(90, 151, 204, 1)`;

					if(isMobileDevice()) {
						gE('indicators').style.background = `url('./images/svg/mobile/indicators_stage/ind_2_mob.svg') center/cover no-repeat`;
					} else {
						gE('indicators').style.background = `url('./images/svg/desktop/indicators_stage/ind_2.svg') center/cover no-repeat`;
						//gE('indicators').style.height = `21px`;
					}

					gE('back_btn').style.display = 'flex';

					gE('stage2').style.display = 'flex';
					fadeIn('stage2');

					isDisabled = false;

					gE('back_next').style.backgroundColor = `rgba(255, 255, 255, 0)`;


					NetworkClick();

					//gE('next_btn').style.background = `url('./images/svg/desktop/next2s.svg') center/cover no-repeat`;

					//gE('id_main').style.height = '100dvh';

					//gE('stage2').style.height = `${ gE('id_main').offsetHeight - 150 }px`;

					//alert(gE('id_main').offsetHeight);

					/*
					gE('next_btn1').style.color = `rgba(136, 136, 136, 1)`; gE('next_btn1').style.backgroundColor = `rgba(237, 239, 240, 1)`;
					gE('next_btn2').style.color = `rgba(136, 136, 136, 1)`; gE('next_btn2').style.backgroundColor = `rgba(237, 239, 240, 1)`;
					*/

					//if(CountPreferences>=3){OprosClick();}

				}, 500);

			}
			else
				if (window.getComputedStyle(gE('stage2')).display == 'flex') {
					fadeIn('stage2');
					setTimeout(() => {
						gE('stage2').style.display = 'none';

						//gE('punkt2').innerHTML = `&#10003;`;
						//gE('ryska2').style.backgroundColor = `rgba(90, 151, 204, 1)`;
						//gE('punkt3').style.backgroundColor = `rgba(90, 151, 204, 1)`;

						if (isMobileDevice()) {
							gE('indicators').style.background = `url('./images/svg/mobile/indicators_stage/ind_2_mob.svg') center/cover no-repeat`;
						} else {
							gE('indicators').style.background = `url('./images/svg/desktop/indicators_stage/ind_3_1.svg') center/cover no-repeat`;
							gE('indicators').style.height = `20px`;
						}

						//gE('back_btn').style.display = 'flex';
						//gE('next_btn1').innerText = `Next Tip (1/3)`;

						gE('stage3_1').style.display = 'flex';
						fadeIn('stage3_1');

						//gE('next_btn').style.background = `url('./images/svg/desktop/next1-3.svg') center/cover no-repeat`;
						gE('next_btn').style.background = `url('./images/svg/desktop/next1-3.svg') center/cover no-repeat`;


					}, 500);

				}
				else
					if (window.getComputedStyle(gE('stage3_1')).display == 'flex') {
						fadeIn('stage3_1');
						setTimeout(() => {
							gE('stage3_1').style.display = 'none';

							//gE('ryska3_1').style.backgroundColor = `rgba(90, 151, 204, 1)`;
							if (isMobileDevice()) {
								gE('indicators').style.background = `url('./images/svg/mobile/indicators_stage/ind_2_mob.svg') center/cover no-repeat`;
							} else {
								gE('indicators').style.background = `url('./images/svg/desktop/indicators_stage/ind_3_2.svg') center/cover no-repeat`;
							}
							//gE('next_btn1').innerText = `Next Tip (2/3)`;

							gE('stage3_2').style.display = 'flex';
							fadeIn('stage3_2');

							gE('next_btn').style.background = `url('./images/svg/desktop/next2-3.svg') center/cover no-repeat`;

						}, 500);

					}
					else
						if (window.getComputedStyle(gE('stage3_2')).display == 'flex') {
							fadeIn('stage3_2');
							setTimeout(() => {
								gE('stage3_2').style.display = 'none';

								//gE('ryska3_2').style.backgroundColor = `rgba(90, 151, 204, 1)`;
								if (isMobileDevice()) {
									gE('indicators').style.background = `url('./images/svg/mobile/indicators_stage/ind_2_mob.svg') center/cover no-repeat`;
								} else {
									gE('indicators').style.background = `url('./images/svg/desktop/indicators_stage/ind_3_3.svg') center/cover no-repeat`;
								}
								//gE('next_btn1').innerText = `Next Tip (3/3)`;

								gE('stage3_3').style.display = 'flex';
								fadeIn('stage3_3');
								gE('next_btn').style.background = `url('./images/svg/desktop/next3-3.svg') center/cover no-repeat`;

							}, 500);
						}
						else
							if (window.getComputedStyle(gE('stage3_3')).display == 'flex') {
								fadeIn('stage3_3');
								setTimeout(() => {
									gE('stage3_3').style.display = 'none';

									//gE('ryska3_3').style.backgroundColor = `rgba(90, 151, 204, 1)`;
									//gE('punkt3').innerHTML = `&#10003;`;
									//gE('punkt4').style.backgroundColor = `rgba(90, 151, 204, 1)`;
									if (isMobileDevice()) {
										gE('indicators').style.background = `url('./images/svg/mobile/indicators_stage/ind_2_mob.svg') center/cover no-repeat`;
									} else {
										gE('indicators').style.background = `url('./images/svg/desktop/indicators_stage/ind_4.svg') center/cover no-repeat`;
									}
									//gE('next_btn1').innerText = `Next`;

									gE('stage4').style.display = 'flex';
									fadeIn('stage4');

									gE('next_btn').style.background = `url('./images/svg/desktop/next2b.svg') center/cover no-repeat`;

								}, 500);
							}
							else
								if (window.getComputedStyle(gE('stage4')).display == 'flex') {
									fadeIn('stage4');
									setTimeout(() => {
										gE('stage4').style.display = 'none';

										//gE('ryska4').style.backgroundColor = `rgba(90, 151, 204, 1)`;
										//gE('punkt4').innerHTML = `&#10003;`;
										//gE('punkt5').style.backgroundColor = `rgba(90, 151, 204, 1)`;

										if (isMobileDevice()) {
											gE('indicators').style.background = `url('./images/svg/mobile/indicators_stage/ind_2_mob.svg') center/cover no-repeat`;
										} else {
											gE('indicators').style.background = `url('./images/svg/desktop/indicators_stage/ind_5.svg') center/cover no-repeat`;
										}

										//gE('next_btn1').innerText = `Review Settings`;
										gE('stage5').style.display = 'flex';
										fadeIn('stage5');
										gE('next_btn').style.background = `url('./images/svg/desktop/rev-set.svg') center/cover no-repeat`;


									}, 500);
								}
		}

	}

}

