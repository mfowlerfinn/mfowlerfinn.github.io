let cards = document.querySelectorAll('.card');
let name = document.querySelector('#nav_title');
name.addEventListener('click', wow);
// let scroll = document.querySelector('div.cards');
// window.addEventListener("scroll", handleScroll);
let lastScroll = 0;
let alpha = 0.1;
let momentum = [];
let alphaA = [];
let fading = false;

function attachCardHandle() {
  cards = document.querySelectorAll('.card');
  cards.forEach(card => card.addEventListener('click', handleClick));
}

function wow() {
	alpha = 1.0;
	let current = getComputedStyle(document.documentElement).getPropertyValue('--bg-stripe-idle');
	let highlight = getComputedStyle(document.documentElement).getPropertyValue('--bg-stripe-flash');
	document.documentElement.style.setProperty('--bg-stripe', 'rgba(255,215,0,1)');
	console.log(current);
	let fade = setInterval(() => {
		alpha -= 0.05;
		document.documentElement.style.setProperty('--bg-stripe', `rgba(255,215,0,${alpha})`);
		// console.log({alpha});
		if (alpha < 0) {
			clearInterval(fade);
			document.documentElement.style.setProperty('--bg-stripe', current);
		}
	}, 15);
	let colorFrom = HSLAtoObject(current);
	let colorTo = HSLAtoObject(highlight);
	compare(colorFrom,colorTo,1000);
}

function compare(hslaFrom, hslaTo, divisions) {
	let H = Math.abs(hslaFrom.h - hslaTo.h) / divisions;
	let S = Math.abs(hslaFrom.s - hslaTo.s) / divisions;
	let L = Math.abs(hslaFrom.l - hslaTo.l) / divisions;
	let A = Math.abs(hslaFrom.a - hslaTo.a) / divisions;
	console.log({H,S,L,A});
}

function HSLAtoObject(hsla) {
	let reg =  /\d+/g;
	let regArray = hsla.match(reg);
	console.log(regArray);
	let numObj = {
		"h":regArray[0],
		"s":regArray[1],
		"l":regArray[2],
		"a":regArray[3],
	};
	console.log(numObj);
	return numObj;
}

function handleClick(e) {
  console.log(e);
  let str = this.id;
  let reg = new RegExp("card-");
  str = str.replace(reg, '');
  // console.log(data[str].details);
  // document.documentElement.style.setProperty('--bg-stripe', 'rgba(255,215,0,1)');
}

// function handleScroll(e) {
//   // console.log(window.scrollY);
//   let scroll = window.scrollY;
//   let diff = Math.abs(lastScroll - scroll);
//   let sum, avg, sumA, alpha;
//   if (momentum.length > 5) {
//     // console.log({momentum});
//     momentum.shift();
//     sum = momentum.reduce((previous, current) => current += previous);
//     avg = sum / momentum.length;
//   }
//   momentum.push(diff);
//   alpha = avg * 0.005;

//   // console.log({diff, alpha, avg, sum});
//   console.log({ alpha, alpha, avg });
//   if (alpha > 1) alpha = 1;
//   document.documentElement.style.setProperty('--bg-stripe', `rgba(255,215,0,${alpha})`);
//   lastScroll = scroll;
// }

window.onload = () => {
  showProjects();
}