# ⚡ Guia de Início Rápido - INFOSEG Tecnologia

Comece a usar seu site em 5 minutos!

---

## 🚀 1. Abrir o Site

### Opção A: Abrir Diretamente (Mais Rápido)

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

### Opção B: Servir Localmente (Recomendado)

```bash
# Com Python 3
python -m http.server 8000

# Com Node.js
npx http-server

# Com PHP
php -S localhost:8000
```

Depois acesse: **http://localhost:8000**

---

## ⚙️ 2. Configurações Essenciais (5 minutos)

### 1️⃣ Adicionar Número WhatsApp

**Arquivo**: `index.html`  
**Procure por**: `<a href="https://wa.me/`

```html
<!-- Antes -->
<a href="https://wa.me/5511999999999" target="_blank" class="whatsapp-btn">

<!-- Depois (seu número) -->
<a href="https://wa.me/5511987654321" target="_blank" class="whatsapp-btn">
```

**Formato**: `55` + DDD + número (sem caracteres especiais)

### 2️⃣ Alterar Email e Telefone

**Arquivo**: `index.html`  
**Procure por**: `contato@infoseg.com.br` e `(11) 9999-9999`

```html
<!-- Email -->
<p>Email: seu-email@empresa.com.br</p>

<!-- Telefone -->
<p>Telefone: (11) 98765-4321</p>
```

### 3️⃣ Configurar Redes Sociais

**Arquivo**: `index.html`  
**Procure por**: `<a href="https://www.facebook.com"`

```html
<!-- Facebook -->
<a href="https://www.facebook.com/sua-pagina" target="_blank" class="social-btn facebook">

<!-- Instagram -->
<a href="https://www.instagram.com/seu-usuario" target="_blank" class="social-btn instagram">

<!-- LinkedIn -->
<a href="https://www.linkedin.com/company/sua-empresa" target="_blank" class="social-btn linkedin">

<!-- YouTube -->
<a href="https://www.youtube.com/@seu-canal" target="_blank" class="social-btn youtube">
```

---

## 🎨 3. Personalizar Cores (Opcional)

**Arquivo**: `css/styles.css`  
**Procure por**: `:root {`

```css
:root {
    --cor-primaria: #2ECC71;        /* Verde - ALTERE AQUI */
    --cor-primaria-escuro: #27AE60; /* Verde escuro */
    --cor-secundaria: #000000;      /* Preto */
}
```

### Cores Sugeridas

- Verde: `#2ECC71` (Atual - Segurança)
- Azul: `#3498DB` (Tecnologia)
- Vermelho: `#E74C3C` (Urgência)
- Laranja: `#E67E22` (Energia)

---

## 🖼️ 4. Trocar Imagens (Opcional)

### Encontrar Imagens

1. Acesse: https://www.pexels.com
2. Busque: "security", "technology", "workers"
3. Clique na imagem
4. Copie o link

### Substituir no HTML

**Arquivo**: `index.html`  
**Procure por**: `<img src="https://images.pexels.com/`

```html
<!-- Copie o link do Pexels e substitua -->
<img src="https://images.pexels.com/photos/[NOVO-ID]/pexels-photo-[NOVO-ID].jpeg?auto=compress&cs=tinysrgb&w=600" alt="Descrição">
```

---

## ✅ Checklist Rápido

- [ ] Abri o site no navegador
- [ ] Adicionei meu número WhatsApp
- [ ] Atualizei email e telefone
- [ ] Configurei redes sociais
- [ ] Testei em celular (F12 → Modo Mobile)
- [ ] Cliquei no botão WhatsApp
- [ ] Verifiquei todos os links

---

## 📱 5. Testar em Celular

### Testar Localmente

1. Abra o site no navegador
2. Pressione **F12** (ou Cmd+Option+I no Mac)
3. Clique no ícone de dispositivo móvel
4. Teste em diferentes tamanhos

### Testar em Celular Real

```bash
# Descubra seu IP local
ipconfig getifaddr en0  # macOS
hostname -I             # Linux
ipconfig                # Windows

# Acesse no celular
http://[seu-ip]:8000
```

---

## 🔍 6. Testar Links

Clique em cada seção para verificar:

- ✅ Menu de navegação
- ✅ Botão "Conheça Nossos Serviços"
- ✅ Botão WhatsApp flutuante
- ✅ Redes sociais
- ✅ Voltar ao topo

---

## 🚀 7. Próximos Passos

### Curto Prazo (Esta Semana)

1. Adicionar logo personalizado
2. Coletar depoimentos de clientes
3. Tirar fotos da equipe
4. Criar contas nas redes sociais

### Médio Prazo (Este Mês)

1. Publicar site online
2. Configurar Google Analytics
3. Criar Google My Business
4. Iniciar blog

### Longo Prazo (Próximos 3 Meses)

1. Publicar conteúdo regularmente
2. Iniciar publicidade paga
3. Criar programa de referência
4. Implementar email marketing

---

## 📚 Documentação Completa

Para mais detalhes, consulte:

- **README.md** - Documentação geral
- **CUSTOMIZACAO.md** - Como personalizar
- **MARKETING.md** - Estratégia de vendas

---

## 🆘 Problemas Comuns

### "Imagens não carregam"
- Verifique conexão com internet
- Recarregue a página (Ctrl+F5)
- Tente outro navegador

### "Menu não funciona em mobile"
- Limpe o cache (Ctrl+Shift+Delete)
- Teste em navegador privado
- Atualize o navegador

### "Estilos não aparecem"
- Verifique se o arquivo CSS existe
- Recarregue com Ctrl+F5
- Verifique o console (F12)

### "WhatsApp não abre"
- Verifique o número (formato: 55 + DDD + número)
- Teste o link: https://wa.me/5511987654321
- Certifique-se de ter WhatsApp instalado

---

## 💡 Dicas Importantes

✅ **Sempre teste em mobile** - 70% dos acessos são via celular  
✅ **Mantenha links atualizados** - Links mortos prejudicam SEO  
✅ **Atualize conteúdo regularmente** - Clientes gostam de novidades  
✅ **Responda rápido no WhatsApp** - Primeira resposta em até 1 hora  
✅ **Coletar depoimentos** - Aumentam confiança e conversão  

---

## 📞 Suporte Rápido

| Problema | Solução |
|----------|---------|
| Não consigo abrir | Use `python -m http.server 8000` |
| Cores estranhas | Limpe cache (Ctrl+Shift+Delete) |
| Imagens pixeladas | Aumente a resolução no Pexels |
| Links não funcionam | Verifique URLs no HTML |
| Mobile lento | Comprima as imagens |

---

## 🎯 Seu Próximo Passo

1. **Agora**: Personalize com seus dados
2. **Hoje**: Teste em celular
3. **Amanhã**: Publique online
4. **Semana que vem**: Comece a vender!

---

**Parabéns! Seu site está pronto! 🎉**

Qualquer dúvida, consulte os arquivos de documentação ou pesquise online.

---

**Última atualização**: 13 de Agosto de 2024

⚡ **Boa sorte com suas vendas!**
