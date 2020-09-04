
function prime(num){
 if(num===1){
     console.log("auguement")
        }
        else if(num>1){
            for( var i=2; i< num; i++){
                if(num%i==0){
                    return false;
                    break;
                }
                else{
                    return true;
                }
            }
        }

    
    }

    prime(1);
