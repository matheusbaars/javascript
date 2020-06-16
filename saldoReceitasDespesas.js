const usuarios = [
    {
        nome:'Salvino',
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
];


for(let j = 0; j < usuarios.length; j++){
    const receitas = somaReceita(usuarios, j)
    const despesas = somaDespesa(usuarios, j)
    const saldos = saldo(receitas, despesas)
    if(saldos > 0){
        console.log(`O usuário ${usuarios[j].nome} possui saldo positivo de ${saldos.toFixed(2)}`)
    }else{
        console.log(`O usuário ${usuarios[j].nome} possui saldo negativo de ${saldos.toFixed(2)}`)
    }
}

function saldo(receitas, despesas){
    return receitas - despesas
}

function somaReceita(usuarios, j){

    receitas = 0
    for(let i =0; i < usuarios[j].receitas.length; i++){
        receitas += usuarios[j].receitas[i]
    } 
    return(receitas)
}

function somaDespesa(usuarios, j){

    despesas = 0
    for(let i =0; i < usuarios[j].despesas.length; i++){
        despesas += usuarios[j].despesas[i]
    } 
    return(despesas)
}

