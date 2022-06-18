//Foresight project
let output = document.querySelector('.answer')
let input = document.querySelector('#input');
let button = document.querySelector('#button');


let answers = ['It is certain.',
        'It is decidedly so.',
        'Without a doubt.',
        'Yes, definitely.',
        'You may rely on it.',
        'As I see it, yes.',
        'Most likely.',
        'Outlook good.']
  
function foresight (arr){
    return arr[Math.floor(Math.random()*answers.length)];
}


input.onfocus = function(){
    this.value = '';
}

button.onclick = function(){
    input.value = 'another question?';
    output.innerHTML = foresight(answers);
}