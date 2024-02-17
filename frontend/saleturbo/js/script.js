"use strict";
const gE = (p) => { return document.getElementById(p) }
const qE = (p) => { return document.querySelector(p) }

const container = qE('#container');
const header = qE('header');
const label = qE('#label');

const main = qE('main');
const indicators = qE('#indicators');
var image_use;// = qE('#image_use');
var btn_use;
var xhr_btn;

const stage1 = qE('#stage1');
const substage1 = qE('#substage1');

const blok1_stage1 = qE('#blok1_stage1');
const p_blok2_stage1 = qE('#p_blok2_stage1');


const stage2 = qE('#stage2');
const substage2 = qE('#substage2');

const spysok = qE('#spysok');
const pusto_spysok = qE('#pusto_spysok');


const blok1_stage2 = qE('#blok1_stage2');
const p1_stage2 = qE('#p1_stage2');
const blok2_stage2 = qE('#blok2_stage2');
const p2_stage2 = qE('#p2_stage2');
const p3_stage2 = qE('#p3_stage2');
const p4_stage2 = qE('#p4_stage2');




const stage3_1 = qE('#stage3_1');
const substage3_1 = qE('#substage3_1');
const blok1_stage3_1 = qE('#blok1_stage3_1');
const p1_stage3_1 = qE('#p1_stage3_1');
const blok2_stage3_1 = qE('#blok2_stage3_1');


const tip1_blok2_stage3_1 = qE('#tip1_blok2_stage3_1');
const div1_tip1 = qE('#div1_tip1');
const div2_tip1 = qE('#div2_tip1');
const div3_tip1 = qE('#div3_tip1');
const btn1_karusel = qE('#btn1_karusel');
const btn2_karusel = qE('#btn2_karusel');
const btn3_karusel = qE('#btn3_karusel');

const tip2_blok2_stage3_1 = qE('#tip2_blok2_stage3_1');
const div1_tip2 = qE('#div1_tip2');
const div2_tip2 = qE('#div2_tip2');
const div3_tip2 = qE('#div3_tip2');


const tip3_blok2_stage3_1 = qE('#tip3_blok2_stage3_1');
const div1_tip3 = qE('#div1_tip3');
const div2_tip3 = qE('#div2_tip3');
const div3_tip3 = qE('#div3_tip3');

const div4_tip1 = qE('#div4_tip1');
const div4_tip2 = qE('#div4_tip2');
const div4_tip3 = qE('#div4_tip3');

const span_karusel1 = document.querySelectorAll('.span_karusel1');
const span_karusel2 = document.querySelectorAll('.span_karusel2');
const span_karusel3 = document.querySelectorAll('.span_karusel3');

const arrow = document.querySelectorAll('.arrow');

const pusto_blok2_stage3_1 = qE('#pusto_blok2_stage3_1');




const stage3_2 = qE('#stage3_2');
const substage3_2 = qE('#substage3_2');

const blok1_stage3_2 = qE('#blok1_stage3_2');
const title1_stage3_2 = qE('#title1_stage3_2');
const title2_stage3_2 = qE('#title2_stage3_2');
const blok2_stage3_2 = qE('#blok2_stage3_2');
const grafik = qE('#grafik');
const zmist_grafik = qE('#zmist_grafik');

const spilne = qE('#spilne');
const pusto_spilne = qE('#pusto_spilne');


const blok3_stage3_2 = qE('#blok3_stage3_2');
const tip1_blok3_stage3_2 = qE('#tip1_blok3_stage3_2');
const blok1_tip1_blok3_stage3_2 = qE('#blok1_tip1_blok3_stage3_2');
const blok2_tip1_blok3_stage3_2 = qE('#blok2_tip1_blok3_stage3_2');
const blok3_tip1_blok3_stage3_2 = qE('#blok3_tip1_blok3_stage3_2');
const blyskavka = qE('#blyskavka');
const zmist_blyskavka = qE('#zmist_blyskavka');
const tip2_blok3_stage3_2 = qE('#tip2_blok3_stage3_2');
const blok1_tip2_blok3_stage3_2 = qE('#blok1_tip2_blok3_stage3_2');
const blok2_tip2_blok3_stage3_2 = qE('#blok2_tip2_blok3_stage3_2');
const blok3_tip2_blok3_stage3_2 = qE('#blok3_tip2_blok3_stage3_2');
const vidsotok = qE('#vidsotok');
const zmist_vidsotok = qE('#zmist_vidsotok');

const blok4_stage3_2 = qE('#blok4_stage3_2');
const lampa = qE('#lampa');
const zmist_lampa = qE('#zmist_lampa');

const pusto4 = qE('#pusto4');





const stage3_3 = qE('#stage3_3');
const substage3_3 = qE('#substage3_3');
const p_substage3_3 = qE('#p_substage3_3');
const block_substage3_3 = qE('#block_substage3_3');
const block1_block_substage3_3 = qE('#block1_block_substage3_3');
const block1_block1_block_substage3_3 = qE('#block1_block1_block_substage3_3');
const mishok = qE('#mishok');
const mishok_content = qE('#mishok_content');
const block2_block1_block_substage3_3 = qE('#block2_block1_block_substage3_3');
const block2_block_substage3_3 = qE('#block2_block_substage3_3');





const stage4 = qE('#stage4');
const substage4 = qE('#substage4');

const block1_substage4 = qE('#block1_substage4');
const p1_block1_substage4 = qE('#p1_block1_substage4');
const p2_block1_substage4 = qE('#p2_block1_substage4');

const block2_substage4 = qE('#block2_substage4');
const input_block2_substage4 = qE('#input_block2_substage4');
const p1_block2_substage4 = qE('#p1_block2_substage4');

const block3_substage4 = qE('#block3_substage4');
const div_block3_substage4 = qE('#div_block3_substage4');
const icon_facebook = qE('#icon_facebook');
const facebook_content = qE('#facebook_content');
const p2_block3_substage4 = qE('#p2_block3_substage4');

const block4_substage4 = qE('#block4_substage4');





const stage5 = qE('#stage5');

const substage5 = qE('#substage5');


const block1_substage5 = qE('#block1_substage5');
const p1_block1_substage5 = qE('#p1_block1_substage5');
const p2_block1_substage5 = qE('#p2_block1_substage5');
const block2_substage5 = qE('#block2_substage5');
const confeti = qE('#confeti');

const block_galka = qE('#block_galka');
const block3_substage5 = qE('#block3_substage5');

const icon_konvert = qE('#icon_konvert');
const konvert_content = qE('#konvert_content');





const footer = qE('footer');
const back_next = qE('#back_next');
const back_btn = qE('#back_btn');
const next_btn = qE('#next_btn');

var wW = window.innerWidth;
var wH = window.innerHeight;

var isDisabled = false;
var FlagClick = 0;
var opacityValue;
var CountPreferences = 0;
var FlagResize = 0;

var IdInterval;
var IdIntervalArrow;
var nomerArrow = 1;


var KadrArr1 = [
	"./images/karusel_1_1.png",
	"./images/karusel_1_2.png",
	"./images/karusel_1_3.png"
];
var KadrArr2 = [
	"./images/karusel_2_1.png",
	"./images/karusel_2_2.png",
	"./images/karusel_2_3.png"
];
var KadrArr3 = [
	"./images/karusel_3_1.png",
	"./images/karusel_3_2.png",
	"./images/karusel_3_3.png"
];
/*
,
	"./images/karusel_1_4.png",
	"./images/karusel_1_5.png"
*/

var PraporClick1 = 0;
var PraporClick2 = 0;
var PraporClick3 = 0;
const karusel1 = new Karusel('#div3_tip1', '100%', '100%', KadrArr1);
const karusel2 = new Karusel('#div3_tip2', '100%', '100%', KadrArr2);
const karusel3 = new Karusel('#div3_tip3', '100%', '100%', KadrArr3);

