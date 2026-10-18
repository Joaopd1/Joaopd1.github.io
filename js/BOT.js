
		//https://www.w3schools.com/jsref/jsref_includes_array.asp (include)
		//https://www.w3schools.com/jsref/event_preventdefault.asp (preventDefault)
		//https://www.w3schools.com/js/js_arrays.asp (Arrays)
		//https://www.w3schools.com/jsref/event_onclick.asp (Click event)


//Jogo Pedra,Papel e Tesoura


	
	let fundo = document.getElementById('fundo');
	
	let fundoClick = false;
	
	fundo.onclick = function() {
		
		fundoClick = !fundoClick;
	  
			if (fundoClick){	
				document.body.style.backgroundColor = 'black';
				document.body.style.color = 'white';
				}else{
					document.body.style.backgroundColor = 'white';
					document.body.style.color = 'black';
			
			}
		}

	let player1 = document.getElementById('player1');

		let tecla = ['1','2','3', 'Backspace', 'Tab'];

		player1.addEventListener('keydown', function(event){
	
			if (!tecla.includes(event.key)) {
				event.preventDefault();
	}
	});
	
	let confirmar = document.getElementById('confirma');
	
	confirmar.addEventListener('click', jokenpo);
		
	let contador1 = 0;
	let contador2 = 0;
	let contador3 = 0;
	
	let contagem1 = document.getElementById('contador1');
	let contagem2 = document.getElementById('contador2');
	let contagem3 = document.getElementById('contador3');
	
	
	function jokenpo(){
		
	let player2 = Math.floor(Math.random() * 3) + 1;
							console.log(player2)
						
						
								
if ((player1.value  == 1 && player2 == 3) || (player1.value == 2 && player2 == 1) || (player1.value == 3 && player2 == 2))	{
	if (player1.value  == 1 && player2 == 3){
			alert("Jogador Ganhou com Pedra vs Tesoura");
			contador1++;
			contagem1.innerText = contador1;
		}else if(player1.value == 2 && player2 == 1){
				alert("Jogador Ganhou com Papel vs Pedra");
				contador1++;
				contagem1.innerText = contador1;
			}else if(player1.value == 3 && player2 == 2){
				alert("Jogador Ganhou com Tesoura vs Papel");
				contador1++;
				contagem1.innerText = contador1;
			}
			}else if(player1.value == player2){
				alert("Empate");
				contador2++;
				contagem2.innerText = contador2;
			}else if (player1.value === ""){
				alert("selecione um valor");
			}else{	
				switch (player2){
					case 1:
						alert("Computador Ganhou com Pedra vs Tesoura");
						contador3++;
						contagem3.innerText = contador3;
						break;
					case 2:
						alert("Computador Ganhou com Papel vs Pedra");
						contador3++;
						contagem3.innerText = contador3;
						break;
					case 3:
						alert("Computador Ganhou com Tesoura vs Papel");
						contador3++;
						contagem3.innerText = contador3;
						break;
		
					}				
			}
					player1.value = "";
}
