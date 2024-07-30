async function buscarPokemon() {
    var nome = $('#nome-pokemon').val().toLowerCase();
    if (nome == '') {
        console.log('nome vazio!');
    } else {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);
            if (!response.ok) {
                alert('POKEMON NÃO LOCALIZADO!');
                throw new error("Could not fetch resource!");
            }
            const data = await response.json();
            console.log(data);

            $('#box-imagem').attr('src',data['sprites']['other']['official-artwork']['front_default']);
            
            $('#id-pokemon').text(`ID: ${data['id']}`);
            $('#name-pokemon').text(`Nome: ${data['forms'][0]['name']}`);
            $('#tipo-pokemon').html(`Tipo: ${data['types'][0]['type']['name']}`);

            tipoPokemon(data['types'][0]['type']['name']);

        }
        catch (e) {
            console.log('ERRO AO BUSCAR EM API')
        }
    }
}

function tipoPokemon(tipo) {
    // tipos = ["normal","fighting","flying","poison","ground","rock","bug","ghost","steel","fire","water","grass","electric","psychic","ice","dragon","dark","fairy","stellar","unknown","shadow"]  
    switch (tipo) {
        case 'electric':
            $('#box-imagem').css("background-color", "lightyellow");
            break;
        case 'fire':
            $('#box-imagem').css("background-color", "rgba(255,101,80,0.4)");
            break;
        case 'water':
            $('#box-imagem').css("background-color", "lightblue");
            break;
        case 'grass':
            $('#box-imagem').css("background-color", "lightgreen");
            break;
        case 'bug':
            $('#box-imagem').css("background-color", "lightgreen");
            break;
        case 'poison':
            $('#box-imagem').css("background-color", "lightpurple");
            break;
    }
}
