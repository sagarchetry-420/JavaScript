// You order 1 coffee ($5.99) and 1 bagen ($2.95). Using math, calculate the total cost, and using concatenation, create the text: 'Total cost: $___' ( hint: calculate in cents to avoid inaccuracies)

'Total cost: $' + ( 599 + 295)/100


// Using template string and interpolation
`Total cost: $${( 599 + 295)/100}`


// Both Output : 'Total cost: $8.94'


// Displaying using alert function
alert(`Total cost: $${( 599 + 295)/100}`)


// Using multi-line string, create the text from above alert and add a line of text underneath: 'Thank you, come again!'. Display both lines in a popup.

alert(`Total cost: $${( 599 + 295)/100}
Thank you, come again!`)