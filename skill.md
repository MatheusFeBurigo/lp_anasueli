# Skill: Conversão de Landing Pages HTML → Projeto Node.js

## Objetivo

Receber arquivos HTML brutos (gerados por IA) contendo Landing Pages de **Workshop** e **Quiz**, extrair todo o conteúdo textual, e reconstruir como um **projeto Node.js organizado por componentes**, respeitando rigorosamente a documentação de estrutura visual e os padrões definidos abaixo.

---

## 1. Contexto do Projeto

Cada pasta de trabalho conterá **sempre** dois tipos de página:

```
/projeto-cliente/
├── Comunicação/          ← Landing Page do Workshop
│   ├── index.html
│   ├── styles/
│   │   └── main.css
│   ├── scripts/
│   │   └── main.js
│   └── assets/
│       └── (imagens, fontes, ícones)
│
├── Quiz/                 ← Landing Page do Quiz
│   ├── index.html
│   ├── styles/
│   │   └── main.css
│   ├── scripts/
│   │   └── main.js
│   └── assets/
│       └── (imagens, fontes, ícones)
│
├── shared/               ← Recursos compartilhados (opcional)
│   ├── fonts/
│   └── icons/
│
├── package.json
├── server.js             ← Servidor Express/http-server simples
└── README.md
```

### Regras de estrutura

