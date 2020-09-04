function standardDeviation(array){
    var array=[1,2,3]
    var b=array.length;
    var mean = array.reduce((a,b)=> a+b)/b
    return Math.sqrt(array.map(x=>Math.pow(x-mean, 2)).reduce((a,b)=>a+b)/b)
}
console.log(standardDeviation())