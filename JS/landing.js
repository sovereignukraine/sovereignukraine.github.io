let projects = document.querySelectorAll('.project');

for(let project of projects){
    let preview = project.querySelector('.preview')
project.onclick = function(event){
    if(event.target.tagName === 'H3'){
        event.target.classList.toggle('arrow_collaps');
        preview.classList.toggle('active');
    };
    if(event.target.tagName ==='IMG'){
        event.target.classList.toggle('large');
    }
}
}