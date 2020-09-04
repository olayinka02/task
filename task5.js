// i declare a string variable, which is having some space
var name="Akinseye Oluwasegun Yinka";
//i looped through the string declared
for( var i=0; i<name.length ;i++){
      //during the process of my looping,i set a command to replace every space with %20,
      //and save the changes as name
      name=name.replace(" ", "%20")  
}
//i console.log the newname that has the changes
console.log(name)

   