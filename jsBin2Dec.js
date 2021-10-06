function bin2Dec(bin){
    // evitando a exibição de NaN como resultado decimal
    if(bin == ''){
        return '';
    }

    // verificando caracteres diferentes de 0 e 1
    let binario = bin.toString();
    for(let i = 0; i < binario.length; i++){
        if(binario.substring(i,i+1) != 0 && binario.substring(i,i+1) != 1 ){
            document.getElementById('fb1').value = '';
            alert("Você inseriu um caracter diferente de 0 ou 1.");
            return '';
            break;
        }
    }

    // função parseInt para converter binario em decimal
    let decimal = parseInt(bin, 2);

    // retorno da função
    return decimal;
}