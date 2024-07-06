class Person {
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    getDetails(): string {
        return `${this.name} is ${this.age}} years old.`;
    }
}
let person = new Person("Alisha",20);
console.log(person.getDetails());
abstract class takePhoto {
    filter: string
    brust: number 
    constructor(filName: string,brstNo: number ){
        this.brust = brstNo
        this.filter = filName
    }
}
class Instagram extends takePhoto{
    reelTime: number
    constructor(filName: string , brstNo: number , rlTime: number){
        super(filName, brstNo)
        this.reelTime = rlTime
    }
}
let instaApp: Instagram = new Instagram("Whitness",10,10)
console.log(instaApp);
class personalData {
    name: string
    age: number
    experience: number
    constructor(tName:string, tAge:number, tExp:number){
        this.name = tName
        this.age = tAge
        this.experience = tExp
    }
    set updataAge(updataAge:number){
        this.age = updataAge
    }
}
let tdata1:personalData = new personalData ("ubaid",10,3)
console.log(tdata1)
tdata1.updataAge = 20
console.log(tdata1);