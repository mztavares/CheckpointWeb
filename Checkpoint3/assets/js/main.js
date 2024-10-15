// Seleciona todos os botões de recursos
const buttons = document.querySelectorAll('resource-buttons');
const title = document.getElementById('resource-title');
const img = document.getElementById('resource-img');

// Mapeamento dos conteúdos com base no botão
const contentMap = {
    criacao: {
        title: 'Crie e edite ou faça upload dos seus contratos',
        img: "./assets/img/imagens/criacao.webp"
    },
    ciclo: {
        title: 'Gerencie o ciclo de vida dos seus contratos',
        img: "./assets/img/imagens/ciclo-de-vida.webp"
    },
    formularios: {
        title: 'Automatize processos com formulários personalizados',
        img: "./assets/img/imagens/formularios.webp"
    },
    dados: {
        title: 'Acesse e analise os dados de seus contratos',
        img: "./assets/videos/Landing Page -Explicação2024-09-28 23-07-28.mp4"
    },
    alertas: {
        title: 'Receba alertas e notificações importantes',
        img: './assets/img/imagens/alertas.webp'
    },
    armazenamento: {
        title: 'Armazene seus contratos com segurança',
        img: './assets/img/imagens/armazenamento.webp'
    },
    assinatura: {
        title: 'Assine contratos de forma digital',
        img: './assets/img/imagens/assinatura.webp'
    },
    api: {
        title: 'Integre a API e expanda suas possibilidades',
        img: './assets/img/imagens/contraktor-api.webp'
    }
};

// Função para alternar conteúdo
function changeContent(button) {
    // Remove a classe "active" de todos os botões
    buttons.forEach(btn => btn.classList.remove('active'));

    // Adiciona a classe "active" ao botão clicado
    button.classList.add('active');

    // Obtém o conteúdo relacionado ao botão clicado
    const contentKey = button.getAttribute('data-content');
    const content = contentMap[contentKey];

    // Atualiza o título e a imagem
    title.textContent = content.title;
    img.src = content.img;
}

// Adiciona o evento de clique em todos os botões
buttons.forEach(button => {
    button.addEventListener('click', () => changeContent(button));
});

document.getElementById('showContentBtn').addEventListener('click', function() {
    var content = document.getElementById('content');

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        setTimeout(function() {
            content.classList.add('show');
        }, 10); // Pequeno atraso para a transição funcionar
    } else {
        content.classList.remove('show');
        setTimeout(function() {
            content.classList.add('hidden');
        }, 500); // Aguarda o fim da animação antes de esconder
    }
});
