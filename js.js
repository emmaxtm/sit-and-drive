function pokret(){
    var zup=document.getElementById("zupcanik1");
    var zup2=document.getElementById("zupcanik2");
    var pozicija=0;
    var pocetak=setInterval(pomeraj,10);

    function pomeraj(){
        if(pozicija==300){
            clearInterval(pocetak);
        }
        else{
            pozicija++;
            zup.style.top=pozicija+'px';
            zup.style.left=pozicija+'px';
            zup2.style.top=pozicija+'px';
            zup2.style.left=pozicija+'px';
        }
    }
}