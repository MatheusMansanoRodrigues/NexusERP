# 🚀 NexusERP - Enterprise Portal

[![Aesthetics: Premium](https://img.shields.io/badge/Aesthetics-Premium%20Glassmorphism-purple.svg)](#)
[![Tech Stack: Vanilla](https://img.shields.io/badge/Tech%20Stack-HTML5%20%7C%20CSS3%20%7C%20JS%20%7C%20jQuery-blue.svg)](#)
[![Charts: ChartJS](https://img.shields.io/badge/Charts-Chart.js%20Dynamic-brightgreen.svg)](#)
[![UX: Ultra Responsive](https://img.shields.io/badge/UX-Ultra%20Responsive-orange.svg)](#)

O **NexusERP** é um dashboard administrativo premium e moderno para sistemas de planejamento de recursos empresariais (ERP). Construído com foco em **estética visual**, **micro-interações fluídas** e uma **experiência de usuário (UX)**, o portal combina o poder do glassmorphism a um motor de temas totalmente dinâmico.

---

## Principais Recursos

### 1. Sistema Dinâmico de Temas (5 Estilos)
O portal conta com 5 temas sofisticados aplicáveis em tempo real, persistidos no `localStorage` do navegador e com transições suaves de `0.4s`:
*  **Neon Violet (Cyberpunk Padrão)**: Fundo espacial ultra-escuro com detalhes roxos e cianos elétricos.
*  **Emerald Aurora (Estilo Aurora Boreal)**: Fundo verde-grafite profundo com realces esmeralda neon.
*  **Crimson Nova (Solar & Magma)**: Fundo vinho escuro com realces em laranja e vermelho vibrantes.
*  **Oceanic Abyss (Profundo & Aqua)**: Fundo azul abissal com detalhes azuis elétricos e aqua turquesa.
*  **Pearl Light (Pearl/Apple Frosted Light Mode)**: Um modo claro perolado de luxo com alto efeito de desfoque translúcido, alta legibilidade e detalhes índigo.

### 2. Gráficos Inteligentes e Adaptativos (Chart.js)
Os gráficos financeiros, de canais e de vendas mensais **reconstroem-se dinamicamente** ao trocar de tema. Seus gradientes de linha e áreas de preenchimento mudam em tempo real de acordo com as cores de acento do tema selecionado, mantendo a consistência visual.

### 3. Correção de Acessibilidade em Dropdowns
Resolução definitiva do clássico bug de dropdowns nativos do Windows (onde selects com fundo transparente causavam opções com texto branco sobre fundo branco), garantindo leitura perfeita com variáveis de temas robustas (`--bg-select` e `--color-select`).

### 4. Simulação de Integrações em Tempo Real
Webhook simulado em tempo real com canais externos (Shopify e Mercado Livre), com entrada automática de vendas fictícias, baixa no estoque físico, alteração de status, disparo de alertas e notificações no topo do painel.

---

## Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web puras e leves para atingir o máximo desempenho de renderização, sem a necessidade de builds complexos:
*   **HTML5 Semântico**: Estruturação limpa e otimizada para SEO.
*   **CSS3 Avançado**: Uso extensivo de variáveis personalizadas (Custom Properties), desfoques de fundo (`backdrop-filter`), animações `@keyframes` personalizadas e flexbox/grid.
*   **JavaScript (ES6+) & jQuery**: Controle de navegação em formato SPA (Single Page Application), filtros de tabelas em tempo real, modais rápidos e gerenciamento de estado mock.
*   **Chart.js**: Renderização e animação de gráficos de fluxo de caixa e funil de canais.
*   **FontAwesome 6**: Biblioteca moderna de ícones vetoriais.
*   **Google Fonts**: Fontes premium *Outfit* e *Plus Jakarta Sans*.

---

## Como Executar o Projeto

Como o portal foi desenvolvido com tecnologias web nativas client-side, executá-lo é extremamente simples e não requer a instalação de gerenciadores de pacotes (como npm):

1.  **Clone este repositório**:
    ```bash
    git clone https://github.com/seu-usuario/nexuserp-dashboard.git
    ```
2.  **Acesse a pasta do projeto**:
    ```bash
    cd nexuserp-dashboard
    ```
3.  **Abra o arquivo principal**:
    *   Basta dar um duplo clique no arquivo `index.html` para rodar diretamente no navegador, ou;
    *   Utilize a extensão **Live Server** no VS Code para uma experiência de desenvolvimento em tempo real local.

---

## Estrutura de Arquivos

```
├── index.html      # Estrutura do dashboard, modais, configurações e containers
├── style.css       # Folha de estilos premium, definições de variáveis dos 5 temas e animações
├── script.js       # Regras de negócio, manipulação de gráficos, mock data e motor de temas
└── README.md       # Documentação do projeto
```

---

## Próximos Passos & Roadmap

*   [x] Bug de dropdowns resolvido
*   [x] Criação de 5 temas dinâmicos (incluindo Light Mode de luxo)
*   [ ] Unificação de 100% dos hovers e glows de cards sob variáveis dinâmicas (Em progresso)
*   [ ] Integração com banco de dados relacional real
*   [ ] Exportação de relatórios nativos em PDF corporativo

---
Desenvolvido com ❤️ e foco absoluto em excelência visual.
