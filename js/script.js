var elementosDuvida = document.querySelectorAll('.duvida')

elementosDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa')
    })
})

function aparecer() {
    // Seleciona o elemento do alerta pelo ID
    var meuAlerta = document.getElementById('meuAlerta');
    
    // Mostra o alerta alterando a propriedade de exibição para 'block'
    meuAlerta.style.display = 'block';

    // Adicione esta linha se você quiser que o alerta desapareça automaticamente após alguns segundos
    setTimeout(function() { meuAlerta.style.display = 'none'; }, 10000); // 10000 milissegundos = 10 segundos


   

}