// ========================================
// INFOSEG TECNOLOGIA - SCRIPT PRINCIPAL
// Funcionalidades interativas do site
// ========================================

// ========== MENU DE CONTATO FLUTUANTE ==========
// Controla a abertura e fechamento do menu de contato
document.addEventListener('DOMContentLoaded', function() {
    const contactToggle = document.getElementById('contactToggle');
    const contactMenu = document.getElementById('contactMenu');
    
    // Abre/fecha o menu ao clicar no botão
    if (contactToggle) {
        contactToggle.addEventListener('click', function() {
            contactMenu.classList.toggle('active');
        });
    }
    
    // Fecha o menu ao clicar em uma opção de contato
    const contactOptions = document.querySelectorAll('.contact-option');
    contactOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Fecha o menu após 500ms
            setTimeout(() => {
                contactMenu.classList.remove('active');
            }, 500);
        });
    });
    
    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', function(event) {
        if (!contactMenu.contains(event.target)) {
            contactMenu.classList.remove('active');
        }
    });
});

// ========== SLIDESHOW DO HERO ==========
// Controla o carrossel de imagens do banner principal
let currentSlideIndex = 0;
const autoSlideInterval = 5000; // Muda de slide a cada 5 segundos
let autoSlideTimer;

// Função para mudar slide manualmente
function changeSlide(n) {
    showSlide(currentSlideIndex += n);
    resetAutoSlide();
}

// Função para ir para um slide específico
function currentSlide(n) {
    showSlide(currentSlideIndex = n);
    resetAutoSlide();
}

// Função para exibir o slide ativo
function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    
    // Volta ao primeiro slide se passar do último
    if (n >= slides.length) {
        currentSlideIndex = 0;
    }
    
    // Volta ao último slide se for negativo
    if (n < 0) {
        currentSlideIndex = slides.length - 1;
    }
    
    // Remove classe active de todos os slides e indicadores
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Adiciona classe active ao slide e indicador atual
    if (slides[currentSlideIndex]) {
        slides[currentSlideIndex].classList.add('active');
    }
    if (indicators[currentSlideIndex]) {
        indicators[currentSlideIndex].classList.add('active');
    }
}

// Função para auto-avançar slides
function autoSlide() {
    currentSlideIndex++;
    showSlide(currentSlideIndex);
}

// Função para resetar o timer do auto-slide
function resetAutoSlide() {
    clearInterval(autoSlideTimer);
    autoSlideTimer = setInterval(autoSlide, autoSlideInterval);
}

// Inicializa o slideshow quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    showSlide(currentSlideIndex);
    autoSlideTimer = setInterval(autoSlide, autoSlideInterval);
});

// ========== MENU HAMBURGER ========== 
// Controla a abertura e fechamento do menu em dispositivos móveis
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    // Abre/fecha o menu ao clicar no botão hamburger
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Fecha o menu ao clicar em um link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// ========== SCROLL SUAVE PARA SEÇÕES ==========
// Função para rolar suavemente até uma seção específica
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ========== EFEITO DE SCROLL NA NAVEGAÇÃO ==========
// Muda a cor da navbar ao fazer scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    // Se o usuário scrollou mais de 50px, adiciona sombra
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
});

// ========== ANIMAÇÃO DE CONTADORES (OPCIONAL) ==========
// Anima números quando entram na viewport
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// ========== OBSERVADOR DE INTERSECÇÃO ==========
// Detecta quando elementos entram na viewport para ativar animações
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Adiciona classe de animação quando o elemento entra na viewport
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observa todos os cards de serviços
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.servico-card, .cliente-card, .team-card');
    cards.forEach(card => {
        observer.observe(card);
    });
});

// ========== VALIDAÇÃO DE FORMULÁRIO (EXEMPLO) ==========
// Função para validar email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// ========== FUNÇÃO DE ENVIO DE FORMULÁRIO (EXEMPLO) ==========
// Pode ser integrada com um backend real
function enviarFormulario(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome')?.value;
    const email = document.getElementById('email')?.value;
    const mensagem = document.getElementById('mensagem')?.value;
    
    // Validação básica
    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    
    if (!validarEmail(email)) {
        alert('Por favor, insira um email válido!');
        return;
    }
    
    // Aqui você poderia enviar os dados para um servidor
    console.log('Formulário enviado:', { nome, email, mensagem });
    alert('Obrigado! Entraremos em contato em breve.');
    
    // Limpa o formulário
    event.target.reset();
}

