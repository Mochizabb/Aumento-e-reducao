    let container = document.getElementById('contador')

    const operation = {
        more: (valor) => valor + 1,
        less: (valor) => valor - 1,
        reset: () => 0
    }



    document.querySelectorAll('button[id]').forEach(button => {
        button.addEventListener('click', () =>{
            const operando = button.getAttribute('id')
            const atualValor = Number(container.value)
            container.value = operation[operando](atualValor)

        })
    })

    