function Complex(unrealNum,realNum) {
	if (isInt(realNum) &&　isInt(unrealNum)) {
		console.log("Init!");
		this.realNum = realNum;
		this.unrealNum = unrealNum;
		this.getInfo();
	}else{
		console.log("Init with Default value!");
		this.realNum = Complex.prototype.realNum;
		this.unrealNum = Complex.prototype.unrealNum;
		this.getInfo();
	}
}

Complex.prototype = {
	constructor : Complex,
	realNum : 0,
	unrealNum : 0,
	getInfo : function(){
		console.log("Complex :(" + this.unrealNum + "i" + ") + (" + this.realNum + ")");
		console.log("UnrealNumber :" + this.unrealNum);
		console.log("RealNumber :" + this.realNum);
	},
	add : function(complex){
		this.unrealNum = this.unrealNum + complex.unrealNum;
		this.realNum = this.realNum + complex.realNum;
		console.log("Add Result :");
		this.getInfo();
	},
	mul : function(complex){
		this.unrealNum = this.realNum * complex.unrealNum + this.unrealNum * complex.realNum;
		this.realNum = -1 * this.unrealNum * complex.unrealNum + this.realNum * complex.realNum;
		console.log("Mul Result :");
		this.getInfo();
	},
	mag : function(){
		var mag = Math.sqrt(Math.pow(this.realNum,2) * Math.pow(this.unrealNum,2));
		console.log("Mag Result is:" + mag);
	},
	neg : function(){
		this.unrealNum = -1 * this.unrealNum;
		console.log("Neg Result :");
		this.getInfo();
	},
	equal : function(complex){
		if (this.realNum == complex.realNum && this.unrealNum == complex.unrealNum) {
			console.log("They are the Same!");
		}
		else{
			console.log("Ther are not the Same!");
		}
	}
}

function isInt(isNum) {
	return typeof isNum === 'number' && isNum%1 === 0;
}