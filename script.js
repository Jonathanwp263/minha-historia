/*Função para identificar scroll do mouse*/
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('main-header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 5) {
            header.classList.add('small');
        } else {
            header.classList.remove('small');
        }
    });
});

/*funções dos botões da tela*/
document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