var PraporSkip = 0;

var LastIndicator = `#image1`;

var klac = 0;
var startPositionX;
var startPositionY;


var mainstartPositionX;
var mainstartPositionY;


//'358px', '287px',


// ------------------------------------------------------------
function isMobileDevice() { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); }
// -----------------------------------------------------------------------------
const SetPageSize = ()=>{
	let vIndicators;


	if (wW >= wH) {
		container.style.width = `89%`;
		if (isMobileDevice()) {
			container.style.width = `100%`;
		}
		header.style.height = `${58 / (container.offsetHeight / 100)}%`;
	} else {
		container.style.width = `100%`;
		header.style.height = `${38 / (container.offsetHeight / 100)}%`;
	}

	if (isMobileDevice()) {
		label.style.width = `89.44px`;
		label.style.height = `20px`;
		if (wW >= wH) {
			indicators.style.marginTop = `2.5%`;
			footer.style.height = `65px`;

		} else {

			indicators.style.marginTop = `7.0%`;
			footer.style.height = `68px`;

		}
		indicators.style.width = `325px`;

		//indicators.style.background = `url('./images/ind_1_mob.svg') center/cover no-repeat`;
		vIndicators = 'indicators_mob.svg';

		// -----------------------------------------------------------------------------------
		blok1_stage1.style.marginTop = '7.7%';
		p_blok2_stage1.style.marginTop = '9%';
		// -----------------------------------------------------------------------------------

	} else {
		label.style.width = `162px`;
		label.style.height = `36px`;
		indicators.style.marginTop = `2.5%`;
		indicators.style.width = `390px`;
		vIndicators = 'indicators.svg';

		footer.style.height = `58px`;

		// -----------------------------------------------------------------------------------
		blok1_stage1.style.marginTop = '13%';
		p_blok2_stage1.style.marginTop = '13%';
		// -----------------------------------------------------------------------------------

	}

	const xhr = new XMLHttpRequest();
	xhr.open('GET', `./images/${vIndicators}`, true);
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			const svgContent = xhr.responseText;
			indicators.innerHTML = svgContent;
			image_use = qE('#image_use');
			image_use.setAttribute('xlink:href', LastIndicator);
		}
	};
	xhr.send();


	xhr_btn = new XMLHttpRequest();
	xhr_btn.open('GET', `./images/next_btn.svg`, true);
	xhr_btn.onreadystatechange = function () {
		if (xhr_btn.readyState === 4 && xhr_btn.status === 200) {
/*
			next_btn.innerHTML = xhr_btn.responseText;
			btn_use = qE('#btn_use');
			btn_use.setAttribute('xlink:href', `#btn2s4`);
*/
		}
	};
	xhr_btn.send();




	main.style.height = `${container.offsetHeight - header.offsetHeight - footer.offsetHeight}px`;

 	// -----------------------------------------------------------------------------------
	stage1.style.width = `${indicators.offsetWidth}px`;

}
// -------------------------------------------------------------------------------------------------------------------
const fadeIn = (blok)=>{
	FlagClick = 1;

	let myBlock = blok;
	let computedStyle = window.getComputedStyle(myBlock);
	opacityValue = computedStyle.getPropertyValue('opacity');

	if (opacityValue < 1) {
		myBlock.classList.remove('hovanka');
		myBlock.classList.add('pokaz');
	}
	else {
		myBlock.classList.remove('pokaz');
		myBlock.classList.add('hovanka');
	}
	setTimeout(() => {
		FlagClick = 0;
	}, 1000);
	FlagResize == 0;
}

// -----------------------------------------------------------------------------------------------------------------------------
function toggleCheckedState(mitka, klas) {
	let radioInput = mitka.querySelector('input[type="radio"]');
	document.querySelectorAll('.' + klas).forEach(function (element) {
		element.classList.remove('checked');
	});

	if (radioInput.checked) {
		mitka.classList.add('checked');
	} else {
		mitka.classList.remove('checked');
	}
}

function StateCheckBox(mitka, klas) {
	let checkBoxInput = mitka.querySelector('input[type="checkbox"]');

	if (checkBoxInput.checked) {
		mitka.classList.add('checked');
	} else {
		mitka.classList.remove('checked');
	}
}

// -----------------------------------------------------------------------------------------------------------------------------
const OprosClick = () => {
	gE('next_btn').style.background = `url('./images/next1b.svg') center/cover no-repeat`;
	isDisabled = true;
}
// -----------------------------------------------------------------------------------------------------------------------------
function blinkText(blinkingElement) {
	const toggleColor = () => blinkingElement.style.color = (blinkingElement.style.color === `rgb(0, 145, 215)`) ? 'red' : `rgb(0, 145, 215)`;
	let intervalId = setInterval(toggleColor, 100);
	setTimeout(() => {
		clearInterval(intervalId);
		blinkingElement.style.color = `rgba(0, 145, 215)`;
	}, 1000);
}
// ------------------------------------------------------------------------------------------------------------------------------
const NetworkClick = (el) => {
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

//	console.log(selectedModels.length); // ["model1", "model2"]

	if (sl > 0) {
		gE('p3_stage2').style.color = `rgba(0, 145, 215, 1)`;
	} else {
		gE('p3_stage2').style.color = `rgba(255, 86, 12, 1)`;
	}

	//console.log(el);

	if (sl > 6) {
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
		btn_use.setAttribute('xlink:href', `#btn2b4`);

		//gE('next_btn').style.background = `url('./images/next2b.svg') center/cover no-repeat`;

		isDisabled = true;
	} else {

		btn_use.setAttribute('xlink:href', `#btn2s4`);

		//gE('next_btn').style.background = `url('./images/next2s.svg') center/cover no-repeat`;

		isDisabled = false;
	}
}
// ---------------------------------------------------------------------------------------------------------------------------------



// ---------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------
const AutoHod = () => {
	gE('opros1').click();
	setTimeout(() => {
		gE('next_btn').click();//На другу сторінку
		setTimeout(() => {
			gE('network1').click();
			gE('model1').click();
			gE('condition1').click();
			gE('next_btn').click();//На сторінку 3_1
			setTimeout(() => {
				gE('next_btn').click();//На сторінку 3_2
				setTimeout(() => {
//					gE('next_btn').click();//На сторінку 3_3
					setTimeout(() => {
//						gE('next_btn').click();//На сторінку 4
							setTimeout(() => {
								input_block2_substage4.value = 'Any content';
								PraporSkip = 1;
								setTimeout(() => {
//									gE('next_btn').click();//На сторінку 5
								}, 100);
							}, 2000);
						}, 2000);
				}, 2000);
			}, 2000);
		}, 2000);
	}, 2000);
}

// ---------------------------------------------------------------------------------------------------------------------------------

