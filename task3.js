
function prime(array){
    var array=[1,2,3,4,5,6,7,8,9];
  
    for( var i=2; i<= array.length; i++){
        var prime = true;
        var k=array.length;
        for( var k=2; k<i; k++){
            if( i%k === 0 && i!==k){
                prime = false;
            }
        }
        if(prime === true){
            console.log(i);
        }
    }
}
console.log(prime());

       
function standardDeviation(array){
    var array=[1,2,3]
    var b=array.length;
    var mean = array.reduce((a,b)=> a+b)/b
    return Math.sqrt(array.map(x=>Math.pow(x-mean, 2)).reduce((a,b)=>a+b)/b)
}
console.log(standardDeviation())