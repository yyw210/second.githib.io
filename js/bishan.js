var k = 1;
window.onload = function() {
	var li = document.getElementsByClassName("div1");
	li[0].onclick = function() {
		if(k == 1) {
			li[0].style.width = "740px";
			li[5].style.width = "740px";
			li[1].style.display = "none";
			li[2].style.display = "none";
			li[3].style.display = "none";
			li[4].style.display = "none";
			li[6].style.display = "none";
			li[7].style.display = "none";
			li[8].style.display = "none";
			li[9].style.display = "none";
			k = 0;
		} else {
			li[0].style.width = "140px";
			li[5].style.width = "140px";
			li[1].style.display = "block";
			li[2].style.display = "block";
			li[3].style.display = "block";
			li[4].style.display = "block";
			li[6].style.display = "block";
			li[7].style.display = "block";
			li[8].style.display = "block";
			li[9].style.display = "block";
			k = 1;
		}
	}
	li[1].onclick = function() {
		if(k == 1) {
			li[1].style.width = "740px";
			li[6].style.width = "740px";
			li[0].style.display = "none";
			li[2].style.display = "none";
			li[3].style.display = "none";
			li[4].style.display = "none";
			li[5].style.display = "none";
			li[7].style.display = "none";
			li[8].style.display = "none";
			li[9].style.display = "none";
			k = 0;
		} else {
			li[1].style.width = "140px";
			li[6].style.width = "140px";
			li[0].style.display = "block";
			li[2].style.display = "block";
			li[3].style.display = "block";
			li[4].style.display = "block";
			li[5].style.display = "block";
			li[7].style.display = "block";
			li[8].style.display = "block";
			li[9].style.display = "block";
			k = 1;
		}
	}
	li[2].onclick = function() {
		if(k == 1) {
			li[2].style.width = "740px";
			li[7].style.width = "740px";
			li[1].style.display = "none";
			li[0].style.display = "none";
			li[3].style.display = "none";
			li[4].style.display = "none";
			li[6].style.display = "none";
			li[5].style.display = "none";
			li[8].style.display = "none";
			li[9].style.display = "none";
			k = 0;
		} else {
			li[2].style.width = "140px";
			li[7].style.width = "140px";
			li[1].style.display = "block";
			li[0].style.display = "block";
			li[3].style.display = "block";
			li[4].style.display = "block";
			li[6].style.display = "block";
			li[5].style.display = "block";
			li[8].style.display = "block";
			li[9].style.display = "block";
			k = 1;
		}
	}
	li[3].onclick = function() {
		if(k == 1) {
			li[3].style.width = "740px";
			li[8].style.width = "740px";
			li[1].style.display = "none";
			li[2].style.display = "none";
			li[0].style.display = "none";
			li[4].style.display = "none";
			li[6].style.display = "none";
			li[7].style.display = "none";
			li[5].style.display = "none";
			li[9].style.display = "none";
			k = 0;
		} else {
			li[3].style.width = "140px";
			li[8].style.width = "140px";
			li[1].style.display = "block";
			li[2].style.display = "block";
			li[0].style.display = "block";
			li[4].style.display = "block";
			li[6].style.display = "block";
			li[7].style.display = "block";
			li[5].style.display = "block";
			li[9].style.display = "block";
			k = 1;
		}
	}
	li[4].onclick = function() {
		if(k == 1) {
			li[4].style.width = "740px";
			li[9].style.width = "740px";
			li[1].style.display = "none";
			li[2].style.display = "none";
			li[3].style.display = "none";
			li[0].style.display = "none";
			li[6].style.display = "none";
			li[7].style.display = "none";
			li[8].style.display = "none";
			li[5].style.display = "none";
			k = 0;
		} else {
			li[4].style.width = "140px";
			li[9].style.width = "140px";
			li[1].style.display = "block";
			li[2].style.display = "block";
			li[3].style.display = "block";
			li[0].style.display = "block";
			li[6].style.display = "block";
			li[7].style.display = "block";
			li[8].style.display = "block";
			li[5].style.display = "block";
			k = 1;
		}
	}
}