window.onload = () => {
	back_btn.style.display = `none`;
	next_btn.style.width = `326px`;

	SetPageSize();
	fadeIn(stage1);

//AutoHod();

	setInterval(() => {
		//console.log(spysok.offsetHeight);
		if (pusto_spysok.offsetHeight != spysok.offsetHeight){
			pusto_spysok.style.top = `${spysok.offsetTop}px`;
			pusto_spysok.style.height = `${spysok.offsetHeight}px`;
		}


		if (pusto_spilne.offsetHeight != stage3_2.offsetHeight) {
			pusto_spilne.style.top = `${stage3_2.offsetTop-1}px`;
			pusto_spilne.style.height = `${stage3_2.offsetHeight+1}px`;
		}


		if (spilne.offsetHeight > stage3_2.offsetHeight ){
			stage3_2.style.overflowY = 'auto';
		} else {
			stage3_2.style.overflowY = 'hidden';
		}



		if (pusto_blok2_stage3_1.offsetHeight != blok2_stage3_1.offsetHeight) {
			pusto_blok2_stage3_1.style.top = `${blok2_stage3_1.offsetTop}px`;
			pusto_blok2_stage3_1.style.height = `${blok2_stage3_1.offsetHeight}px`;
		}


		//console.log(tip1_blok2_stage3_1.offsetHeight + ' '+ blok2_stage3_1.offsetHeight);

		if (tip1_blok2_stage3_1.offsetHeight > blok2_stage3_1.offsetHeight ) {
			pusto_blok2_stage3_1.style.display = 'block';
			blok2_stage3_1.style.overflowY = 'auto';
		} else {
			pusto_blok2_stage3_1.style.display = 'none';
			blok2_stage3_1.style.overflowY = 'hidden';
		}








	}, 250);



}
window.onresize = () => {
	SetPageSize();
}



