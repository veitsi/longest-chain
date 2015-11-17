console.log('longest chain started');
function chainLength(a){
    if (a.length>100) {
        throw new Error("too long string");
    }
    var maxl=0;
    var i= a.length-1;
    var inseq=false;
    var l=0;
    while (i>-1){
        if (a[i]==="1"){
            if (!inseq){
                inseq=true;
                l=1;
            }
            else {l++}
        }
        else if (inseq){
            inseq=false;
            if (l>maxl) maxl=l;
        }
        i--;
    }
    if (l>maxl) maxl=l;
    return maxl;
}
