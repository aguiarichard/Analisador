let num = document.getElementById('txtnum')
let list = document.getElementById('selnum')
let res = document.querySelector('div#res')
let valores = []
 function adicionar() {
    if (isnumero(num.value) && !islista(num.value, valores)) {
        let item = document.createElement('option')
        item.text = (`Valor ${num.value} adicionado`)
        list.appendChild(item)
        valores.push((Number)(num.value))
        res.innerHTML = ''
    } else {
        window.alert('Valor ínvalido ou já encontrado na lista')
    } 
    num.value = ''
    num.focus()
 } function isnumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
} function islista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
} function finalizar() {
    if (valores.length == 0) {
        window.alert(`Adicione valores antes de finalizar!`)
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            media = soma / total
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }       
        res.innerHTML = ''
        res.innerHTML += (`Ao todo temos ${total} números cadastrados.<p>`)
        res.innerHTML += (`O menor valor informado foi ${menor}.<p>`)
        res.innerHTML += (`O maior valor informado foi ${maior}.<p>`)
        res.innerHTML += (`Somando todos os valores, temos ${soma}.<p>`)
        res.innerHTML += (`A média dos valores digitados é de ${media.toFixed(2)}.<p>`)
    }
} 
    
    
    
    
    