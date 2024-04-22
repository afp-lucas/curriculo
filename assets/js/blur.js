// Função que reduz/borra o vídeo conforme o usuário rola a página
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        let scrollRatio = window.scrollY / window.innerHeight;
        let scaleRatio = 1 - scrollRatio * 0.2;
    
    
        let num = (window.scrollY / window.innerHeight) * 4;
        document.getElementById('videonome').style.filter = 'blur(' + num * 2 + 'px)';
        document.getElementById('videonome').style.transform = 'scale(' + scaleRatio + ')';
    });
});