/* -------------------------------------------------------- BACK BUTTON ----------------------------------------------  */
back_btn.onclick = () => {
	if (FlagClick == 0) {
		if (window.getComputedStyle(gE('stage2')).display == 'flex') {// Show STAGE1 after click on STAGE2

			//indicators.style.background = (isMobileDevice()) ? `url('./images/ind_1_mob.svg') center/cover no-repeat` : `url('./images/ind_1.svg') center/cover no-repeat`;

			LastIndicator = `#image1`;
			image_use.setAttribute('xlink:href', LastIndicator);

			fadeIn(stage2);
			setTimeout(() => {
				stage2.style.display = 'none';
				stage1.style.display = 'flex';

				fadeIn(stage1);
				isDisabled = true;
				back_btn.style.display = 'none';
				next_btn.style.width = `326px`;
				next_btn.style.background = `url('./images/next1b.svg') center/cover no-repeat`;
				next_btn.innerHTML = '';



			}, 500);
		}
		else if (window.getComputedStyle(gE('stage3_1')).display == 'flex') {// Show STAGE2 after click on STAGE3_1
			//indicators.style.background = (isMobileDevice()) ? `url('./images/ind_2_mob.svg') center/cover no-repeat` : `url('./images/ind_2.svg') center/cover no-repeat`;
			LastIndicator = `#image2`;
			image_use.setAttribute('xlink:href', LastIndicator);

			fadeIn(stage3_1);
			setTimeout(() => {
				stage3_1.style.display = 'none';
				stage2.style.display = 'flex';
				fadeIn(stage2);

				//				next_btn.style.background = `url('./images/next2b.svg') center/cover no-repeat`;
				btn_use.setAttribute('xlink:href', `#btn2b4`);

				clearInterval(IdInterval);
				clearInterval(IdIntervalArrow);


			}, 500);
		}
		else if (window.getComputedStyle(gE('stage3_2')).display == 'block') {// Show STAGE3_1 after click on STAGE3_2
			//indicators.style.background = (isMobileDevice()) ? `url('./images/ind_3_1_mob.svg') center/cover no-repeat` : `url('./images/ind_3_1.svg') center/cover no-repeat`;
			LastIndicator = `#image3_1`;
			image_use.setAttribute('xlink:href', LastIndicator);

			fadeIn(stage3_2);
			setTimeout(() => {
				stage3_2.style.display = 'none';
				stage3_1.style.display = 'flex';
				fadeIn(stage3_1);
				//next_btn.style.background = `url('./images/next3_1.svg') center/cover no-repeat`;
				btn_use.setAttribute('xlink:href', `#btn3_1`);

			}, 500);
		}
		else if (window.getComputedStyle(gE('stage3_3')).display == 'flex') {// Show STAGE3_2 after click on STAGE3_3
			//indicators.style.background = (isMobileDevice()) ? `url('./images/ind_3_2_mob.svg') center/cover no-repeat` : `url('./images/ind_3_2.svg') center/cover no-repeat`;
			LastIndicator = `#image3_2`;
			image_use.setAttribute('xlink:href', LastIndicator);
			fadeIn(stage3_3);
			setTimeout(() => {
				stage3_3.style.display = 'none';

				stage3_2.style.display = 'block';

				//stage3_2.style.display = 'flex';


				fadeIn(stage3_2);
				//next_btn.style.background = `url('./images/next3_2.svg') center/cover no-repeat`;
				btn_use.setAttribute('xlink:href', `#btn3_2`);

				if (isMobileDevice()) {
					IdIntervalArrow = setInterval(() => {
						arrow.forEach((strilka) => {
							strilka.style.background = `url('./images/arrow${nomerArrow}.png') center/contain no-repeat`;
						});
						nomerArrow = (nomerArrow < 4) ? nomerArrow = nomerArrow + 1 : nomerArrow = 1;
					}, 400);
				}
			}, 500);
		}
		else if (window.getComputedStyle(gE('stage4')).display == 'flex') {// Show STAGE3_3 after click on STAGE4
			//indicators.style.background = (isMobileDevice()) ? `url('./images/ind_3_3_mob.svg') center/cover no-repeat` : `url('./images/ind_3_3.svg') center/cover no-repeat`;
			LastIndicator = `#image3_3`;
			image_use.setAttribute('xlink:href', LastIndicator);
			fadeIn(stage4);
			setTimeout(() => {
				stage4.style.display = 'none';
				stage3_3.style.display = 'flex';
				fadeIn(stage3_3);
				//next_btn.style.background = `url('./images/next3_3.svg') center/cover	no-repeat`;
				btn_use.setAttribute('xlink:href', `#btn3_3`);
			}, 500);
		}
		else if (window.getComputedStyle(gE('stage5')).display == 'flex') {// Show STAGE4 after click on STAGE5
			//indicators.style.background = (isMobileDevice()) ? `url('./images/ind_4_mob.svg') center/cover no-repeat` : `url('./images/ind_4.svg') center/cover no-repeat`;
			LastIndicator = `#image4`;
			image_use.setAttribute('xlink:href', LastIndicator);

			fadeIn(stage5);
			setTimeout(() => {
				stage5.style.display = 'none';
				stage4.style.display = 'flex';
				fadeIn(stage4);
				if (PraporSkip == 0) {
					input_block2_substage4.focus();
					//next_btn.style.background = `url('./images/next4s.svg') center/cover no-repeat`;
					btn_use.setAttribute('xlink:href', `#btn2s4`);
				} else {
					//next_btn.style.background = `url('./images/next4b.svg') center/cover no-repeat`;
					if (input_block2_substage4.value == ''){
						PraporSkip = 0;
						btn_use.setAttribute('xlink:href', `#btn2s4`);
					}else{
						btn_use.setAttribute('xlink:href', `#btn2b4`);
					}


				}
				confeti.style.transition = "transform 0.1s ease-in-out";
				confeti.style.transform = "scale(0.1)";
			}, 500);
		}
	}
}
// ------------------------------------------ NEXT BUTTON ------------------------------------------
next_btn.onclick = () => {

	if (FlagClick == 0) {
		if (isDisabled === true) {
			if (window.getComputedStyle(gE('stage1')).display == 'flex') {// Show STAGE2 after click on STAGE1
				//indicators.style.background = (isMobileDevice()) ? `url('./images/ind_2_mob.svg') center/cover no-repeat` : `url('./images/ind_2.svg') center/cover no-repeat`;
				LastIndicator = `#image2`;
				image_use.setAttribute('xlink:href', LastIndicator);

				fadeIn(stage1);
				setTimeout(() => {
					stage1.style.display = 'none';
					back_btn.style.display = 'flex';
					back_btn.style.display = `flex`;
					back_btn.style.width = `99px`;
					stage2.style.display = 'flex';


					next_btn.style.width = `217px`;

					//next_btn.style.background = `url('./images/next2b.svg') center/cover no-repeat`;

					next_btn.style.background = '';
					next_btn.innerHTML = xhr_btn.responseText;
					btn_use = qE('#btn_use');
					btn_use.setAttribute('xlink:href', `#btn2s4`);


					fadeIn(stage2);
					isDisabled = false;
					back_next.style.backgroundColor = `rgba(255, 255, 255, 0)`;

					NetworkClick();

					//if (CountPreferences >= 3) { OprosClick(); }

					spysok.style.height = `${substage2.offsetHeight}px`;

					p3_stage2.style.marginLeft = '25px';
					p4_stage2.style.marginTop = '30px';

					if (isMobileDevice()) {
						blok1_stage2.style.marginTop = '3.8dvh';
						p1_stage2.style.marginTop = `1.1dvh`;

						//blok2_stage2.style.marginTop = `5dvh`;

						p2_stage2.style.marginTop = `4dvh`;
						p2_stage2.style.width = '326px';

						spysok.style.paddingTop = `0.05dvh`;

						//const spysokAfter = spysok.querySelector('::after');						console.log(spysokAfter);

						//spysokAfter.style.height = '1000px';


					} else {

					}




				}, 500);
			}
			else if (window.getComputedStyle(gE('stage2')).display == 'flex') {// Show STAGE3_1 after click on STAGE2
				//indicators.style.background = (isMobileDevice()) ? `url('./images/ind_3_1_mob.svg') center/cover no-repeat` : `url('./images/ind_3_1.svg') center/cover no-repeat`;
				LastIndicator = `#image3_1`;
				image_use.setAttribute('xlink:href', LastIndicator);

				fadeIn(stage2);
				setTimeout(() => {
					stage2.style.display = 'none';
					stage3_1.style.display = 'flex';
					fadeIn(stage3_1);

					//next_btn.style.background = `url('./images/next3_1.svg') center/cover no-repeat`;
					btn_use.setAttribute('xlink:href', `#btn3_1`);

//					stage3_1.style.width = `81%`;

					let krapka1 = 1;
					let krapka2 = 1;
					let krapka3 = 1;

				/*
					IdInterval = setInterval(() => {
						if (PraporClick1 == 0) {
							span_karusel1[0].style.background = `url('./images/point_s.svg') center/cover no-repeat`;
							span_karusel1[1].style.background = `url('./images/point_s.svg') center/cover no-repeat`;
							span_karusel1[2].style.background = `url('./images/point_s.svg') center/cover no-repeat`;
							span_karusel1[krapka1].style.background = `url('./images/point_b.svg') center/cover no-repeat`;
							karusel1.toLeft('transform 0.5s ease-in-out', 500);
							if (krapka1 == 2) {
								krapka1 = 0;
							}	else {
								krapka1++;
							}
						}

						if (PraporClick2 == 0) {
							span_karusel2[0].style.background = `url('./images/point_s.svg') center/cover no-repeat`;
							span_karusel2[1].style.background = `url('./images/point_s.svg') center/cover no-repeat`;
							span_karusel2[2].style.background = `url('./images/point_s.svg') center/cover no-repeat`;
							span_karusel2[krapka2].style.background = `url('./images/point_b.svg') center/cover no-repeat`;
							karusel2.toLeft('transform 0.75s ease-in-out', 750);
							if (krapka2 == 2) {
								krapka2 = 0;
							} else {
								krapka2++;
							}
						}

						if (PraporClick3 == 0) {
							span_karusel3[0].style.background = `url('./images/point_s.svg') center/cover no-repeat`;
							span_karusel3[1].style.background = `url('./images/point_s.svg') center/cover no-repeat`;
							span_karusel3[2].style.background = `url('./images/point_s.svg') center/cover no-repeat`;
							span_karusel3[krapka3].style.background = `url('./images/point_b.svg') center/cover no-repeat`;
							karusel3.toLeft('transform 1.0s ease-in-out', 1000);
							if (krapka3 == 2) {
								krapka3 = 0;
							} else {
								krapka3++;
							}
						}

					}, 2500);
				*/

					if (isMobileDevice()) {
						substage3_1.style.width = `100%`;
						blok1_stage3_1.style.marginTop = '20px';
						p1_stage3_1.style.marginTop = '10px';
						p1_stage3_1.style.fontSize = `16px`;
						//blok2_stage3_1.style.width = `326px`;
						blok2_stage3_1.style.flexDirection = `column`;
						blok2_stage3_1.style.flexWrap = `nowrap`;
						blok2_stage3_1.style.justifyContent = `flex-start`;
						blok2_stage3_1.style.alignItems = `center`;
						blok2_stage3_1.style.gap = `10px`;
						blok2_stage3_1.style.width = `auto`;
						blok2_stage3_1.style.height = `auto`;

						// ---------------------------------------------------------------------------
						tip1_blok2_stage3_1.style.width = `315px`;
						tip1_blok2_stage3_1.style.margin = `0`;
						tip1_blok2_stage3_1.style.padding = `16px 13px 13px 13px`;
							div1_tip1.style.margin = `0`;
							div2_tip1.style.margin = `-25px 0 0 0px`;
							div3_tip1.style.margin = `10px 0 0 0px`;
							div3_tip1.style.width = `290px`;
							div3_tip1.style.height = `auto`;
						// ---------------------------------------------------------------------------

						// ---------------------------------------------------------------------------
						tip2_blok2_stage3_1.style.width = `315px`;
						tip2_blok2_stage3_1.style.margin = `0`;
						tip2_blok2_stage3_1.style.padding = `16px 13px 13px 13px`;
							div1_tip2.style.margin = `0`;
							div2_tip2.style.margin = `-25px 0 0 0px`;
							div3_tip2.style.margin = `10px 0 0 0px`;
							div3_tip2.style.width = `290px`;
							div3_tip2.style.height = `auto`;
						// ---------------------------------------------------------------------------

						// ---------------------------------------------------------------------------
						tip3_blok2_stage3_1.style.width = `315px`;
						tip3_blok2_stage3_1.style.margin = `0 0 40px 0`;
						tip3_blok2_stage3_1.style.padding = `16px 13px 13px 13px`;
							div1_tip3.style.margin = `0`;
							div2_tip3.style.margin = `-25px 0 0 0px`;
							div3_tip3.style.margin = `10px 0 0 0px`;
							div3_tip3.style.width = `290px`;
							div3_tip3.style.height = `auto`;
						// ---------------------------------------------------------------------------

						div4_tip1.style.height = `auto`;
						div4_tip2.style.height = `auto`;
						div4_tip3.style.height = `auto`;


						IdIntervalArrow = setInterval(() => {
							arrow.forEach((strilka) => {
								strilka.style.background = `url('./images/arrow${nomerArrow}.png') center/contain no-repeat`;
							});
							nomerArrow = (nomerArrow < 4) ? nomerArrow = nomerArrow + 1 : nomerArrow = 1;
						}, 400);

					} else {

						// --------------------------------------------------------------------
						let firstRowElements = 0;
						let secondRowElements = 0;
						let elements = document.querySelectorAll('.bloky');
						for (let i = 0; i < elements.length; i++) {
							const elementRect = elements[i].getBoundingClientRect();
							if (elementRect.top === elements[0].getBoundingClientRect().top) {
								firstRowElements++;
							} else {
								secondRowElements++;
							}
						}
						let vR1 = 10;
						let vR2 = 10;
						let vR3 = 10;
						document.querySelectorAll('.p_div4_tip1').forEach((radok)=> {vR1 += radok.offsetHeight;});
						document.querySelectorAll('.p_div4_tip2').forEach((radok) => { vR2 += radok.offsetHeight; });
						document.querySelectorAll('.p_div4_tip3').forEach((radok) => { vR3 += radok.offsetHeight; });

						div4_tip1.style.marginBottom = `${15}px`;
						div4_tip2.style.marginBottom = `${15}px`;
						div4_tip3.style.marginBottom = `${15}px`;

						const maxN = Math.max(vR1, vR2, vR3);

						if (firstRowElements == 3){
							div4_tip1.style.height = `${maxN}px`;
							div4_tip2.style.height = `${maxN}px`;
							div4_tip3.style.height = `${maxN}px`;
						}

						if (firstRowElements == 2) {
							div4_tip1.style.height = `${maxN}px`;
							div4_tip2.style.height = `${maxN}px`;
						}

						if (firstRowElements == 1) {
							div4_tip1.style.height = `auto`;
							div4_tip2.style.height = `auto`;
							div4_tip3.style.height = `auto`;
						}
						// --------------------------------------------------------------------
					}

				}, 500);
			}
			else if (window.getComputedStyle(gE('stage3_1')).display == 'flex') {// Show STAGE3_2 after click on STAGE3_1
				clearInterval(IdInterval);
				//indicators.style.background = (isMobileDevice()) ? `url('./images/ind_3_2_mob.svg') center/cover no-repeat` : `url('./images/ind_3_2.svg') center/cover no-repeat`;
				LastIndicator = `#image3_2`;
				image_use.setAttribute('xlink:href', LastIndicator);

				fadeIn(stage3_1);
				setTimeout(() => {
					stage3_1.style.display = 'none';
					//stage3_2.style.display = 'flex';

					stage3_2.style.display = 'block';

					//stage3_2.style.display = 'flex';



					fadeIn(stage3_2);

					//next_btn.style.background = `url('./images/next3_2.svg') center/cover no-repeat`;
					btn_use.setAttribute('xlink:href', `#btn3_2`);

				// --------------------------------------------------------------------------------------------------------------------
					if (isMobileDevice()) {

//						blok1_stage3_2.style.border = `1px solid red`;

						stage3_2.style.overflowY = `scroll`;

						substage3_2.style.width = `375px`;
						substage3_2.style.marginLeft = `8px`;

						substage3_2.style.overflowY = `scroll`;

						//substage3_2.style.height = `572px`;
						substage3_2.style.justifyContent = `flex-start`;

						blok1_stage3_2.style.marginTop = `0px`

						blok1_stage3_2.style.marginBottom = `6px`;
						blok1_stage3_2.style.width = `326px`; blok1_stage3_2.style.height = `150px`;
						blok1_stage3_2.style.justifyContent = `flex-start`;

						title1_stage3_2.style.width = `326px`; title1_stage3_2.style.height = `65px`;
						title1_stage3_2.style.textAlign = 'left';

						title2_stage3_2.style.width = `326px`; title2_stage3_2.style.height = `64px`;
						title2_stage3_2.style.fontFamily = `Roboto`;
						title2_stage3_2.style.fontSize = `14px`;
						title2_stage3_2.style.fontWeight = `500`;
						title2_stage3_2.style.lineHeight = `16px`;
						title2_stage3_2.style.letterSpacing = `0em`;
						title2_stage3_2.style.textAlign = `left`;


						block1_block1_block_substage3_3.style.width = `300px`;


						blok2_stage3_2.style.marginTop = `10px`;
						blok2_stage3_2.style.padding = `10px`;

						blok2_stage3_2.style.width = `326px`;
						blok2_stage3_2.style.height = `48px`;

						grafik.style.width = `20px`; grafik.style.height = `20px`;
						zmist_grafik.style.width = `264px`; zmist_grafik.style.height = `32px`;

						spilne.style.marginTop = `22px`;
						spilne.style.width = `326px`;
						spilne.style.height = `550px`;

						//spilne.style.overflowY = `scroll`;
						spilne.style.overflowX = 'hidden';

						//spilne.style.margin = `0 auto`;
						//spilne.style.justifySelf = `center`;


						//spilne.style.paddingBottom = `50dvmin`;

						blok3_stage3_2.style.marginTop = `15px`;

						blok3_stage3_2.style.width = `326px`;
						blok3_stage3_2.style.height = `auto`;
						blok3_stage3_2.style.alignItems = `flex-start`;
						blok3_stage3_2.style.flexWrap = `wrap`;
						blok3_stage3_2.style.gap = `10px`;


						tip1_blok3_stage3_2.style.width = `326px`; tip1_blok3_stage3_2.style.height = `auto`;
						tip1_blok3_stage3_2.style.borderRadius = `6px`;
						tip1_blok3_stage3_2.style.padding = `5% 5% 5% 5%`;

						blok1_tip1_blok3_stage3_2.style.width = `294px`; blok1_tip1_blok3_stage3_2.style.height = `19px`;
						blok2_tip1_blok3_stage3_2.style.width = `100%`; blok2_tip1_blok3_stage3_2.style.height = `195px`;

						blok3_tip1_blok3_stage3_2.style.width = `294px`; blok3_tip1_blok3_stage3_2.style.height = `auto`;
						blyskavka.style.width = `24px`; blyskavka.style.height = `24px`;
						zmist_blyskavka.style.width = `258px`; zmist_blyskavka.style.height = `auto`;

						tip2_blok3_stage3_2.style.width = `326px`; tip2_blok3_stage3_2.style.height = `auto`;
						tip2_blok3_stage3_2.style.borderRadius = `6px`;
						tip2_blok3_stage3_2.style.padding = `5% 5% 5% 5%`;

						blok1_tip2_blok3_stage3_2.style.width = `294px`; blok1_tip2_blok3_stage3_2.style.height = `19px`;
						blok2_tip2_blok3_stage3_2.style.width = `100%`; blok2_tip2_blok3_stage3_2.style.height = `195px`;

						blok3_tip2_blok3_stage3_2.style.width = `294px`; blok3_tip2_blok3_stage3_2.style.height = `auto`;
						vidsotok.style.width = `24px`; vidsotok.style.height = `24px`;
						zmist_vidsotok.style.width = `258px`; zmist_vidsotok.style.height = `auto`;

						blok4_stage3_2.style.marginTop = `20px`;
						blok4_stage3_2.style.marginBottom = `100px`;

						blok4_stage3_2.style.width = `326px`; blok4_stage3_2.style.height = `48px`;
						lampa.style.width = `24px`; lampa.style.height = `24px`;
						zmist_lampa.style.width = `260px`; zmist_lampa.style.height = `32px`;



						substage3_2.style.margin = `0 auto`;



					} else {//Desktop

						blok1_stage3_2.style.marginTop = `14px`

						blok1_stage3_2.style.marginBottom = `6px`;

						blok2_stage3_2.style.marginTop = `10px`;
						blok2_stage3_2.style.padding = `10px`;

						blok3_stage3_2.style.marginTop = `20px`;



					}
// ---------------------------------------------------------------------------------------------------------------------
				}, 500);
			}
			else if (window.getComputedStyle(gE('stage3_2')).display == 'block') {// Show STAGE3_3 after click on STAGE3_2
				clearInterval(IdIntervalArrow);

				//indicators.style.background = (isMobileDevice()) ? `url('./images/ind_3_3_mob.svg') center/cover no-repeat` : `url('./images/ind_3_3.svg') center/cover no-repeat`;
				LastIndicator = `#image3_3`;
				image_use.setAttribute('xlink:href', LastIndicator);

				fadeIn(stage3_2);

				setTimeout(() => {
					stage3_2.style.display = 'none';
					stage3_3.style.display = 'flex';
					fadeIn(stage3_3);

					//next_btn.style.background = `url('./images/next3_3.svg') center/cover no-repeat`;
					btn_use.setAttribute('xlink:href', `#btn3_3`);

					// --------------------------------------------------------------------------------------------------------------------
					if (isMobileDevice()) {
						p_substage3_3.style.marginTop = `25px`;
						block_substage3_3.style.marginTop = `25px`;
						block_substage3_3.style.width = `326px`;
						block_substage3_3.style.height = `403px`;
						block2_block1_block_substage3_3.style.width = `294px`;
						block2_block1_block_substage3_3.style.height = `48px`;
						block2_block_substage3_3.marginTop = `30px`;
						block2_block_substage3_3.style.width = `252px`;
						block2_block_substage3_3.style.height= `283px`;

					} else {
					}
					// --------------------------------------------------------------------------------------------------------------------
				}, 500);
			}
			else if (window.getComputedStyle(gE('stage3_3')).display == 'flex') {// Show STAGE4 after click on STAGE3_3
				//indicators.style.background = (isMobileDevice()) ? `url('./images/ind_4_mob.svg') center/cover no-repeat` : `url('./images/ind_4.svg') center/cover no-repeat`;
				LastIndicator = `#image4`;
				image_use.setAttribute('xlink:href', LastIndicator);

				fadeIn(stage3_3);
				setTimeout(() => {
					stage3_3.style.display = 'none';
					stage4.style.display = 'flex';
					fadeIn(stage4);

					if (PraporSkip == 0){
						input_block2_substage4.focus();
						//next_btn.style.background = `url('./images/next4s.svg') center/cover no-repeat`;
						btn_use.setAttribute('xlink:href', `#btn2s4`);

					} else {
						//next_btn.style.background = `url('./images/next4b.svg') center/cover no-repeat`;
						btn_use.setAttribute('xlink:href', `#btn2b4`);

					}
					// --------------------------------------------------------------------------------------------------------------------
					if (isMobileDevice()) {
						block1_substage4.style.marginTop = `25px`;
						p1_block1_substage4.style.width = `350px`;
						block2_substage4.style.marginTop = `5px`;
						block3_substage4.style.marginTop = `52px`;

					} else {
					}
					// --------------------------------------------------------------------------------------------------------------------
				}, 500);
			}
			else if (PraporSkip == 1 && window.getComputedStyle(gE('stage4')).display == 'flex') {// Show STAGE5 after click on STAGE4
				//indicators.style.background = (isMobileDevice()) ? `url('./images/ind_5_mob.svg') center/cover no-repeat` : `url('./images/ind_5.svg') center/cover no-repeat`;
				LastIndicator = `#image5`;
				image_use.setAttribute('xlink:href', LastIndicator);

				fadeIn(stage4);
				setTimeout(() => {
					stage4.style.display = 'none';
					stage5.style.display = 'flex';
					fadeIn(stage5);

					//next_btn.style.background = `url('./images/next5.svg') center/cover no-repeat`;
					btn_use.setAttribute('xlink:href', `#btn5`);


					confeti.style.transition = "transform 2s ease-in-out";
					confeti.style.transform = "scale(1.0)";
					// --------------------------------------------------------------------------------------------------------------------
					if (isMobileDevice()) {
						substage5.style.width = `390px`;
						block1_substage5.style.marginTop = '25px';
						block1_substage5.style.width = `340px`; block1_substage5.style.height = `153px`;
						p1_block1_substage5.style.width = `340px`; p1_block1_substage5.style.height = `69px`;
						p1_block1_substage5.style.fontSize = `20px`;
						p1_block1_substage5.style.lineHeight = `23px`;
						p2_block1_substage5.style.width = `340px`; p2_block1_substage5.style.height = `48px`;
						p2_block1_substage5.style.fontSize = `14px`;
						p2_block1_substage5.style.lineHeight = `16px`;

						block2_substage5.style.marginTop = '31px';


						block3_substage5.style.marginTop = '5px';
						block3_substage5.style.width = `326px`;	//block3_substage5.style.height = `888px`;
						block3_substage5.style.height = `auto`;

						konvert_content.style.width = `255px`;	//konvert_content.style.height = `72px`;//konvert_content.style.height = `max-content`;
						konvert_content.style.height = `auto`;


						konvert_content.style.fontSize = `12px`;
						konvert_content.style.lineHeight = `14px`;

						//konvert_content.style.border = '1px solid red';
					} else {
					}
					// --------------------------------------------------------------------------------------------------------------------
				}, 500);
			}
		}
	}
}
// ---------------------------------------------------------------------------------------------------------------
function trackMouseMovement(element, line_point, nomer_karusel, klas_karusel) {
	gE(element).addEventListener("mousedown", (event) => {
		event.stopPropagation();
		event.preventDefault();
		startPositionX = event.clientX;
	});
	//document.addEventListener("mousemove", (event) => {
	gE(element).addEventListener("mousemove", (event) => {
		let dn = 0;
		let nazva= '';
		event.stopPropagation();
		event.preventDefault();
		// Якщо ліва кнопка миші натиснута
		if (event.buttons & 1) {
			const deltaX = event.clientX - startPositionX;
			startPositionX = event.clientX;
			gE(line_point).dataset.delta = deltaX;
			if (deltaX < 0){
				nomer_karusel.toLeft('transform 0.5s ease-in-out', 500, ()=>{
					dn = parseInt(gE(line_point).dataset.nomer);
					dn = (dn >= klas_karusel.length) ? 1 : dn + 1;
					gE(line_point).dataset.nomer = `${dn}`;
					klas_karusel.forEach((nk) => { nk.style.background = `url('./images/point_s.svg') center/cover no-repeat`; });
					nazva = `span${dn}_${line_point}`;
					//console.log(nazva);
					gE(`span${dn}_${line_point}`).style.background = `url('./images/point_b.svg') center/cover no-repeat`;
				});
			}
			else
			if (deltaX > 0) {
				nomer_karusel.toRight('transform 0.5s ease-in-out', 500, () => {
					dn = parseInt(gE(line_point).dataset.nomer);
					dn = (dn <= 1) ? 3 : dn - 1;
					gE(line_point).dataset.nomer = `${dn}`;
					klas_karusel.forEach((nk) => { nk.style.background = `url('./images/point_s.svg') center/cover no-repeat`; });
					gE(`span${dn}_${line_point}`).style.background = `url('./images/point_b.svg') center/cover no-repeat`;
				});
			}
		}
	});

	gE(element).addEventListener("mouseup", (event) => {
		event.stopPropagation();
		event.preventDefault();
		startPositionX = undefined;
	});


// -----------------------------------------------------------------
	gE(element).addEventListener("touchstart", (event) => {
		event.stopPropagation();
		event.preventDefault();
		startPositionX = event.touches[0].clientX;
		startPositionY = event.touches[0].clientY;

	});

	gE(element).addEventListener("touchmove", (event) => {
		let dn = 0;
		let nazva = '';
		let goryzontZsuv = 0;
		event.stopPropagation();
		event.preventDefault();

		const deltaX = event.touches[0].clientX - startPositionX;
		startPositionX = event.touches[0].clientX;

		const deltaY = event.touches[0].clientY - startPositionY;
		startPositionY = event.touches[0].clientY;

		gE(line_point).dataset.delta = deltaX;
		if (deltaX < -10) {
			goryzontZsuv = 1;
			nomer_karusel.toLeft('transform 0.5s ease-in-out', 500, () => {
				dn = parseInt(gE(line_point).dataset.nomer);
				dn = (dn >= klas_karusel.length) ? 1 : dn + 1;
				gE(line_point).dataset.nomer = `${dn}`;
				klas_karusel.forEach((nk) => { nk.style.background = `url('./images/point_s.svg') center/cover no-repeat`; });
				nazva = `span${dn}_${line_point}`;
				gE(`span${dn}_${line_point}`).style.background = `url('./images/point_b.svg') center/cover no-repeat`;
			});
		}
		else
		if (deltaX > 10) {
			goryzontZsuv = 1;
			nomer_karusel.toRight('transform 0.5s ease-in-out', 500, () => {
				dn = parseInt(gE(line_point).dataset.nomer);
				dn = (dn <= 1) ? 3 : dn - 1;
				gE(line_point).dataset.nomer = `${dn}`;
				klas_karusel.forEach((nk) => { nk.style.background = `url('./images/point_s.svg') center/cover no-repeat`; });
				gE(`span${dn}_${line_point}`).style.background = `url('./images/point_b.svg') center/cover no-repeat`;
			});
		}
//		console.log(`deltaY=${deltaY} deltaX=${deltaX}`);

		if (goryzontZsuv == 0){
			if ((-1 * deltaY) > deltaX && deltaY < 0) {
				blok2_stage3_1.scrollTop = blok2_stage3_1.scrollTop + (-1 * deltaY);
				//console.log(deltaY);
			} else {
				if (deltaY > deltaX && deltaY > 0) {
					blok2_stage3_1.scrollTop = blok2_stage3_1.scrollTop - deltaY;
				}
			}
		}

	});

	gE(element).addEventListener("touchend", (event) => {
		event.stopPropagation();
		event.preventDefault();
		startPositionX = undefined;
		startPositionY = undefined;
	});

}

