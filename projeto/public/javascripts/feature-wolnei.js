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
    console.log(tipo);
    var tipos = ["normal","fighting","flying","poison","ground","rock","bug","ghost","steel","fire","water","grass","electric","psychic","ice","dragon","dark","fairy","stellar","unknown","shadow"]
    for(i=0;i<tipos.length;i++){
        if (tipos[i] == tipo) {
            $('#box-imagem').css("background-color", "lightyellow");
        } else if (tipos[i] == tipo) {
            $('#box-imagem').css("background-color", "red");
        }
    }
}
