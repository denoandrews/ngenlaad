var creative = {}; //ad object
const jitterFixProps = {force3D: true, skewX:0.01, perspective:1000, z:0.01}

CustomEase.create("curve", "M0,0 C0.046,0.245 0.37,0.334 0.571,0.463 0.689,0.538 0.815,0.561 1,1.012 ")

function init() {
	console.log("Ad Ready");
	addEventListeners();
	creative.viewport = document.getElementById('mainExit');
    creative.isi_height = document.getElementById('isi-copy').offsetHeight;
	scrollSpeed = creative.isi_height/10;
	gsap.set(['#viewport', '#border'], {autoAlpha:1});
	// gsap.set(['#tmp'], {alpha:0.3});
	frameOne();
}

function frameOne() {
	gsap.set([ '.isi, .f1, .gl', '#f1-hero', '#f1-legal'], {autoAlpha:1});
	// gsap.set([ '#overlay-bg' ], {autoAlpha:0.3});
	// gsap.set([ '#gl-ngenla-logo' ], {scale:0.49, x:-3, y:-59});

	shimmer()

	gsap.from(['#f1-copy1'], {duration:0.5, x: -20, delay:0.3, autoAlpha:0, ease: "power1.out"});
	// gsap.from(['#f1-hero, #f1-legal'], {duration:0.5, delay:0.3, autoAlpha:0});

	var delay = 4;
	gsap.to(['.f1'], {duration:0.5, delay:delay, autoAlpha:0});
	gsap.delayedCall(delay, frameTwo);
}

function frameTwo() {
	gsap.set([ '.f2' ], {autoAlpha:1});

	gsap.from(['#f2-copy1'], {duration:0.5, delay:0.5, autoAlpha:0});

	var delay = 3;
	gsap.to(['.f2'], {duration:0.5, delay:delay, autoAlpha:0});
	gsap.delayedCall(delay, frameThree);
}

function frameThree() {
	gsap.set([ '.f3' ], {autoAlpha:1});
	// gsap.set([ '#gl-plane' ], {autoAlpha:1});
	// gsap.set([ '#lineImage' ], {autoAlpha:1});

	// plane animation
	// gsap.to("#gl-plane", 3, {
	// 	scale: 0.12,
	// 	ease: "curve",
	// 	motionPath: {
	// 		path: "#planePath1",
	// 		align: "#planePath1",
	// 		alignOrigin: [0.49, 0.36],
	// 		autoRotate: 90,
	// 		start: 0,
	// 		end: 1
	// 	},
	// 	...jitterFixProps
	//   });
	
	// plane path lines animation
	// gsap.set('#planePathLines', {drawSVG:'100%'});	

	// gsap.from("#planePathLines", {
	// 	duration:3, 
	// 	drawSVG:0,
	// 	ease: "curve",
	// });

	gsap.from(['#f3-copy1'], {duration:0.5, delay:0.5, autoAlpha:0});

	var delay = 3;
	gsap.to(['.f3'], {duration:0.5, delay:delay, autoAlpha:0});
	gsap.delayedCall(delay, frameFour);
}

function frameFour() {
	gsap.set([ '.f4' ], {autoAlpha:1});
	gsap.set([ '#f4-bg' ], {autoAlpha:1});
	
	gsap.from(['#f4-bg'], {duration:1, delay:0.3, autoAlpha:0});
	sparkle()

	gsap.from(['#f4-copy1, #f4-cta'], {duration:0.5, delay:0.5, stagger:0.3, autoAlpha:0});
	
	gsap.delayedCall(3, ISIscroll);
}

// Animation Components
function shimmer() {
	gsap.set([ '.shimmer' ], {autoAlpha:1});

	var tl = gsap.timeline({ repeat:2, defaults: { duration: 1.2 } });
		tl.to('#gl-bg1', { autoAlpha:0}) 
		.to('#gl-bg2', { autoAlpha:0 }, '=-0.6')
		.to('#gl-bg3', { autoAlpha:0 }, '=-0.6')
		.to('#gl-bg4', { autoAlpha:0 }, '=-0.6')
		.to('#gl-bg5', { autoAlpha:0 }, '=-0.6')
		.to('#gl-bg6', { autoAlpha:0 }, '=-0.6')
		.to('#gl-bg1', { autoAlpha:1 }, '=-0.6')

	gsap.to(['#gl-bg1'], {duration:1, delay:0.4, autoAlpha:0});
}

function sparkle(){
	gsap.set([ '#f4-sparkle1' ], {transformOrigin:"386px 22px"});
	gsap.set([ '#f4-sparkle2' ], {transformOrigin:"284px 65px"});
	gsap.set([ '#f4-sparkle3' ], {transformOrigin:"314px 64px"});

	gsap.from(['.sparkle-L'], {duration:3.6, rotation:60, repeat: 0});
	gsap.from(['.sparkle-R'], {duration:3.6, rotation:-60, repeat: 0});

	gsap.from(['#f4-sparkle1'], {duration:0.66, scale:0, delay:0.2, repeat: 3, repeatDelay:0.1, ease:Power3.easeInOut, yoyo:true});
	gsap.from(['#f4-sparkle2'], {duration:0.66, scale:0, delay:0.6, repeat: 3, repeatDelay:0.1, ease:Power3.easeInOut, yoyo:true});
	gsap.from(['#f4-sparkle3'], {duration:0.66, scale:0, delay:0.1, repeat: 3, repeatDelay:0.1, ease:Power3.easeInOut, yoyo:true});

	gsap.delayedCall(3, sparkleStop)
}

function sparkleStop(){
	gsap.to(['#f4-sparkle1'], {duration:1, delay:0.2, scale:1, ease:Power3.easeInOut});
	gsap.to(['#f4-sparkle2'], {duration:1, delay:0.6, scale:1, ease:Power3.easeInOut});
	gsap.to(['#f4-sparkle3'], {duration:1, delay:0.1, scale:1, ease:Power3.easeInOut});
}

// ISI Scroll
function ISIscroll() {
	gsap.delayedCall(1, timelineBegin);
    var timer = gsap.timeline();
        isiAnim = gsap.timeline()
        ISI = document.getElementById('isi-copy-con');
    timer.play();

	function timelineBegin(){ isiAnim.to('#isi-copy-con', {duration:1, scrollTo: {y:"+=10"}, ease:"none", repeat:scrollSpeed, repeatRefresh:true, z:0.1, rotationZ:0.01, force3D:true }); }

    ISI.addEventListener('mouseover', mouseInner, false);
    function mouseInner() { ISI.removeEventListener('mouseover', mouseInner, false); timer.pause(); isiAnim.clear(); ISI.addEventListener('mouseout', mouseOuter, false); function mouseOuter() { ISI.addEventListener('mouseover', mouseInner, false); timer.play(); var currentTime = timer.totalTime(); if (currentTime < scrollSpeed-1) { timelineBegin(); } } }
}

function addEventListeners() { 
    function mainExitHandler(e) { Enabler.exit('mainExit'); }
	function PIExitHandler(e) { Enabler.exit('PIexit'); }
    document.getElementById('mainExit').addEventListener('click', mainExitHandler, false);
	document.getElementById('clickTag2').addEventListener('click', PIExitHandler, false);
	document.getElementById('clickTag3').addEventListener('click', PIExitHandler, false);
}