document.addEventListener("mouseup", () => {
	startPositionX = undefined;
	startPositionY = undefined;
});

// ------------------------------------------------------------------------------
trackMouseMovement(`div3_tip1`, `btn1_karusel`, karusel1, span_karusel1);
trackMouseMovement(`div3_tip2`, `btn2_karusel`, karusel2, span_karusel2);
trackMouseMovement(`div3_tip3`, `btn3_karusel`, karusel3, span_karusel3);





gE('main').addEventListener("touchstart", (event) => {
	//event.stopPropagation();	event.preventDefault();
	mainstartPositionX = event.touches[0].clientX;
	mainstartPositionY = event.touches[0].clientY;
});


gE('main').addEventListener("touchmove", (event) => {
	let dn = 0;
	let nazva = '';

	event.stopPropagation();	event.preventDefault();

	const deltaX = event.touches[0].clientX - mainstartPositionX;
	mainstartPositionX = event.touches[0].clientX;

	const deltaY = event.touches[0].clientY - mainstartPositionY;
	mainstartPositionY = event.touches[0].clientY;

//	console.log(deltaY);
	if (deltaY < 0) {

		//main.scrollTop = main.scrollTop + (-1 * deltaY);

		stage1.scrollTop = stage1.scrollTop + (-1 * deltaY);
		substage1.scrollTop = substage1.scrollTop + (-1 * deltaY);


		blok2_stage3_1.scrollTop = blok2_stage3_1.scrollTop + (-1*deltaY);

		spilne.scrollTop = spilne.scrollTop + (-1 * deltaY);

		spysok.scrollTop = spysok.scrollTop + (-1 * deltaY);


		stage3_3.scrollTop = stage3_3.scrollTop + (-1 * deltaY);
		substage3_3.scrollTop = substage3_3.scrollTop + (-1 * deltaY);

		stage4.scrollTop = stage4.scrollTop + (-1 * deltaY);
		substage4.scrollTop = substage4.scrollTop + (-1 * deltaY);

		stage5.scrollTop = stage5.scrollTop + (-1 * deltaY);
		substage5.scrollTop = substage5.scrollTop + (-1 * deltaY);



//		console.log(deltaY);
	} else {
		if (deltaY > 0) {
	//		console.log(deltaY);

			//main.scrollTop = main.scrollTop - deltaY;

			stage1.scrollTop = stage1.scrollTop - deltaY;
			substage1.scrollTop = substage1.scrollTop - deltaY;


			blok2_stage3_1.scrollTop = blok2_stage3_1.scrollTop - deltaY;

			spilne.scrollTop = spilne.scrollTop - deltaY;

			spysok.scrollTop = spysok.scrollTop - deltaY;

			stage3_3.scrollTop = stage3_3.scrollTop - deltaY;
			substage3_3.scrollTop = substage3_3.scrollTop - deltaY;

			stage4.scrollTop = stage4.scrollTop - deltaY;
			substage4.scrollTop = substage4.scrollTop - deltaY;

			stage5.scrollTop = stage5.scrollTop - deltaY;
			substage5.scrollTop = substage5.scrollTop - deltaY;



		}
	}

});



