// Mensagem de boas-vindas no console
console.log("Bem-vindo à Oak Smiths!");

// Quando a página carregar, animar o texto principal
document.addEventListener('DOMContentLoaded', function() {
    const heroText = document.querySelector('.hero');
    heroText.style.opacity = 0;
    heroText.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        heroText.style.transition = 'opacity 1s ease, transform 1s ease';
        heroText.style.opacity = 1;
        heroText.style.transform = 'translateY(0)';
    }, 500); // começa 0,5s depois que a página carrega
});

// Função de clique no menu (futuro)
const menuLinks = document.querySelectorAll('nav ul li a');

menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        alert(`Você clicou em: ${this.textContent}`);
    });
});
