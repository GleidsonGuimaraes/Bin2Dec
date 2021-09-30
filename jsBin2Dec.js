function bin2Dec(bin){
    // função parseInt para converter binario em decimal
    let decimal = parseInt(bin, 2);

    // segundo método para converter binario em decimal

    // convertendo os dados recebidos em string
    //  let bin1 = bin.toString()
    // variavel que recebe o valor decimal
    //  let decimal = 0
    // laço utilizado para ler e converter todos os caracteres binários
    //  for(let i = bin1.length - 1, e = 0; i >= 0; i--, e++){
    //      decimal += bin1[i] * Math.pow(2, e)
    //  }

    // retorno da função
    return decimal;
}