gE('main').addEventListener("touchend", (event) => {
	//event.stopPropagation();	event.preventDefault();
	mainstartPositionX = undefined;
	mainstartPositionY = undefined;
});






gE('span1_btn1_karusel').onclick = function (){
	span_karusel1.forEach((nk) => { nk.style.background = `url('./images/point_s.svg') center/cover no-repeat`;});
	this.style.background = `url('./images/point_b.svg') center/cover no-repeat`;
	PraporClick1 = 1;
	karusel1.toNomer(0);
}
gE('span2_btn1_karusel').onclick = function () {
	span_karusel1.forEach((nk) => { nk.style.background = `url('./images/point_s.svg') center/cover no-repeat`; });
	this.style.background = `url('./images/point_b.svg') center/cover no-repeat`;
	PraporClick1 = 1;
	karusel1.toNomer(1);
}
gE('span3_btn1_karusel').onclick = function () {
	span_karusel1.forEach((nk) => { nk.style.background = `url('./images/point_s.svg') center/cover no-repeat`; });
	this.style.background = `url('./images/point_b.svg') center/cover no-repeat`;
	PraporClick1 = 1;
	karusel1.toNomer(2);
}

gE('span1_btn2_karusel').onclick = function () {
	span_karusel2.forEach((nk) => { nk.style.background = `url('./images/point_s.svg') center/cover no-repeat`; });
	this.style.background = `url('./images/point_b.svg') center/cover no-repeat`;
	PraporClick2 = 1;
	karusel2.toNomer(0);
}
gE('span2_btn2_karusel').onclick = function () {
	span_karusel2.forEach((nk) => { nk.style.background = `url('./images/point_s.svg') center/cover no-repeat`; });
	this.style.background = `url('./images/point_b.svg') center/cover no-repeat`;
	PraporClick2 = 1;
	karusel2.toNomer(1);
}
gE('span3_btn2_karusel').onclick = function () {
	span_karusel2.forEach((nk) => { nk.style.background = `url('./images/point_s.svg') center/cover no-repeat`; });
	this.style.background = `url('./images/point_b.svg') center/cover no-repeat`;
	PraporClick2 = 1;
	karusel2.toNomer(2);
}


