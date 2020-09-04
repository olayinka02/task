//function to check if a letter is a vowel or not
function vowel(leet){
    if(leet!= 'a' && leet!='e' &&  leet!='i' && leet!='o' && leet!='o' ){
        return false;
    }else{
        return true;
    }
}
function replaceConsonant(letter){
    for(var i=0; i<letter.length; i++){
        if(!vowel(letter[i])){
            if(letter[i]== 'z'){
                letter[i]='b';
            }else{
                letter[i]=((letter[i]+1));
                if(vowel(letter[i])){
                    letter[i]=((letter[i]+1));
                }
            }
        }
        return letter;
    }
}
var letter="z";
console.log(replaceConsonant(letter))