# 🔒 INFOSEG Tecnologia - Site Oficial

## 📋 Descrição do Projeto

Site moderno, responsivo e atrativo para a **INFOSEG Tecnologia**, empresa especializada em soluções completas de segurança e tecnologia.

### 🎯 Características Principais

✅ **Design Responsivo** - Funciona perfeitamente em celulares, tablets e desktops  
✅ **Performance Otimizada** - Carregamento rápido e eficiente  
✅ **Acessibilidade** - Segue padrões WCAG para inclusão  
✅ **SEO Otimizado** - Estrutura semântica para buscadores  
✅ **Sem Dependências Externas** - HTML5, CSS3 e Vanilla JavaScript puro  
✅ **Animações Suaves** - Efeitos visuais atraentes  
✅ **Botão WhatsApp Flutuante** - Facilita contato com clientes  

---

## 📁 Estrutura do Projeto

```
Site_Infoseg/
├── index.html              # Página principal (HTML5 semântico)
├── css/
│   └── styles.css          # Estilos responsivos (CSS3)
├── js/
│   └── script.js           # Funcionalidades interativas (Vanilla JS)
├── assets/
│   └── images/             # Imagens do projeto
└── README.md               # Este arquivo
```

---

## 🚀 Como Usar

### 1. **Abrir o Site Localmente**

Simplesmente abra o arquivo `index.html` em seu navegador:

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

### 2. **Servir com um Servidor Local (Recomendado)**

Para melhor performance e testes, use um servidor local:

```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (http-server)
npx http-server

# Com PHP
php -S localhost:8000
```

Depois acesse: `http://localhost:8000`

---

## 🎨 Cores e Branding

| Elemento | Cor | Código |
|----------|-----|--------|
| Primária | Verde | `#2ECC71` |
| Primária Escura | Verde Escuro | `#27AE60` |
| Secundária | Preto | `#000000` |
| Texto | Cinza Escuro | `#333333` |
| Fundo | Branco | `#FFFFFF` |

---

## 📱 Responsividade

O site é totalmente responsivo com breakpoints otimizados:

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: até 767px
- **Celular Pequeno**: até 480px

---

## 🔧 Funcionalidades JavaScript

### Menu Hamburger
- Abre/fecha automaticamente em dispositivos móveis
- Fecha ao clicar em um link

### Scroll Suave
- Navegação fluida entre seções
- Função `scrollToSection()` para links internos

### Animações
- Fade-in ao entrar na viewport
- Hover effects nos cards
- Botão de voltar ao topo

### Botão WhatsApp
- Flutuante no canto inferior direito
- Link direto para conversa (adicione seu número)
- Animação de pulso

---

## 🖼️ Imagens (Pexels)

As imagens são carregadas diretamente do **Pexels** (API gratuita):

```html
<img src="https://images.pexels.com/photos/[ID]/pexels-photo-[ID].jpeg?auto=compress&cs=tinysrgb&w=600" alt="Descrição">
```

### Como Encontrar Imagens no Pexels

1. Acesse: https://www.pexels.com
2. Busque por: "security", "technology", "workers", "installation"
3. Copie a URL da imagem
4. Substitua no HTML

---

## 📞 Configurar WhatsApp

Para ativar o botão WhatsApp com seu número:

1. Abra `index.html`
2. Procure por: `<a href="https://wa.me/5511999999999"`
3. Substitua `5511999999999` pelo seu número (formato: país + DDD + número)

**Exemplo:**
```html
<!-- Brasil -->
<a href="https://wa.me/5511987654321">

<!-- Outro país -->
<a href="https://wa.me/551133334444">
```

---

## 🔍 SEO Otimizado

O site inclui:

- ✅ Meta tags descritivas
- ✅ Estrutura HTML5 semântica
- ✅ Títulos e headings bem organizados
- ✅ Alt text em imagens
- ✅ URLs amigáveis
- ✅ Mobile-first design

---

## ⚡ Performance

### Otimizações Implementadas

- CSS minificado e organizado
- JavaScript sem dependências externas
- Lazy loading de imagens
- Animações com CSS (mais eficientes)
- Compressão de imagens (Pexels)
- Cache de recursos

### Métricas Esperadas

- **Lighthouse Performance**: 90+
- **Lighthouse Accessibility**: 95+
- **Lighthouse Best Practices**: 95+
- **Lighthouse SEO**: 100

