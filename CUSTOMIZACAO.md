# 🎨 Guia de Customização - INFOSEG Tecnologia

Este documento explica como personalizar o site de acordo com suas necessidades.

---

## 📱 1. Configurações Básicas

### Alterar Nome e Contato da Empresa

**Arquivo**: `index.html`

```html
<!-- Linha ~20: Logo -->
<div class="logo">
    <h1>INFOSEG</h1>
    <p class="logo-subtitle">TECNOLOGIA</p>
</div>

<!-- Linha ~410: Footer -->
<p>Email: contato@infoseg.com.br</p>
<p>Telefone: (11) 9999-9999</p>

<!-- Linha ~430: WhatsApp -->
<a href="https://wa.me/5511999999999" target="_blank" class="whatsapp-btn">
```

**Arquivo**: `config.json`

```json
{
  "empresa": {
    "nome": "INFOSEG Tecnologia",
    "email": "contato@infoseg.com.br",
    "telefone": "(11) 9999-9999",
    "whatsapp": "5511999999999"
  }
}
```

---

## 🎨 2. Alterar Cores

### Método 1: Editar CSS (Recomendado)

**Arquivo**: `css/styles.css` (Linhas 6-18)

```css
:root {
    --cor-primaria: #2ECC71;        /* Verde - ALTERE AQUI */
    --cor-primaria-escuro: #27AE60; /* Verde escuro */
    --cor-secundaria: #000000;      /* Preto */
    --cor-texto: #333333;           /* Cinza escuro */
    --cor-texto-claro: #666666;     /* Cinza médio */
    --cor-fundo: #FFFFFF;           /* Branco */
    --cor-fundo-cinza: #F5F5F5;     /* Cinza claro */
    --cor-borda: #DDDDDD;           /* Borda cinza */
}
```

### Cores Sugeridas

| Tema | Primária | Secundária | Uso |
|------|----------|-----------|-----|
| Verde (Atual) | #2ECC71 | #000000 | Segurança, Confiança |
| Azul | #3498DB | #1C3A47 | Tecnologia, Profissional |
| Vermelho | #E74C3C | #2C3E50 | Urgência, Ação |
| Laranja | #E67E22 | #34495E | Energia, Inovação |

---

## 📝 3. Adicionar/Editar Serviços

### Adicionar Novo Serviço

**Arquivo**: `index.html` (Seção Serviços)

```html
<!-- Copie este bloco e customize -->
<div class="servico-card">
    <div class="servico-icon">
        <i class="fas fa-[ICONE]"></i>
    </div>
    <h3>Nome do Serviço</h3>
    <p>Descrição breve do serviço...</p>
    <ul class="servico-features">
        <li><i class="fas fa-check"></i> Recurso 1</li>
        <li><i class="fas fa-check"></i> Recurso 2</li>
        <li><i class="fas fa-check"></i> Recurso 3</li>
    </ul>
</div>
```

### Ícones Disponíveis (Font Awesome)

- `fa-camera` - Câmera
- `fa-bolt` - Raio
- `fa-face-smile` - Rosto
- `fa-bell` - Sino
- `fa-key` - Chave
- `fa-headset` - Fone
- `fa-shield-alt` - Escudo
- `fa-lock` - Cadeado
- `fa-microchip` - Chip
- `fa-cloud` - Nuvem
- `fa-mobile-alt` - Celular

**Veja mais em**: https://fontawesome.com/icons

---

## 🖼️ 4. Alterar Imagens

### Encontrar Imagens no Pexels

1. Acesse: https://www.pexels.com
2. Busque por: "security", "technology", "workers", "installation", "team"
3. Clique na imagem
4. Copie o link direto

### Substituir Imagens no HTML

**Arquivo**: `index.html` (Seção Team)

```html
<!-- Antes -->
<img src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Técnico instalando câmera">

<!-- Depois -->
<img src="https://images.pexels.com/photos/[NOVO-ID]/pexels-photo-[NOVO-ID].jpeg?auto=compress&cs=tinysrgb&w=600" alt="Sua descrição">
```

### Dicas para Escolher Imagens

✅ Imagens de pessoas trabalhando  
✅ Profissionais em ação  
✅ Ambientes corporativos  
✅ Tecnologia e segurança  
✅ Resolução mínima: 600px  

---

## 🔗 5. Configurar Redes Sociais

**Arquivo**: `index.html` (Seção Redes Sociais)

```html
<a href="https://www.facebook.com/SEU-USUARIO" target="_blank" class="social-btn facebook">
    <i class="fab fa-facebook-f"></i>
    <span>Facebook</span>
</a>

<a href="https://www.instagram.com/SEU-USUARIO" target="_blank" class="social-btn instagram">
    <i class="fab fa-instagram"></i>
    <span>Instagram</span>
</a>

<a href="https://www.linkedin.com/company/SEU-EMPRESA" target="_blank" class="social-btn linkedin">
    <i class="fab fa-linkedin-in"></i>
    <span>LinkedIn</span>
</a>

<a href="https://www.youtube.com/@SEU-CANAL" target="_blank" class="social-btn youtube">
    <i class="fab fa-youtube"></i>
    <span>YouTube</span>
</a>
```

---

## 👥 6. Adicionar/Editar Clientes (Depoimentos)

**Arquivo**: `index.html` (Seção Clientes)