// ========== EFEITO DE HOVER NOS CARDS ==========
// Adiciona efeito visual ao passar o mouse nos cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.servico-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// ========== SCROLL REVEAL ANIMATION ==========
// Anima elementos quando entram na viewport
function revealOnScroll() {
    const reveals = document.querySelectorAll('.servico-card, .cliente-card');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('animate-in');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// ========== BOTÃO VOLTAR AO TOPO ==========
// Cria e gerencia um botão para voltar ao topo da página
function criarBotaoTopo() {
    const botaoTopo = document.createElement('button');
    botaoTopo.innerHTML = '<i class="fas fa-arrow-up"></i>';
    botaoTopo.className = 'botao-topo';
    botaoTopo.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: #2ECC71;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.2rem;
        cursor: pointer;
        display: none;
        z-index: 998;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(botaoTopo);
    
    // Mostra/esconde o botão ao fazer scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            botaoTopo.style.display = 'flex';
            botaoTopo.style.alignItems = 'center';
            botaoTopo.style.justifyContent = 'center';
        } else {
            botaoTopo.style.display = 'none';
        }
    });
    
    // Volta ao topo ao clicar
    botaoTopo.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Efeito hover
    botaoTopo.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#27AE60';
        this.style.transform = 'scale(1.1)';
    });
    
    botaoTopo.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#2ECC71';
        this.style.transform = 'scale(1)';
    });
}

// Inicializa o botão de topo quando a página carrega
document.addEventListener('DOMContentLoaded', criarBotaoTopo);

// ========== LAZY LOADING DE IMAGENS ==========
// Carrega imagens apenas quando necessário
function iniciarLazyLoading() {
    const imagens = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    imagens.forEach(img => imageObserver.observe(img));
}

document.addEventListener('DOMContentLoaded', iniciarLazyLoading);

// ========== ANALYTICS E RASTREAMENTO (OPCIONAL) ==========
// Função para rastrear cliques em botões importantes
function rastrearClique(elemento, acao) {
    if (elemento) {
        elemento.addEventListener('click', function() {
            console.log(`Ação rastreada: ${acao}`);
            // Aqui você pode enviar dados para Google Analytics ou outro serviço
        });
    }
}

// ========== INICIALIZAÇÃO GERAL ==========
// Executa funções importantes quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    console.log('INFOSEG Tecnologia - Site carregado com sucesso!');
    
    // Rastreia cliques em botões principais
    const btnPrimario = document.querySelector('.btn-primary');
    if (btnPrimario) {
        rastrearClique(btnPrimario, 'Clique em CTA Principal');
    }
    
    // Rastreia cliques em links de redes sociais
    const socialLinks = document.querySelectorAll('.social-btn');
    socialLinks.forEach((link, index) => {
        rastrearClique(link, `Clique em Rede Social ${index + 1}`);
    });
    
    // Rastreia cliques no botão WhatsApp
    const whatsappBtn = document.getElementById('whatsappBtn');
    if (whatsappBtn) {
        rastrearClique(whatsappBtn, 'Clique em WhatsApp');
    }
});

// ========== SUPORTE A TEMAS (DARK MODE - OPCIONAL) ==========
// Função para alternar entre temas claro e escuro
function alternarTema() {
    const html = document.documentElement;
    const temaSalvo = localStorage.getItem('tema');
    
    if (temaSalvo === 'escuro') {
        html.style.colorScheme = 'dark';
    } else {
        html.style.colorScheme = 'light';
    }
}

// Inicializa o tema ao carregar
document.addEventListener('DOMContentLoaded', alternarTema);

// ========== DETECÇÃO DE DISPOSITIVO ==========
// Detecta se é mobile ou desktop
function ehMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// ========== PERFORMANCE - DEBOUNCE ==========
// Função auxiliar para otimizar eventos de scroll/resize
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ========== TRATAMENTO DE ERROS ==========
// Captura erros globais para melhor debugging
window.addEventListener('error', function(event) {
    console.error('Erro detectado:', event.error);
    // Aqui você pode enviar erros para um serviço de logging
});

// ========== PRELOAD DE RECURSOS ==========
// Precarrega recursos importantes para melhor performance
function precarregarRecursos() {
    // Precarrega fontes
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap';
    document.head.appendChild(link);
}

document.addEventListener('DOMContentLoaded', precarregarRecursos);

// ========== ACESSIBILIDADE ==========
// Melhora a acessibilidade do site
function melhorarAcessibilidade() {
    // Adiciona atributos ARIA em elementos importantes
    const botoes = document.querySelectorAll('.btn');
    botoes.forEach(botao => {
        if (!botao.getAttribute('aria-label')) {
            botao.setAttribute('aria-label', botao.textContent);
        }
    });
}

document.addEventListener('DOMContentLoaded', melhorarAcessibilidade);

console.log('✅ INFOSEG Tecnologia - Todos os scripts carregados com sucesso!');