- **Comunicação/** = pasta do Workshop (página de venda)
- **Quiz/** = pasta do Quiz (página interativa de diagnóstico)
- Ambas são páginas **separadas** mas vivem no **mesmo aplicativo Node**
- O `server.js` serve ambas as pastas como rotas estáticas
- CSS, JS e assets devem estar **separados** do HTML (nunca inline/embedded)

---

## 2. Processo de Conversão (Passo a Passo)

### Passo 1: Identificar os arquivos HTML na pasta de trabalho

Ao receber os arquivos, identifique:
- Qual HTML é o **Workshop** (geralmente contém: hero com título do workshop, seções de dor, método, bio do especialista, pricing com lotes, FAQ, CTA final)
- Qual HTML é o **Quiz** (geralmente contém: tela intro, tela de perguntas, tela de resultado com score)

### Passo 2: Extrair TODO o conteúdo textual

Para cada HTML, extraia **todos** os textos existentes preservando:
- Títulos, subtítulos, parágrafos, labels, badges, CTAs
- Perguntas e opções do quiz
- Itens de lista, FAQs (pergunta + resposta)
- Textos de pricing, bônus, garantia
- Depoimentos, credenciais, bio
- Textos do footer e disclaimers
- Textos de elementos interativos (botões, countdown labels)

**REGRA CRÍTICA:** Nunca inventar, alterar ou reescrever textos. Usar exatamente o que está no HTML original. A única exceção é quando um componente da documentação de estrutura precisa ser adicionado e não possui texto correspondente no HTML original — nesse caso, usar texto placeholder genérico marcado com `[INSERIR TEXTO]`.

### Passo 3: Limpar os textos extraídos

Aplicar as seguintes limpezas em TODOS os textos:

#### 3.1 Remover traços de hifenização/quebra

Muitos textos vêm com traços `-` inseridos incorretamente (artefato da geração por IA). Remover todos os traços que estejam **quebrando palavras** ou inseridos **no meio de frases** sem função gramatical.

**Exemplos de remoção:**
```
ERRADO: "comuni-cação"         → CORRETO: "comunicação"
ERRADO: "você não pre-cisa"    → CORRETO: "você não precisa"
ERRADO: "estraté-gia clínica"  → CORRETO: "estratégia clínica"
ERRADO: "auto-sabotagem"       → MANTER: "autossabotagem" (avaliar se é hífen real)
```

**Atenção:** Nem todo traço deve ser removido. Manter traços que são:
- Hífens gramaticais legítimos: "pós-graduação", "auto-conhecimento", "bem-estar"
- Travessões em frases: "— isso não é drama"
- Separadores intencionais em labels: "Sala + Ebook + Gravação"

#### 3.2 Substituir emojis por ícones da biblioteca

**NUNCA** usar emojis no projeto final. Substituir todos por ícones SVG de uma biblioteca de ícones.

**Biblioteca padrão:** [Heroicons](https://heroicons.com/) (outline, 24x24)

Mapeamento de substituição:

| Emoji | Ícone Heroicons | Classe sugerida |
|-------|----------------|-----------------|
| 📅 | `calendar-days` | `.icon-calendar` |
| 💻 | `computer-desktop` | `.icon-desktop` |
| ⏱️ | `clock` | `.icon-clock` |
| 🎥 | `video-camera` | `.icon-video` |
| 🛡️ | `shield-check` | `.icon-shield` |
| ⚡ | `bolt` | `.icon-bolt` |
| 🔒 | `lock-closed` | `.icon-lock` |
| 📋 | `clipboard-document-list` | `.icon-clipboard` |
| 🧠 | `light-bulb` | `.icon-brain` |
| 💬 | `chat-bubble-left-right` | `.icon-chat` |
| ✓ / ✔️ | `check` | `.icon-check` |
| ✗ / ❌ | `x-mark` | `.icon-x` |
| ⚠️ | `exclamation-triangle` | `.icon-warning` |
| 🔬 | `magnifying-glass` | `.icon-search` |
| 📖 | `book-open` | `.icon-book` |
| 🎓 | `academic-cap` | `.icon-academic` |
| ★ | `star` | `.icon-star` |
| + (FAQ toggle) | `plus` / `chevron-down` | `.icon-toggle` |
| ← (voltar) | `arrow-left` | `.icon-back` |
| → (avançar) | `arrow-right` | `.icon-forward` |
| 🧬 | `beaker` | `.icon-beaker` |
| ❤️ | `heart` | `.icon-heart` |
| 🪞 | `eye` | `.icon-eye` |
| 😴 | `moon` | `.icon-moon` |
| 🏋️ | `fire` | `.icon-fire` |
| 🚨 | `exclamation-circle` | `.icon-alert` |
| 🔴 | `exclamation-triangle` | `.icon-danger` |
| ↩ | `arrow-uturn-left` | `.icon-retry` |
| 👨‍⚕️ | Placeholder imagem | `.avatar-placeholder` |

**Implementação:** Usar SVGs inline ou criar um arquivo `icons.js` que exporta os SVGs como template literals para reutilização.

#### 3.3 Corrigir entidades HTML mal formatadas

Converter entidades HTML para caracteres reais:
```
&mdash;  → —
&eacute; → é
&aacute; → á
&ccedil; → ç
&atilde; → ã
&oacute; → ó
&uacute; → ú
&iacute; → í
&otilde; → õ
&amp;    → & (quando não for código)
&nbsp;   → espaço normal
```

---

## 3. Componentes do Workshop (Página de Venda)

A página de Workshop **DEVE** conter todos os componentes listados abaixo, na ordem apresentada. Se o HTML original não possui algum destes componentes, **ADICIONAR** usando a estrutura padrão com texto `[INSERIR TEXTO]`. Se o HTML original possui componentes extras não listados aqui, **MANTER** todos eles.

### 3.1 Barra de Anúncio (Announce Bar)
- Barra fixa no topo com urgência/oferta
- Fundo dourado/destaque, texto escuro
- Exemplo: "Lote 1: de R$ 497 por R$ 97 — Vagas limitadas"
- Ícone: `bolt` (substituindo ⚡)

### 3.2 Hero Section
- Badge/eyebrow: tipo do evento ("Workshop Online ao Vivo")
- Título principal (h1): fonte display, grande
- Subtítulo descritivo
- Meta items: Data, Formato, Duração, Replay (com ícones, não emojis)
- Countdown timer (dias, horas, minutos, segundos)
- Botões CTA: primário (inscrição) + secundário (falar com equipe)

### 3.3 Barra de Prova Social (Proof Bar)
- Números de credibilidade do especialista
- Formato: número grande + label pequeno
- Exemplo: "+800 Pacientes", "+15 Anos", "Ciência Sem achismo"

### 3.4 Seção de Dores/Problemas
- Label da seção + título
- Lista de itens com ícone X vermelho (border-left vermelha)
- Cada item descreve uma dor/situação do público

### 3.5 Faixa de Manifesto (Manifesto Strip)
- Fundo dourado/gradiente
- Citação grande em fonte display, itálico
- Atribuição ao especialista
- Exemplo: "Sofrer não é maturidade. É desinformação hormonal."

### 3.6 Seção "Para Quem É" (For Whom)
- Grid de cards com ícone check + título + descrição
- Cada card descreve um perfil do público-alvo

### 3.7 Seção de Conteúdo/Módulos
- Cards numerados com título + descrição + tags
- Número em destaque lateral (gradiente dourado)
- Cada card = um módulo/tema do workshop

### 3.8 Seção Bio do Especialista
- Layout grid: foto + informações
- Nome, credenciais, descrição
- Badge com título/CRM
- Lista de credenciais com ícone diamante/marcador

### 3.9 Seção de Bônus
- Grid de cards de bônus
- Cada card: ícone + título + descrição + valor estimado
- Ícones devem ser Heroicons (não emojis)

### 3.10 Seção de Depoimentos (se houver)
- Grid de cards com estrelas + texto + nome + meta

### 3.11 Seção de Pricing (Inscrição)
- **Formato com 2 Lotes lado a lado** (conforme documentação visual):
  - **Lote 1 (Pacote Completo):** badge "Melhor oferta", preço de/por, lista de includes com checkmarks, itens exclusivos destacados, botão CTA primário, selo de segurança
  - **Lote 2 (Acesso básico):** preço de/por, lista de includes (itens não inclusos com X e opacidade reduzida), botão CTA secundário, selo de segurança
- Nota de urgência abaixo dos cards
- Box de aviso/disclaimer
- Box de garantia (ícone shield + título + texto)

**REGRA IMPORTANTE:** A seção de pricing deve SEMPRE seguir o formato de 2 lotes lado a lado conforme a documentação visual (PDF), mesmo que o HTML original venha com formato diferente (card único, lista simples, etc). Se o HTML original só tem 1 lote, manter apenas 1 mas no formato de card correto.

### 3.12 Seção Countdown (se separada do hero)
- Título de urgência
- Timer com dias/horas/minutos/segundos
- CTA final

### 3.13 Seção FAQ
- Label + título da seção
- Lista accordion: pergunta clicável + resposta expansível
- Ícone toggle: `+` → rotaciona para `×` quando aberto (ou chevron)

### 3.14 CTA Final
- Seção de encerramento com background diferenciado
- Título impactante + parágrafo + botão CTA grande
- Nota de garantia/segurança abaixo

### 3.15 Footer
- Copyright + nome do especialista
- Disclaimer educacional
- Links: Política de Privacidade, Termos de Uso

### 3.16 Sticky Bar (Bottom)
- Barra fixa no bottom
- Nome do workshop + preço do lote atual
- Botão CTA compacto
- Backdrop-filter blur

---

## 4. Componentes do Quiz (Página de Diagnóstico)

A página de Quiz **DEVE** conter todos os componentes listados abaixo. Se algum não existir no HTML original, **ADICIONAR** com a estrutura padrão.

### 4.1 Tela Intro
- Card centralizado com:
  - Ícone temático (Heroicon, não emoji)
  - Eyebrow com nome do especialista
  - Título do quiz (h1)
  - Descrição explicativa
  - Box "como funciona" (passos numerados)
  - Botão "Começar o Quiz"
  - Disclaimer educacional

### 4.2 Tela de Quiz (Perguntas)
- Barra de progresso: label da seção + score atual + barra visual
- Card de pergunta:
  - Título da categoria/pergunta (h2)
  - Hint de instrução
  - Lista de opções (checkbox/radio) com:
    - Checkbox visual customizado
    - Título do item
    - Descrição do item (quando houver)
    - Estado checked com mudança de cor/borda
  - Navegação: botão voltar + botão próxima seção/ver resultado
- Footer com nome do especialista

### 4.3 Tela de Resultado
Deve conter os seguintes sub-componentes:

#### 4.3.1 Card de Score
- Ícone de resultado
- Label "Seu Resultado" / "Seu Diagnóstico"
- Score grande (número ou porcentagem)
- Indicador "de X sinais marcados"
- Box de nível com cor dinâmica:
  - Nome do nível
  - Descrição
  - Ação recomendada
- Barra visual de score
- Botão "Refazer o quiz"

#### 4.3.2 Card de Análise por Dimensão (quando o quiz tiver dimensões)
- Score ring SVG animado (geral)
- Cards por dimensão com:
  - Nome da dimensão
  - Barra de progresso
  - Porcentagem
  - Cor temática da dimensão

#### 4.3.3 Card "O Que Investigar" / Recomendações
- Grid de itens recomendados (exames, ações, etc)
- Citação do especialista

#### 4.3.4 Card Bio do Especialista + CTA de Oferta
- Avatar (iniciais ou placeholder de foto)
- Nome + título/especialidade
- Descrição curta
- Tags de especialidade
- Divider
- Oferta do próximo passo:
  - Ícone + label "Próximo passo recomendado"
  - Título da oferta (consulta, avaliação, etc)
  - Lista de includes
  - Botão CTA de agendamento/compra

#### 4.3.5 Card de Outros Produtos
- Título "Outras formas de começar"
- Botões/links para:
  - Workshop (com ícone + eyebrow + título)
  - Ebook/Material (com ícone + eyebrow + título)

#### 4.3.6 Seção de Compartilhamento (Loop de Autoridade)
**COMPONENTE OBRIGATÓRIO** — Se não existir no HTML original, ADICIONAR.

Baseado no padrão visual das imagens de referência:
- Ícone de compartilhamento (SVG link/share)
- Label: "LOOP DE AUTORIDADE" (ou variação temática)
- Título grande: "SUA VOZ MERECE SER PROPAGADA." (ou variação temática extraída do contexto)
- Subtítulo: convite para compartilhar com colegas/amigos
- Dois botões:
  - **Compartilhar no WhatsApp** (botão verde, ícone WhatsApp SVG)
  - **Outras Opções** (botão outline, ícone share, usa `navigator.share` API)

**Implementação do WhatsApp:**
```javascript
function shareWhatsApp() {
  const text = encodeURIComponent(
    `Acabei de fazer o [NOME DO QUIZ] e descobri meu perfil: [RESULTADO]. Faça o seu também: ${window.location.href}`
  );
  window.open(`https://wa.me/?text=${text}`, '_blank');
}
```

**Implementação do Share nativo:**
```javascript
function shareNative() {
  if (navigator.share) {
    navigator.share({
      title: '[NOME DO QUIZ]',
      text: 'Descubra seu perfil fazendo este quiz:',
      url: window.location.href
    }).catch(() => {});
  } else {
    // Fallback: copiar para clipboard
    navigator.clipboard.writeText(window.location.href);
    alert('Link copiado!');
  }
}
```

---

## 5. Regras de Conversão CSS

### 5.1 Separação obrigatória
- **NUNCA** deixar `<style>` dentro do HTML
- Criar arquivo `styles/main.css` separado
- Vincular via `<link rel="stylesheet" href="styles/main.css">`

### 5.2 Preservar design original
- **NÃO** alterar cores, fontes, gradientes, espaçamentos, tamanhos, bordas
- Copiar TODAS as variáveis CSS (`:root`) exatamente como estão
- Preservar TODOS os media queries
- Preservar TODAS as animações e transições
- Se o HTML usa `@import` de Google Fonts, converter para `<link>` no `<head>`

### 5.3 Organização do CSS
```css
/* === VARIABLES === */
:root { ... }

