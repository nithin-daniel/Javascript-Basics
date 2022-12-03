// var dt=new Date()
// console.log('hello');
// for(i=0;i<=1000;i++){
//     console.log("Loop");
// }

// console.log('end');
// var diff=new Date()-dt
// console.log(diff);


// function longTask(milSecondTime){
//     dt=new Date()
//     while((new Date-dt) <= milSecondTime){

//     }
// }

// console.log('started');
// longTask(4000)
// console.log('End');


var hello=function(data){
    console.log("Data:"+data);
}

var hey=function(callback){
    callback('Sample')
}

hey(hello)