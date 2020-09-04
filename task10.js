function mostOccured(word){
    return word.split('').reduce((et ,char)=>{
        let mem =word.split(char).length-1;
        return mem > et[1] ? [char,mem] :et;
    },['',0])[0]
}
mostOccured("fgfgffffff");