/* === RESET & BASE === */
* { ... }
body { ... }

/* === LAYOUT === */
.container { ... }
.wrap { ... }

/* === COMPONENTS === */
/* -- Announce Bar -- */
/* -- Hero -- */
/* -- Proof Bar -- */
/* -- Pain List -- */
/* -- Manifesto -- */
/* -- For Whom -- */
/* -- Modules -- */
/* -- Bio -- */
/* -- Bonus -- */
/* -- Testimonials -- */
/* -- Pricing -- */
/* -- Countdown -- */
/* -- FAQ -- */
/* -- Final CTA -- */
/* -- Footer -- */
/* -- Sticky Bar -- */

/* === UTILITIES === */
.gold { ... }
.center { ... }

/* === RESPONSIVE === */
@media (max-width: 720px) { ... }
@media (max-width: 560px) { ... }
@media (max-width: 480px) { ... }
```

---

## 6. Regras de Conversão JavaScript

### 6.1 Separação obrigatória
- **NUNCA** deixar `<script>` inline no HTML
- Criar arquivo `scripts/main.js` separado
- Vincular via `<script src="scripts/main.js"></script>` antes do `</body>`

### 6.2 Funcionalidades a preservar/implementar

#### Workshop:
- **Countdown timer:** manter a lógica, usar `data-attributes` para configurar data-alvo
- **FAQ accordion:** toggle de classe `.open`, um item aberto por vez
- **Smooth scroll:** para links âncora internos
- **Sticky bar:** já funciona via CSS `position: fixed`

#### Quiz:
- **Navegação de telas:** sistema de `screen.active` com `display: none/flex`
- **Barra de progresso:** atualização dinâmica por seção
- **Contagem de score:** tracking de itens marcados
- **Renderização de resultado:** cálculo de nível + renderização dinâmica
- **Animações de resultado:** barras de progresso animadas, score ring SVG
- **Compartilhamento:** WhatsApp + navigator.share API
- **Reset:** função de reiniciar quiz

### 6.3 Dados do Quiz
Manter o array de perguntas/opções como constante no topo do JS:
```javascript
const QUESTIONS = [
  {
    category: "Nome da Categoria",
    items: [
      { id: 1, title: "Título do item", desc: "Descrição do item" },
      // ...
    ]
  },
  // ...
];
```

---

## 7. Estrutura do server.js

```javascript
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos do Workshop
app.use('/comunicacao', express.static(path.join(__dirname, 'Comunicação')));

