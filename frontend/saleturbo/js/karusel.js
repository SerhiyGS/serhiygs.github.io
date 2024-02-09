"use strict";
//function Karusel(tato, parentWidth, parentHeight, imagesArray) {
class Karusel {
	constructor(tato, parentWidth, parentHeight, imagesArray){
		this.parentWidth = parentWidth;
		this.parentHeight = parentHeight;
		this.imagesArray = imagesArray;
		this.currentIndex = 0;
		this.praporMove = 0;
		this.init = function () {
			this.parentElement = document.createElement('div');
			this.parentElement.style.padding = `0`;
			this.parentElement.style.margin = `0`;
			this.parentElement.style.boxSizing = `border-box`;
			this.parentElement.style.width = this.parentWidth;
			this.parentElement.style.height = this.parentHeight;
			this.parentElement.style.flexWrap = 'nowrap';
			this.parentElement.style.display = 'flex';
			this.parentElement.style.overflow = 'hidden';
			//this.parentElement.style.border = `1px solid blue`;
			this.childElement1 = this.createChildElement();
			this.childElement2 = this.createChildElement();
			this.parentElement.appendChild(this.childElement1);
			this.parentElement.appendChild(this.childElement2);
			document.querySelector(tato).appendChild(this.parentElement);
			//document.body.appendChild(this.parentElement);
			this.Loadimage();
		};
		this.createChildElement = function () {
			var childElement = document.createElement('div');
			childElement.style.flex = '1';
			childElement.style.minWidth = '100%';
			childElement.style.minHeight = '100%';
			//childElement.style.backgroundSize = `cover`;

			childElement.style.backgroundSize = `contain`;
			childElement.style.backgroundPosition = "center";
			childElement.style.backgroundRepeat =  "no-repeat";



			childElement.style.transition = 'transform 0.5s ease-in-out';
			childElement.style.overflow = 'hidden';
			return childElement;
		};
		this.Loadimage = () => {
			this.childElement1.style.backgroundImage = `url("${this.imagesArray[0]}")`;
			this.childElement2.style.backgroundImage = `url("${this.imagesArray[1]}")`;
		}
		this.LShiftAr = (ar) => {
			this.currentIndex++;
			if (this.currentIndex > ar.length - 1) this.currentIndex = 0;
			ar.push(ar.shift());
			return ar;
		};
		this.RShiftAr = (ar) => {
			this.currentIndex--;
			if (this.currentIndex < 0) this.currentIndex = ar.length - 1;
			ar.unshift(ar.pop());
			return ar;
		};
		this.toLeft = function (trans, delay, callback) {
			if (this.praporMove == 0) {
				this.praporMove = 1;
				this.childElement1.style.backgroundImage = `url("${this.imagesArray[0]}")`;
				this.childElement2.style.backgroundImage = `url(${this.imagesArray[1]})`;
				this.childElement1.style.transform = `translateX(-100%)`;
				this.childElement2.style.transform = `translateX(-100%)`;
				setTimeout(() => {
					this.imagesArray = this.LShiftAr(this.imagesArray);
					this.childElement1.style.backgroundImage = `url("${this.imagesArray[0]}")`;
					this.childElement2.style.backgroundImage = `url(${this.imagesArray[1]})`;
					this.childElement1.style.transition = 'none';
					this.childElement2.style.transition = 'none';
					this.childElement1.style.transform = 'translateX(0%)';
					this.childElement2.style.transform = 'translateX(0%)';
					setTimeout(() => {
						this.childElement1.style.transition = trans;
						this.childElement2.style.transition = trans;
						this.praporMove = 0;
						if (callback) {	callback();	}
					}, 100);
				}, delay);
			}
		};
		this.toRight = function (trans, delay, callback) {
			if (this.praporMove == 0) {
				this.praporMove = 1;
				this.childElement1.style.transition = 'none';
				this.childElement2.style.transition = 'none';
				this.childElement1.style.transform = `translateX(-100%)`;
				this.childElement2.style.transform = `translateX(-100%)`;
				this.imagesArray = this.RShiftAr(this.imagesArray);
				this.childElement1.style.backgroundImage = `url("${this.imagesArray[0]}")`;
				this.childElement2.style.backgroundImage = `url(${this.imagesArray[1]})`;
				setTimeout(() => {
					this.childElement1.style.transition = trans;
					this.childElement2.style.transition = trans;
					this.childElement1.style.transform = `translateX(0%)`;
					this.childElement2.style.transform = `translateX(0%)`;
					setTimeout(() => {
						this.praporMove = 0;
						if (callback) {	callback();	}
					}, delay);
				}, 100);
			}
		};
		this.toNomer = function (n) {
			var IdTimeout;
			let rizn;
			let ser = Math.floor(this.imagesArray.length / 2);
			rizn = Math.abs(n - this.currentIndex);
			if (n != this.currentIndex) {
				if (n > this.currentIndex) {
					this.toLeft('transform 0.5s ease', 500);
				} else {
					this.toRight('transform 0.5s ease', 500);
				}
				IdTimeout = setTimeout(() => {
					rizn = Math.abs(n - this.currentIndex);
					if (rizn > 0) {
						this.toNomer(n);
					} else {
						clearTimeout(IdTimeout);
					}
				}, 50);
			}
		};
		this.init();
	}
}


/*
b1.onclick = () => {
	PraporClick = 1;
	karusel.toNomer(0);
}

b6.onclick = () => {
	karusel.toLeft('transform 0.5s ease-in-out', 500);
	PraporClick = 1;
}

window.onload = () => {
	var IdInterval = setInterval(() => {
		if (PraporClick == 0) {
			karusel.toLeft('transform 0.5s ease-in-out', 500);
		}
	}, 2000);
}
*/

