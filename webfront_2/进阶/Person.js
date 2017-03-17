function Person(name) {
	this.name = name;
	Person.prototype.Person_num += 1;
}
Person.prototype = {
	constructor : Person,
	Person_num : 0,
	sayName : function(){
		console.log(this.name);
	},
	countPerson : function(){
		console.log(Person.prototype.Person_num);
	}
}