document.getElementById('incrementar').addEventListener('click', more1)
    
    function more1() {

        const input = document.getElementById('contador');
        let valorAtual = Number(input.value) || 0;
        input.value = valorAtual + 1;
    };

    document.getElementById('less').addEventListener('click', less1);

    function less1() {

        const input = document.getElementById('contador');
        let valorAtual = Number(input.value) || 0;
        input.value = valorAtual - 1;
    };

    document.getElementById('reset').addEventListener('click', reset);

    function reset() {

        const input = document.getElementById('contador');
        input.value = 0;
    };