const nome = 'Marina';
const sexo = 'F';
const idade = 65;
const contribuicao = 12;

if(sexo=='M'){
    if(contribuicao + idade >= 95){
        console.log(`${nome}, você pode se aposentar`)
    }else{
        console.log(`${nome}, você não pode se aposentar`)
    }
}else if(sexo=='F'){
    if(contribuicao + idade >= 85){
        console.log(`${nome}, você pode se aposentar`)
    }else{
        console.log(`${nome}, você não pode se aposentar`)
    }
}