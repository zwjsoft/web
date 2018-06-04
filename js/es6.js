export let name="aaaa";

export function getName(){
	console.log(name);
}

export function getName1(name1='xxx'){
	console.log(name1);
}

class Person {
    constructor(age,name) {
        this.age =age;
		this.name=name;
    }
    getInfo() {
        console.log("name:"+this.name+ " Age:"+this.age);
    }
}

export class Student extends Person {
	
}

export {Person}