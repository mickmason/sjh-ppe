(function bcAppJS() {
	const debug = false; 
	if (debug) {
		console.log('debug');
	}
	/* 
		GSAP Get Started tests
		https://greensock.com/get-started/ 
	*/  
	//Heading
	


	/* AH Logo animations */
	if (document.querySelector('#ah-logo')) {
		console.log('yes');
		const $ahTimeline = gsap.timeline({delay: 0.382});
		$ahTimeline.from('#ah-logo #cell-center', {duration: 1, opacity: 0, ease: 'power1.in', delay: 0.618});
		$ahTimeline.from('#ah-logo #cell-left, #cell-right', {duration: 0.618, opacity: 0, ease: 'power1.in'});
		$ahTimeline.to('#ah-logo #align-line', {duration: 1, opacity: 1, attr: {x1: '0', x2: '512'}, ease: 'power1.in'}, '0.618'); 
	} 
	const embedwrappers = document.querySelectorAll(`[class*="embed-wrapper"]`);
	for (let embedwrapper of embedwrappers) {
		const embedable = embedwrapper.querySelector('iframe, video, embed');
		embedable.removeAttribute('width');
		embedable.removeAttribute('height');
		
	}
	
	
})(window);
/* App.js */

