// Code your solutions in this file
function writeCards(string_name, event_name){
			let card_array = [ ]
			for ( let i=0 ; i < string_name.length; i++ ){

				card_array.push(`Thank you, ${string_name[i]}, for the wonderful ${event_name} gift!`)
			}
			return card_array 
		}
			
			function countDown( startingNumber ) {
				while ( startingNumber > 0 ) {
					console.log( startingNumber );
					startingNumber -= 1;
				}
				console.log( startingNumber );
}