```html
<div class="cliente-card">
    <div class="stars">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
    </div>
    <p class="cliente-texto">"Seu depoimento aqui..."</p>
    <h4 class="cliente-nome">Nome do Cliente</h4>
    <p class="cliente-empresa">Cargo/Empresa</p>
</div>
```

### Para Menos Estrelas

```html
<!-- 4 Estrelas -->
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="far fa-star"></i>  <!-- Vazia -->
```

---

## 🏢 7. Adicionar/Editar Parceiros

**Arquivo**: `index.html` (Seção Parceiros)

```html
<div class="parceiro-logo">
    <i class="fas fa-[ICONE]"></i>
    <p>Nome do Parceiro</p>
</div>
```

---

## 📱 8. Otimizar para Mobile

### Testar Responsividade

```bash
# Abra no navegador e pressione F12
# Clique no ícone de dispositivo móvel
# Teste em diferentes tamanhos
```

### Breakpoints Principais

```css
/* Tablets */
@media (max-width: 768px) { ... }

/* Celulares */
@media (max-width: 480px) { ... }
```

---

## ⚡ 9. Performance

### Otimizar Imagens

1. Comprima as imagens antes de usar
2. Use formatos modernos (WebP)
3. Especifique dimensões (width/height)

```html
<img src="imagem.jpg" alt="Descrição" width="600" height="400">
```

### Minificar CSS e JS

```bash
# Online: https://minifier.org
# Ou use ferramentas locais
```

---

## 🔍 10. SEO

### Alterar Meta Tags

**Arquivo**: `index.html` (Head)

```html
<meta name="description" content="Sua descrição aqui">
<meta name="keywords" content="palavra1, palavra2, palavra3">
<title>Seu Título Aqui</title>
```

### Adicionar Schema Markup

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "INFOSEG Tecnologia",
  "image": "logo.png",
  "description": "Soluções em segurança",
  "telephone": "(11) 9999-9999",
  "email": "contato@infoseg.com.br"
}
</script>
```

---

## 🌐 11. Adicionar Google Analytics

**Arquivo**: `index.html` (antes de `</head>`)

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🎬 12. Adicionar Vídeos

### Adicionar Vídeo do YouTube

```html
<iframe width="100%" height="400" 
    src="https://www.youtube.com/embed/VIDEO_ID" 
    frameborder="0" allowfullscreen>
</iframe>
```

---

## 📧 13. Adicionar Formulário de Contato

### Criar Formulário Simples

```html
<form id="contatoForm" onsubmit="enviarFormulario(event)">
    <input type="text" id="nome" placeholder="Seu Nome" required>
    <input type="email" id="email" placeholder="Seu Email" required>
    <textarea id="mensagem" placeholder="Sua Mensagem" required></textarea>
    <button type="submit" class="btn btn-primary">Enviar</button>
</form>
```

### Integrar com Serviço de Email

- **Formspree**: https://formspree.io
- **Netlify Forms**: https://www.netlify.com/products/forms/
- **EmailJS**: https://www.emailjs.com

---

## 🎯 14. Customizações Avançadas

### Alterar Fonte

**Arquivo**: `css/styles.css`

```css
@import url('https://fonts.googleapis.com/css2?family=NOVA-FONTE:wght@400;600;700&display=swap');

:root {
    --fonte-principal: 'Nova Fonte', sans-serif;
}
```

### Adicionar Dark Mode

```css
@media (prefers-color-scheme: dark) {
    body {
        background-color: #1a1a1a;
        color: #ffffff;
    }
}
```

### Adicionar Animações Customizadas

```css
@keyframes minha-animacao {
    from { opacity: 0; }
    to { opacity: 1; }
}

.elemento {
    animation: minha-animacao 1s ease;
}
```

---

## ✅ Checklist de Customização

- [ ] Alterar nome da empresa
- [ ] Adicionar número WhatsApp
- [ ] Configurar email de contato
- [ ] Alterar cores da marca
- [ ] Adicionar logo personalizado
- [ ] Substituir imagens do Pexels
- [ ] Configurar redes sociais
- [ ] Adicionar depoimentos reais
- [ ] Adicionar parceiros reais
- [ ] Otimizar para SEO
- [ ] Testar em mobile
- [ ] Adicionar Google Analytics
- [ ] Fazer deploy

---

## 🆘 Dúvidas Frequentes

**P: Como adicionar mais de 6 serviços?**  
R: Copie o bloco `.servico-card` quantas vezes precisar. O grid se adapta automaticamente.

**P: Posso usar minhas próprias imagens?**  
R: Sim! Crie uma pasta `assets/images/` e substitua os links do Pexels.

**P: Como mudar o layout?**  
R: Edite o CSS em `css/styles.css`. Recomendo conhecer CSS Grid e Flexbox.

**P: O site funciona sem internet?**  
R: Não, pois usa Google Fonts e Font Awesome. Para offline, baixe os recursos.

**P: Posso vender este site?**  
R: Sim, é seu! Customize e use como desejar.

---

## 📞 Suporte

Para dúvidas sobre customização:

1. Consulte o README.md
2. Verifique a documentação do Font Awesome
3. Pesquise em CSS-Tricks.com
4. Procure em Stack Overflow

---

**Última atualização**: 13 de Agosto de 2024

🎨 **Divirta-se customizando seu site!**
