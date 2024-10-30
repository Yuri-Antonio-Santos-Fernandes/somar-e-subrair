let num=0

function somar(){
num+=1
    
    document.getElementById('num').innerText = num;
}

function subtrair(){
num-=1

    document.getElementById('num').innerText = num;
}

function mudarCor(){
    const cor = document.getElementById('cor').value
    document.getElementById('fundo').style.backgroundColor = cor
}
