function contar() {
    let inicio = document.querySelector('input#inicial')
    let fim = document.querySelector('input#final')
    let passo = document.querySelector('input#passo')
    let res = document.querySelector('div#res')

    if ( inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0){
        window.alert('[ERRO] Faltam dados')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (i <f){
            for(let c = i; c<= f; c += p) {
                res.innerHTML += `${c} \u{1F4C8}`
            }            
        } else {
            for(c = i; c >= f; c-= p) {
                res.innerHTML += `${c} \u{1F4C9}`
            }
        }
        res.innerHTML += `\u{1F3C1}`

    }
}