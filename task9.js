myArray=[1,2,3,4]
for (var i = 0, length = myArray.length; i < length; i++) {
    for (var k = 1, length = myArray.length; k < length; k++) {
        for (var j = 2, length = myArray.length; j < length; j++) {
            if((myArray[i]+myArray[k]+myArray[j])===myArray[i]){
                console.log("we have");
            }


    
        }

    
    }

    
}


