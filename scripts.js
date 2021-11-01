// conversores de pressão
function calcpress() {
let inputinhpa = document.getElementById("formulpres")[0].value
let inputinhg = document.getElementById("formulpres")[1].value
console.log(inputinhpa)
let resulthg = document.getElementById("resultinhg")
let resultado = inputinhpa / 33.864
resulthg.innerHTML = resultado.toFixed(2)
let resulthpa = document.getElementById("resultinhpa")
let resultado2 = ((inputinhg * 100) * 33864) / 100000
resulthpa.innerHTML = resultado2.toFixed(1)
}


// captação de dados para interpolação
let x1 = document.getElementById("formul")[0].value
let f1 = document.getElementById("formul")[1].value
let xq = document.getElementById("formul")[2].value
let x2 = document.getElementById("formul")[3].value
let f2 = document.getElementById("formul")[4].value


function interp1() {
    let x1 = parseFloat(document.getElementById("formul")[0].value)
    let f1 = parseFloat(document.getElementById("formul")[1].value)
    let xq = parseFloat(document.getElementById("formul")[2].value)
    let x2 = parseFloat(document.getElementById("formul")[3].value)
    let f2 = parseFloat(document.getElementById("formul")[4].value)
    let vazio = document.getElementById("result")
    let interp = (((f2-f1)/(x2 - x1))*(xq-x1))+f1
    vazio.innerHTML = interp.toFixed(2)
}

function biinterp() {
    let col1 = parseFloat(document.getElementById("formul2")[0].value)
    let col2 = parseFloat(document.getElementById("formul2")[1].value)
    let col3 = parseFloat(document.getElementById("formul2")[2].value)
    let baixo = parseFloat(document.getElementById("formul2")[3].value)
    let enc11 = parseFloat(document.getElementById("formul2")[4].value)
    let enc13 = parseFloat(document.getElementById("formul2")[5].value)
    let seuvalor = parseFloat(document.getElementById("formul2")[6].value)
    let cima = parseFloat(document.getElementById("formul2")[7].value)
    let enc31 = parseFloat(document.getElementById("formul2")[8].value)
    let enc33 = parseFloat(document.getElementById("formul2")[9].value)
    let mediacima = (((enc13-enc11)/(col3 - col1))*(col2-col1))+enc11
    let interpcima = document.getElementById("result-cima")
    interpcima.innerHTML = mediacima.toFixed(2)
    let mediabaixo = (((enc33-enc31)/(col3 - col1))*(col2-col1))+enc31
    let interpbaixo = document.getElementById("result-baixo")
    interpbaixo.innerHTML = mediabaixo.toFixed(2)
    let mediadir = (((enc33-enc31)/(cima - baixo))*(seuvalor-baixo))+enc31
    let interpdir = document.getElementById("result-dir")
    interpdir.innerHTML = mediadir.toFixed(2)
    let mediaesq = (((enc31-enc11)/(cima - baixo))*(seuvalor-baixo))+enc11
    let interpesq = document.getElementById("result-esq")
    interpesq.innerHTML = mediaesq.toFixed(2)
    let vazio2 = document.getElementById("result2")
    let interpfin = (((mediabaixo-mediacima)/(cima - baixo))*(seuvalor-baixo))+mediacima
    vazio2.innerHTML = interpfin.toFixed(2)
}
// x2 - col3      x1 - col1      xq - col2       enc13 - f2      enc 11  - f1
// x2 - cima      x1 - baixo     xq - seuvalor   enc33 - f2       enc 13 - f1