gE('span1_btn3_karusel').onclick = function () {
	span_karusel3.forEach((nk) => { nk.style.background = `url('./images/point_s.svg') center/cover no-repeat`; });
	this.style.background = `url('./images/point_b.svg') center/cover no-repeat`;
	PraporClick3 = 1;
	karusel3.toNomer(0);
}
gE('span2_btn3_karusel').onclick = function () {
	span_karusel3.forEach((nk) => { nk.style.background = `url('./images/point_s.svg') center/cover no-repeat`; });
	this.style.background = `url('./images/point_b.svg') center/cover no-repeat`;
	PraporClick3 = 1;
	karusel3.toNomer(1);
}
gE('span3_btn3_karusel').onclick = function () {
	span_karusel3.forEach((nk) => { nk.style.background = `url('./images/point_s.svg') center/cover no-repeat`; });
	this.style.background = `url('./images/point_b.svg') center/cover no-repeat`;
	PraporClick3 = 1;
	karusel3.toNomer(2);
}


// ----------------------------------------------------------------------------------------------------------

//const emailRegex = /\S+@\S+\.\S+/;
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

input_block2_substage4.onblur = (event) => {
//	if (event.target.value !== '' && emailRegex.test(event.target.value) === false) {
	if (event.target.value !== '') {
		event.target.focus();
	}
}
input_block2_substage4.onkeydown = (event)=> {
	let emailValue = event.target.value;
	if (event.key === 'Tab') {
		//if (emailValue.trim() !== '' && !emailRegex.test(event.target.value)) {
		if (emailValue.trim() !== '') {
			event.preventDefault();
		}
	}
}
input_block2_substage4.onkeyup = (event) => {
	let emailValue = event.target.value;
	//if (emailValue.trim() !== '' && emailRegex.test(event.target.value)) {
	if (emailValue.trim() !== '') {
		PraporSkip = 1;
		//next_btn.style.background = `url('./images/next4b.svg') center/cover no-repeat`;
		btn_use.setAttribute('xlink:href', `#btn2b4`);
		//block4_substage4.style.visibility = 'hidden';
	} else {
		PraporSkip = 0;
		//next_btn.style.background = `url('./images/next4s.svg') center/cover no-repeat`;
		btn_use.setAttribute('xlink:href', `#btn2s4`);
		//block4_substage4.style.color = `rgba(0, 145, 215, 1)`;
		//block4_substage4.style.visibility = 'visible';
	}
}
block4_substage4.onclick = ()=>{
	PraporSkip = 1;
	//next_btn.style.background = `url('./images/next4b.svg') center/cover no-repeat`;
	//block4_substage4.style.color = `red`;
	input_block2_substage4.value = '';
	btn_use.setAttribute('xlink:href', `#btn2s4`);

	next_btn.click();
}

