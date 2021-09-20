function bin2Dec(bin1){
    var bin = bin1.toString()
    var paraSomar = new Array()
    for(let i = 0; i < 8; i++){
        var num = parseInt(bin.substring(i+1, i))
        var matBin2Dec = num*(2**i)
        paraSomar.push(matBin2Dec)
    }
    // var soNum = (n) => n != NaN
    const resultado = paraSomar.reduce(function(acumulador, atual){
        return acumulador + atual
    }, 0)
    return console.log(resultado)
}

bin2Dec(110111)