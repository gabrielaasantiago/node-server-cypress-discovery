//API
var avengers = ['Tony Stark', 'Steve Rogers', 'Bruce Banner', 'Natasha Romanoff', 'Peter Parker', 'Scott Lang']

function listaVingadores() {

    var ul = document.getElementById('avengers')
    ul.innerHTML = ''

    avengers.forEach(function (a) {
        var li = document.createElement('li')
        var text = document.createTextNode(a)
        li.appendChild(text)
        ul.appendChild(li)
    })
}