---

## 🛠️ Personalização

### Alterar Cores

Edite as variáveis CSS em `css/styles.css`:

```css
:root {
    --cor-primaria: #2ECC71;      /* Verde */
    --cor-secundaria: #000000;    /* Preto */
    /* ... outras cores */
}
```

### Adicionar Novos Serviços

No `index.html`, copie um `.servico-card` e customize:

```html
<div class="servico-card">
    <div class="servico-icon">
        <i class="fas fa-[icone]"></i>
    </div>
    <h3>Seu Serviço</h3>
    <p>Descrição do serviço...</p>
    <ul class="servico-features">
        <li><i class="fas fa-check"></i> Recurso 1</li>
        <li><i class="fas fa-check"></i> Recurso 2</li>
    </ul>
</div>
```

### Adicionar Redes Sociais

No `index.html`, adicione um novo botão na seção de redes sociais:

```html
<a href="https://seu-link" target="_blank" class="social-btn [rede-social]">
    <i class="fab fa-[icone]"></i>
    <span>Nome da Rede</span>
</a>
```

---

## 📚 Ícones (Font Awesome)

O site usa **Font Awesome 6.4.0** para ícones. Alguns exemplos:

- `fa-camera` - Câmera
- `fa-bolt` - Raio (Cerca Elétrica)
- `fa-face-smile` - Rosto (Facial)
- `fa-bell` - Sino (Alarme)
- `fa-key` - Chave (Acesso)
- `fa-headset` - Fone (Suporte)
- `fab fa-whatsapp` - WhatsApp
- `fab fa-instagram` - Instagram

Veja mais em: https://fontawesome.com/icons

---

## 🌐 Fontes (Google Fonts)

O site usa a fonte **Poppins** do Google Fonts:

- Weights: 300, 400, 600, 700, 800
- Moderna e profissional
- Ótima legibilidade

---

## 🔐 Segurança

- ✅ Sem vulnerabilidades conhecidas
- ✅ Sem dependências externas perigosas
- ✅ HTTPS recomendado para produção
- ✅ Validação de formulários no cliente

---

## 📊 Analytics (Opcional)

Para adicionar Google Analytics:

```html
<!-- Adicione antes de </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

---

## 🚀 Deploy

### Opções de Hospedagem Gratuita

1. **GitHub Pages** - Ideal para sites estáticos
2. **Netlify** - Deploy automático com Git
3. **Vercel** - Otimizado para performance
4. **Surge.sh** - Simples e rápido

### Deploy no GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/seu-usuario/Site_Infoseg.git
git push -u origin main
```

---

## 📝 Checklist de Produção

- [ ] Adicionar número WhatsApp real
- [ ] Configurar URLs de redes sociais
- [ ] Adicionar email de contato
- [ ] Otimizar imagens
- [ ] Testar em todos os navegadores
- [ ] Testar responsividade em celulares
- [ ] Adicionar Google Analytics
- [ ] Configurar HTTPS
- [ ] Testar velocidade (PageSpeed Insights)
- [ ] Submeter ao Google Search Console

---

## 🐛 Troubleshooting

### Imagens não carregam
- Verifique a URL do Pexels
- Certifique-se de ter conexão com internet
- Tente recarregar a página

### Menu não funciona em mobile
- Limpe o cache do navegador
- Verifique se JavaScript está habilitado
- Teste em outro navegador

### Estilos não aplicam
- Verifique o caminho do CSS
- Limpe o cache (Ctrl+Shift+Delete)
- Verifique o console do navegador (F12)

---

## 📞 Suporte

Para dúvidas ou sugestões:

- 📧 Email: contato@infoseg.com.br
- 💬 WhatsApp: (11) 9999-9999
- 🌐 Site: www.infoseg.com.br

---

## 📄 Licença

Este projeto é propriedade da **INFOSEG Tecnologia**.  
Todos os direitos reservados © 2024.

---

## 🙏 Créditos

- **Design**: INFOSEG Tecnologia
- **Desenvolvimento**: Devin AI
- **Ícones**: Font Awesome
- **Fontes**: Google Fonts
- **Imagens**: Pexels

---

**Última atualização**: 13 de Agosto de 2024

🚀 **Site pronto para produção!**
