$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});

window.onload = (e) => {
	function open() {
		let head = document.getElementById("head");
		head.style.left="30vw"
	}

	function close() {
		let head = document.getElementById("head");
		head.style.left="100vw"
	}

	let all = document.getElementById("all");
all.addEventListener("click", (e) => {
	let flag = true;
	let accordion = document.getElementById("h77")
	let lis = document.querySelectorAll("li");
	for (let i = 0; i < lis.length; i++) {
		if (lis[i].classList.length == 1) {
			flag = false
		} 
	}

	if (flag) {
		open()
	} else {
		close()
	}
})
}