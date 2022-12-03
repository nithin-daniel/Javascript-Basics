function person(name,age,place){
    this.name=name
    this.age=age
    this.place=place
    this.display=function(){
        console.log("Name : "+this.name+ " Age:"+this.age+ " Place : "+this.place )
    }
}

var alan= new person("Alan",20,"Kollam")
var abel= new person("abel",18,"Calicut")
// console.log(alan,abel);
alan.display()
abel.display()