let cards = document.querySelectorAll('.card');

function attachCardHandle() {
	cards = document.querySelectorAll('.card');
	cards.forEach(card => card.addEventListener('click', handleClick));
}

function handleClick(e) {
	console.log(e);
	let str = this.id;
	let reg = new RegExp("card-");
	str = str.replace(reg, '');
	console.log(data[str].details);
}

window.onload = () => {
	showProjects();
}