// Servir arquivos estáticos do Quiz
app.use('/quiz', express.static(path.join(__dirname, 'Quiz')));

// Recursos compartilhados
app.use('/shared', express.static(path.join(__dirname, 'shared')));

// Rota raiz redireciona para o workshop
app.get('/', (req, res) => {
  res.redirect('/comunicacao');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Workshop: http://localhost:${PORT}/comunicacao`);
  console.log(`Quiz: http://localhost:${PORT}/quiz`);
});
```

### package.json base:
```json
{
  "name": "lp-[nome-do-projeto]",
  "version": "1.0.0",
  "description": "Landing Pages - Workshop + Quiz",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.0"
  }
}
```

---

## 8. Checklist de Validação Final

Antes de entregar o projeto, verificar:

### Estrutura
- [ ] Pasta `Comunicação/` com index.html, styles/, scripts/, assets/
- [ ] Pasta `Quiz/` com index.html, styles/, scripts/, assets/
- [ ] `server.js` funcional servindo ambas as pastas
- [ ] `package.json` com dependências corretas
- [ ] Nenhum CSS inline (tag `<style>`) nos HTMLs
- [ ] Nenhum JS inline (tag `<script>` com código) nos HTMLs

### Textos
- [ ] Todos os textos originais preservados (nenhum alterado/reescrito)
- [ ] Todos os traços `-` de hifenização removidos
- [ ] Entidades HTML convertidas para caracteres reais
- [ ] Nenhum emoji restante no código — todos substituídos por Heroicons SVG

### Componentes Workshop
- [ ] Announce Bar presente
- [ ] Hero completo (badge, título, subtítulo, meta, countdown, CTAs)
- [ ] Proof Bar presente
- [ ] Seção de Dores presente
- [ ] Manifesto Strip presente
- [ ] Seção Para Quem É presente
- [ ] Seção de Conteúdo/Módulos presente
- [ ] Bio do Especialista presente
- [ ] Seção de Bônus presente
- [ ] Pricing com formato de 2 Lotes lado a lado
- [ ] FAQ accordion funcional
- [ ] CTA Final presente
- [ ] Footer com disclaimer
- [ ] Sticky Bar presente

### Componentes Quiz
- [ ] Tela Intro completa
- [ ] Tela de Quiz com progresso funcional
- [ ] Tela de Resultado com score dinâmico
- [ ] Card Bio + CTA de oferta no resultado
- [ ] Card de Outros Produtos no resultado
- [ ] **Seção de Compartilhamento (Loop de Autoridade) presente**
- [ ] WhatsApp share funcional
- [ ] navigator.share funcional com fallback

### Visual
- [ ] Cores preservadas (variáveis CSS intactas)
- [ ] Fontes preservadas (Google Fonts carregando)
- [ ] Responsividade preservada (media queries intactas)
- [ ] Animações preservadas (transições, keyframes)

---

## 9. O Que NÃO Fazer

1. **NÃO** alterar cores, fontes, tipografia ou qualquer aspecto visual
2. **NÃO** remover componentes que existem no HTML original
3. **NÃO** reescrever ou "melhorar" textos/copys
4. **NÃO** usar emojis — sempre substituir por ícones SVG
5. **NÃO** deixar CSS ou JS inline nos arquivos HTML
6. **NÃO** inventar textos para componentes que já possuem texto no original
7. **NÃO** alterar a lógica de cálculo de score do quiz
8. **NÃO** remover animações ou transições existentes
9. **NÃO** mudar a ordem dos componentes do HTML original (apenas adicionar os que faltam)
10. **NÃO** ignorar a seção de Compartilhamento/Loop — é obrigatória no Quiz

---

## 10. Referência Rápida: Componentes por Tipo de Página

### Workshop (Comunicação/)

| # | Componente | Obrigatório | Notas |
|---|-----------|-------------|-------|
| 1 | Announce Bar | ✅ | Topo fixo com oferta |
| 2 | Hero | ✅ | Título + meta + countdown + CTAs |
| 3 | Proof Bar | ✅ | Números de credibilidade |
| 4 | Seção Dores | ✅ | Lista com ícone X vermelho |
| 5 | Manifesto Strip | ✅ | Citação em fundo dourado |
| 6 | Para Quem É | ✅ | Grid de perfis |
| 7 | Conteúdo/Módulos | ✅ | Cards numerados |
| 8 | Bio Especialista | ✅ | Foto + credenciais |
| 9 | Bônus | ✅ | Grid de cards |
| 10 | Depoimentos | ⚡ Opcional | Manter se existir |
| 11 | Pricing (2 Lotes) | ✅ | Formato obrigatório da doc |
| 12 | FAQ | ✅ | Accordion |
| 13 | CTA Final | ✅ | Seção de encerramento |
| 14 | Footer | ✅ | Copyright + disclaimer |
| 15 | Sticky Bar | ✅ | Bottom fixo |
| 16 | Countdown (extra) | ⚡ Opcional | Se separado do hero |
| 17 | Formulário | ⚡ Opcional | Manter se existir |

### Quiz (Quiz/)

| # | Componente | Obrigatório | Notas |
|---|-----------|-------------|-------|
| 1 | Tela Intro | ✅ | Card com ícone + título + instruções + CTA |
| 2 | Tela Quiz | ✅ | Progresso + card pergunta + navegação |
| 3 | Resultado: Score | ✅ | Número + nível + barra |
| 4 | Resultado: Dimensões | ⚡ Se aplicável | Score ring + bars |
| 5 | Resultado: Recomendações | ✅ | Grid de ações/exames |
| 6 | Resultado: Bio + CTA | ✅ | Especialista + oferta |
| 7 | Resultado: Outros Produtos | ✅ | Workshop + Ebook links |
| 8 | **Compartilhamento/Loop** | ✅ **OBRIGATÓRIO** | WhatsApp + Share API |
| 9 | Botão Refazer | ✅ | Reset do quiz |