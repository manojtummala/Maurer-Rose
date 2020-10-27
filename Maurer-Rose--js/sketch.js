let n = 0;
let d = 0;
let i = 20;

function setup(){
	createCanvas(800,800);
	angleMode(DEGREES);
}


function draw(){
	background(0);
	translate(width/2, height/2);

	noFill();
	strokeWeight(2);
	beginShape();

	stroke(255,229,180, 240);
	for (let i = 0; i < 360; i++){
		let a = i * d;
		let r = 300 * sin(n*a);
		let x = r * cos(a);
		let y = r * sin(a);
		vertex(x,y);
	}
	endShape();

	noFill();
	stroke(200, 0, 200);
	strokeWeight(3);
	beginShape();
	for (let i = 0; i < 360; i++){
		let a = i;
		let r = 300 * sin(n*a);
		let x = r * cos(a);
		let y = r * sin(a);
		vertex(x,y);
	}
	endShape();

	n += 0.003;
	d += 0.005;
}
