const iframe = document.getElementById("h5p-iframe-717");
let tryNumber = 1;
console.log(tryNumber);
    
document.getElementById("h5p-iframe-717").onload = function() {
	let byClass = iframe.contentWindow.document.getElementsByClassName('h5p-question-check-answer');
	var checkAnsButton = byClass[0];
	console.log(byClass);

	function tryAdd() {
      		tryNumber++;
		console.log(tryNumber);
		var solButtonClass = iframe.contentWindow.document.getElementsByClassName('h5p-question-show-solution');
            
		if (tryNumber < 3){
			solButtonClass[0].setAttribute('title', 'Try again before viewing solution');
			solButtonClass[0].setAttribute('style', 'background: #b2c6dd');
			solButtonClass[0].disabled = true;
		} else {
			solButtonClass[0].disabled = false;
			solButtonClass[0].setAttribute('title', 'Show solution');
			solButtonClass[0].setAttribute('style', '');
		}
  	}

	checkAnsButton.addEventListener('click', tryAdd, false);
}
