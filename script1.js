function gerardog(){

//PARA LER UM ARQUIVO JSON TEMOS QUE USAR O FETCH NA SEGUINTE ESTRUTURA
fetch('https://dog.ceo/api/breeds/image/random')
	.then(response => response.json())
	.then(data=> {
		var tabelaDog = document.getElementById("tabelaDog")
		tabelaDog.style.display = "table"
		// O JSON foi lido com sucesso
		//console.log(data)
		//Acessando a propriedade message que possui o URL da imagem
		const imagemURL = data.message;
		//console.log(imagemURL)

		var imgDog = document.getElementById("imgdog")
		imgDog.src=""+imagemURL;

		
		var raca = imagemURL.split("/")
		var racaDogzin = document.getElementById("racaDog");
		racaDogzin.textContent=""+raca[4]


	})
	.catch(error => {
		console.error('Erro: ', error)
	})

}