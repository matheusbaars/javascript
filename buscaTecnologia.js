const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
]

for(let i = 0; i < usuarios.length; i++){
    if(checaSeUsuarioUsaCSS(usuarios, i)){
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}



function checaSeUsuarioUsaCSS(usuarios, i){
    
    if((usuarios[i].tecnologias[0].includes('CSS')) || (usuarios[i].tecnologias[1].includes('CSS'))){
        return true
    }else{
        return false
    }
}