let nome = document.getElementById('nome')
let serie = document.getElementById('serie')
let materia = document.getElementById('materia')
let bim1 = document.getElementById('bim1')
let bim2 = document.getElementById('bim2')
let bim3 = document.getElementById('bim3')
let bim4 = document.getElementById('bim4')
let media = document.getElementById('media')
let tbody = document.getElementById('relatorio')

function calcularMedia(){
    event.preventDefault()
    media.value = (parseFloat(bim1.value)+ parseFloat(bim2.value)+
    parseFloat(bim3.value)+parseFloat(bim4.value))/4
    tbody.innerHTML = `<tr>
    <td class="center">${nome.value}</td>
    <td class="center">${serie.value}</td>
    <td class="center">${materia.value}</td>
    <td class="center">${bim1.value}</td>
    <td class="center">${bim2.value}</td>
    <td class="center">${bim3.value}</td>
    <td class="center">${bim4.value}</td>
    <td class="center">${media.value}</td>`
}


   