div_block3_substage4.onclick = () => {
	alert('Join Our Facebook Group');
}



//let lastScrollTop = spysok.scrollTop;

spysok.addEventListener('scroll', (event) => {
	//	const scrollTop = spysok.scrollTop;	//console.log(event.timeStamp);
	if (spysok.scrollTop > 0) {
	//console.log(spysok.scrollTop);		console.log(spysok.offsetHeight);
		pusto_spysok.style.background =  `linear-gradient(to bottom,
rgba(255, 255, 255, 1.0) 0%,
rgba(255, 255, 255, 0.9) 4%,
rgba(255, 255, 255, 0.8) 5%,
rgba(255, 255, 255, 0.5) 6%,
rgba(255, 255, 255, 0.3) 7%,
rgba(255, 255, 255, 0.0) 8%,


rgba(255, 255, 255, 0.0) 93%,
rgba(255, 255, 255, 0.4) 94%,
rgba(255, 255, 255, 0.7) 96%,
rgba(255, 255, 255, 0.9) 98%,
rgba(255, 255, 255, 1.0) 100%
)`;
		//console.log(pusto_spysok.style.background);
	} else if (spysok.scrollTop < 10) {
		pusto_spysok.style.background = `linear-gradient(to bottom,
rgba(255, 255, 255, 0.0) 0%,
rgba(255, 255, 255, 0.0) 4%,
rgba(255, 255, 255, 0.0) 5%,
rgba(255, 255, 255, 0.0) 6%,

rgba(255, 255, 255, 0.0) 90%,
rgba(255, 255, 255, 0.4) 91%,
rgba(255, 255, 255, 0.5) 92%,
rgba(255, 255, 255, 0.6) 93%,
rgba(255, 255, 255, 0.7) 94%,
rgba(255, 255, 255, 0.8) 95%,
rgba(255, 255, 255, 0.8) 96%,
rgba(255, 255, 255, 0.9) 98%,
rgba(255, 255, 255, 1.0) 100%
)`;
	}
	//lastScrollTop = scrollTop;
});



function ScrollStage(element1, element2) {

	if (element1.scrollTop > 0) {
/*
		element2.style.background = `linear-gradient(to bottom,
rgba(255, 255, 255, 0.9) 0%,
rgba(255, 255, 255, 0.8) 4%,
rgba(255, 255, 255, 0.7) 5%,
rgba(255, 255, 255, 0.5) 6%,
rgba(255, 255, 255, 0.3) 7%,
rgba(255, 255, 255, 0.0) 8%,
rgba(255, 255, 255, 0.0) 93%,
rgba(255, 255, 255, 0.4) 94%,
rgba(255, 255, 255, 0.7) 96%,
rgba(255, 255, 255, 0.8) 98%,
rgba(255, 255, 255, 0.9) 100%
)`;
*/
/*

rgba(255, 255, 255, 1.0) 0%,
rgba(255, 255, 255, 0.9) 4%,
rgba(255, 255, 255, 0.8) 5%,
rgba(255, 255, 255, 0.5) 6%,
rgba(255, 255, 255, 0.3) 7%,
rgba(255, 255, 255, 0.0) 8%,



*/


		element2.style.background = `linear-gradient(to bottom,
rgba(255, 255, 255, 0.0) 0%,
rgba(255, 255, 255, 0.0) 4%,
rgba(255, 255, 255, 0.0) 5%,
rgba(255, 255, 255, 0.0) 6%,
rgba(255, 255, 255, 0.0) 7%,
rgba(255, 255, 255, 0.0) 8%,


rgba(255, 255, 255, 0.0) 93%,
rgba(255, 255, 255, 0.4) 94%,
rgba(255, 255, 255, 0.7) 96%,
rgba(255, 255, 255, 0.9) 98%,
rgba(255, 255, 255, 1.0) 100%
)`;



	} else if (element1.scrollTop < 10) {
		element2.style.background = `linear-gradient(to bottom,
rgba(255, 255, 255, 0.0) 0%,
rgba(255, 255, 255, 0.0) 4%,
rgba(255, 255, 255, 0.0) 5%,
rgba(255, 255, 255, 0.0) 6%,

rgba(255, 255, 255, 0.0) 90%,
rgba(255, 255, 255, 0.4) 91%,
rgba(255, 255, 255, 0.5) 92%,
rgba(255, 255, 255, 0.6) 93%,
rgba(255, 255, 255, 0.7) 94%,
rgba(255, 255, 255, 0.8) 95%,
rgba(255, 255, 255, 0.8) 96%,
rgba(255, 255, 255, 0.9) 98%,
rgba(255, 255, 255, 1.0) 100%
)`;



/*
		element2.style.background = `linear-gradient(to bottom,
rgba(255, 255, 255, 0.0) 0%,
rgba(255, 255, 255, 0.0) 4%,
rgba(255, 255, 255, 0.0) 5%,
rgba(255, 255, 255, 0.0) 6%,
rgba(255, 255, 255, 0.0) 93%,
rgba(255, 255, 255, 0.3) 94%,
rgba(255, 255, 255, 0.5) 95%,
rgba(255, 255, 255, 0.7) 96%,
rgba(255, 255, 255, 0.8) 98%,
rgba(255, 255, 255, 0.9) 100%
)`;
*/

	}

}



stage3_2.addEventListener('scroll', () => {
	//console.log(stage3_2.scrollTop);
	ScrollStage(stage3_2, pusto_spilne);
});
spilne.addEventListener('scroll', () => {
	//console.log(spilne.scrollTop);
	ScrollStage(spilne, pusto_spilne);
});

blok2_stage3_1.addEventListener('scroll', () => {
	//console.log(spilne.scrollTop);
	//ScrollStage(blok2_stage3_1, pusto_blok2_stage3_1);
});



