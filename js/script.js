document.getElementById('incrementar').addEventListener('click', 
    
    function() {

    const input = document.getElementById('contador');
    let valorAtual = Number(input.value) || 0;
    input.value = valorAtual + 1;
});