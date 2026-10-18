
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

	let player2 = document.getElementById('player2');

		player2.addEventListener('keydown', function(event){
		
		if (!tecla.includes(event.key)){
			event.preventDefault();
		
		}	
		})		
				
	let confirmar = document.getElementById('confirma');
	
	confirmar.addEventListener('click', jokenpo);
	
	let contador1 = 0;
	let contador2 = 0;
	let contador3 = 0;
	
	let contagem1 = document.getElementById('contador1');
	let contagem2 = document.getElementById('contador2');
	let contagem3 = document.getElementById('contador3');
		
	function jokenpo(){
			
	if ((player1.value  == 1 && player2.value == 3) || (player1.value == 2 && player2.value == 1) || (player1.value == 3 && player2.value == 2)){
	alert("Jogador 1 Ganhou");
				contador1++;
				contagem1.innerText = contador1;
		}else if (player1.value == player2.value){
			
				contador2++;
				contagem2.innerText = contador2;
			alert("Empate")
			}else{
				
				contador3++;
				contagem3.innerText = contador3;
				alert("Jogador 2 ganhou")	
	}
		player1.value = "";
		player2.value = "";
		
			}
