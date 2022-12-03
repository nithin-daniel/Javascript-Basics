var person={name:"Alan",age:20,place:"Kochi",display:function(){
    console.log(this.name);
}}

for( x in person){
    console.log(person[x]);
}
// console.log(person['age']);
console.log(person.display())