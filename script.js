$(function () {
  // ==========================================
  // SISTEMA DE DADOS DE BASE (MOCK DATA STORE)
  // ==========================================

  const DEFAULT_FINANCEIRO = [
    {
      cod: "FIN-102",
      desc: "Mensalidade Enterprise ERP - Alfa S/A",
      data: "2026-05-18",
      categoria: "Venda Licenças",
      tipo: "Receita",
      valor: 22400.0,
      status: "Pago",
    },
    {
      cod: "FIN-103",
      desc: "Assinatura Servidor AWS Core",
      data: "2026-05-15",
      categoria: "Serviços Cloud",
      tipo: "Despesa",
      valor: 6850.0,
      status: "Pago",
    },
    {
      cod: "FIN-104",
      desc: "Campanha Marketing Google Ads",
      data: "2026-05-10",
      categoria: "Marketing & Anúncios",
      tipo: "Despesa",
      valor: 4200.0,
      status: "Pago",
    },
    {
      cod: "FIN-105",
      desc: "Consultoria Customização Totvs API",
      data: "2026-05-20",
      categoria: "Consultoria Premium",
      tipo: "Receita",
      valor: 15000.0,
      status: "Pago",
    },
    {
      cod: "FIN-106",
      desc: "Folha Pagamento Engenharia",
      data: "2026-05-05",
      categoria: "Salários & Pessoas",
      tipo: "Despesa",
      valor: 24500.0,
      status: "Pago",
    },
    {
      cod: "FIN-107",
      desc: "Integração Shopify Store API Vendas",
      data: "2026-05-20",
      categoria: "Venda Licenças",
      tipo: "Receita",
      valor: 2450.0,
      status: "Pago",
    },
    {
      cod: "FIN-108",
      desc: "Faturamento Webhook Mercado Livre",
      data: "2026-05-20",
      categoria: "Venda Licenças",
      tipo: "Receita",
      valor: 1800.0,
      status: "Pago",
    },
    {
      cod: "FIN-109",
      desc: "Modulo Contábil Adicional - Beta Ltda",
      data: "2026-05-25",
      categoria: "Venda Licenças",
      tipo: "Receita",
      valor: 1200.0,
      status: "Pendente",
    },
    {
      cod: "FIN-110",
      desc: "Hospedagem Azure Backup Server",
      data: "2026-05-28",
      categoria: "Serviços Cloud",
      tipo: "Despesa",
      valor: 2300.0,
      status: "Pendente",
    },
  ];

  const DEFAULT_VENDAS = [
    {
      cod: "VND-4802",
      cliente: "Metalúrgica Alfa Ltda",
      produto: "Licença Anual ERP Premium",
      data: "2026-05-20 10:15",
      canal: "Negociação CRM",
      valor: 22400.0,
      comissao: 1120.0,
      status: "Entregue",
    },
    {
      cod: "VND-4803",
      cliente: "Maria Helena Acessórios",
      produto: "Módulo Contábil Integrado",
      data: "2026-05-20 10:07",
      canal: "Shopify Store",
      valor: 2450.0,
      comissao: 122.5,
      status: "Entregue",
    },
    {
      cod: "VND-4804",
      cliente: "Distribuidora Diniz S/A",
      produto: "Suporte Técnico 24/7 Premium",
      data: "2026-05-19 16:30",
      canal: "Vendedor Direto",
      valor: 1800.0,
      comissao: 90.0,
      status: "Entregue",
    },
    {
      cod: "VND-4805",
      cliente: "Lojas Multivix",
      produto: "Integração Customizada API",
      data: "2026-05-19 14:15",
      canal: "Mercado Livre",
      valor: 1200.0,
      comissao: 60.0,
      status: "Processando",
    },
  ];

  const DEFAULT_ESTOQUE = [
    {
      cod: "PRD-01",
      nome: "Licença Anual ERP Premium",
      categoria: "Licenciamento",
      custo: 1200.0,
      venda: 22400.0,
      qtd: 150,
      min: 10,
    },
    {
      cod: "PRD-02",
      nome: "Módulo Contábil Integrado",
      categoria: "Licenciamento",
      custo: 150.0,
      venda: 2450.0,
      qtd: 95,
      min: 5,
    },
    {
      cod: "PRD-03",
      nome: "Suporte Técnico 24/7 Premium",
      categoria: "Licenciamento",
      custo: 200.0,
      venda: 1800.0,
      qtd: 40,
      min: 3,
    },
    {
      cod: "PRD-04",
      nome: "Integração Customizada API",
      categoria: "Licenciamento",
      custo: 100.0,
      venda: 1200.0,
      qtd: 12,
      min: 2,
    },
    {
      cod: "PRD-05",
      nome: "Mini Router Wi-Fi 6 Plus",
      categoria: "Eletrônicos",
      custo: 180.0,
      venda: 450.0,
      qtd: 4,
      min: 8,
    },
    {
      cod: "PRD-06",
      nome: "Server Rack Cable Manager",
      categoria: "Acessórios IT",
      custo: 45.0,
      venda: 120.0,
      qtd: 1,
      min: 5,
    },
  ];

  const DEFAULT_COLABORADORES = [
    {
      nome: "Matheus Santos",
      cargo: "Executivo de Vendas",
      dept: "Vendas B2B",
      performance: 5,
      status: "Ativo",
      meta: "95%",
      iniciais: "MS",
      avatarClass: "emp-avatar-1",
    },
    {
      nome: "Beatriz Souza",
      cargo: "Customer Success Manager",
      dept: "Pós-Venda",
      performance: 4,
      status: "Ativo",
      meta: "100%",
      iniciais: "BS",
      avatarClass: "emp-avatar-2",
    },
    {
      nome: "Carlos Eduardo",
      cargo: "Inside Sales Rep",
      dept: "Vendas Integradas",
      performance: 5,
      status: "Ativo",
      meta: "88%",
      iniciais: "CE",
      avatarClass: "emp-avatar-3",
    },
    {
      nome: "Juliana Mendes",
      cargo: "Analista Financeiro Pleno",
      dept: "Financeiro",
      performance: 4,
      status: "Ativo",
      meta: "90%",
      iniciais: "JM",
      avatarClass: "emp-avatar-4",
    },
  ];

  // ==========================================
  // INICIALIZAÇÃO DE VARIÁVEIS / LOCALSTORAGE
  // ==========================================

  let financeiro =
    JSON.parse(localStorage.getItem("nexus_financeiro")) || DEFAULT_FINANCEIRO;
  let vendas =
    JSON.parse(localStorage.getItem("nexus_vendas")) || DEFAULT_VENDAS;
  let estoque =
    JSON.parse(localStorage.getItem("nexus_estoque")) || DEFAULT_ESTOQUE;
  let colaboradores =
    JSON.parse(localStorage.getItem("nexus_colaboradores")) ||
    DEFAULT_COLABORADORES;

  function saveAllToLocalStorage() {
    localStorage.setItem("nexus_financeiro", JSON.stringify(financeiro));
    localStorage.setItem("nexus_vendas", JSON.stringify(vendas));
    localStorage.setItem("nexus_estoque", JSON.stringify(estoque));
    localStorage.setItem("nexus_colaboradores", JSON.stringify(colaboradores));
  }

  // Se é a primeira execução, força salvar os dados de base
  if (!localStorage.getItem("nexus_financeiro")) {
    saveAllToLocalStorage();
  }

  // Instâncias Globais de Gráficos (para destruição e rebuild corretos)
  let chartFinanceiroInstance = null;
  let chartCanaisInstance = null;
  let chartVendasMesInstance = null;

  // ==========================================
  // ELEMENTOS DE INTERFACE E TOASTS
  // ==========================================

  function showToast(title, desc, type = "success") {
    const toastId = "toast_" + Date.now();
    let iconClass = "fa-solid fa-circle-check";

    if (type === "warning") iconClass = "fa-solid fa-triangle-exclamation";
    else if (type === "danger") iconClass = "fa-solid fa-circle-xmark";
    else if (type === "info") iconClass = "fa-solid fa-circle-info";

    const html = `
            <div class="toast-item ${type}" id="${toastId}">
                <div class="toast-icon"><i class="${iconClass}"></i></div>
                <div class="toast-details">
                    <div class="toast-title">${title}</div>
                    <div class="toast-desc">${desc}</div>
                </div>
                <button class="toast-close" onclick="$('#${toastId}').addClass('fade-out'); setTimeout(() => $('#${toastId}').remove(), 350);"><i class="fa-solid fa-xmark"></i></button>
            </div>
        `;

    $("#toastContainer").append(html);

    // Auto-destruição após 4 segundos com animação fade-out
    setTimeout(() => {
      $(`#${toastId}`).addClass("fade-out");
      setTimeout(() => {
        $(`#${toastId}`).remove();
      }, 350);
    }, 4500);
  }

  // ==========================================
  // SISTEMA DE NAVEGAÇÃO DE ABAS (SPA)
  // ==========================================

  $(".nav-link").on("click", function (e) {
    e.preventDefault();

    const targetTab = $(this).data("tab");
    const tabTitle = $(this).find("span").first().text();

    // Ativar link na Sidebar
    $(".nav-link").removeClass("active");
    $(this).addClass("active");

    // Mudar Breadcrumb
    $("#currentTabTitle").text(tabTitle);

    // Alternar Pane de Conteúdo
    $(".content-pane").removeClass("active");
    $(`#tab-${targetTab}`).addClass("active");

    // Renderizar tabelas/gráficos específicos se necessário
    renderDataBasedOnTab(targetTab);

    // Fecha sidebar móvel se aberta
    $("#sidebar").removeClass("open");
  });

  // Responsividade: Abre/Fecha Sidebar Mobile
  $("#mobileToggle").on("click", function () {
    $("#sidebar").addClass("open");
  });

  $("#mobileCloseBtn").on("click", function () {
    $("#sidebar").removeClass("open");
  });

  // Relógio Superior
  function updateClock() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    $("#systemClock").text(
      `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`,
    );
  }

  setInterval(updateClock, 1000);
  updateClock();

  // ==========================================
  // CALCULADORA DE KPIs DO NEGÓCIO
  // ==========================================

  function calculateKPIs() {
    // 1. Faturamento Total Acumulado (Receitas Pagas + Pendentes)
    let totalFaturamento = 0;
    financeiro.forEach((f) => {
      if (f.tipo === "Receita") {
        totalFaturamento += f.valor;
      }
    });
    $("#kpi-faturamento").text(formatCurrency(totalFaturamento));
    $("#fin-receitas-val").text(formatCurrency(totalFaturamento));

    // 2. Despesas Confirmadas
    let totalDespesas = 0;
    financeiro.forEach((f) => {
      if (f.tipo === "Despesa") {
        totalDespesas += f.valor;
      }
    });
    $("#fin-despesas-val").text(formatCurrency(totalDespesas));

    // 3. Saldo Líquido
    let saldoLiquido = totalFaturamento - totalDespesas;
    $("#fin-saldo-val").text(formatCurrency(saldoLiquido));

    // Ajusta as cores se o saldo for negativo
    if (saldoLiquido < 0) {
      $("#fin-saldo-val").removeClass("text-info").addClass("text-danger");
    } else {
      $("#fin-saldo-val").removeClass("text-danger").addClass("text-info");
    }

    // 4. Clientes Ativos (Calculado a partir de vendas únicas + base)
    const uniqueClients = new Set();
    vendas.forEach((v) => uniqueClients.add(v.cliente));
    const totalClientes = 1450 + uniqueClients.size;
    $("#kpi-clientes").text(totalClientes.toLocaleString("pt-BR"));

    // 5. Total de Vendas
    $("#kpi-vendas").text(vendas.length);

    // 6. Alertas de Estoque (Produtos com quantidade abaixo do mínimo)
    let alertasEstoque = 0;
    estoque.forEach((p) => {
      if (p.qtd <= p.min) {
        alertasEstoque++;
      }
    });

    $("#kpi-alertas").text(alertasEstoque);

    if (alertasEstoque > 0) {
      $("#kpi-alerta-estoque-container").addClass("border-warning-pulse");
      $("#badge-estoque-alerta").removeClass("d-none").text(alertasEstoque);
      $("#kpi-alertas-status")
        .html(
          `<i class="fa-solid fa-triangle-exclamation"></i> Estoque Crítico`,
        )
        .addClass("text-danger")
        .removeClass("text-success");
      $("#kpi-alertas-detalhe").text(
        `${alertasEstoque} produto(s) abaixo do mínimo`,
      );
    } else {
      $("#kpi-alerta-estoque-container").removeClass("border-warning-pulse");
      $("#badge-estoque-alerta").addClass("d-none");
      $("#kpi-alertas-status")
        .html(`<i class="fa-solid fa-boxes-stacked"></i> Estoque Normalizado`)
        .addClass("text-success")
        .removeClass("text-danger");
      $("#kpi-alertas-detalhe").text("Nenhum item com baixo estoque");
    }
  }

  // Utilitário de Conversão Monetária
  function formatCurrency(value) {
    const moeda = $("#config-moeda").val() || "BRL";
    if (moeda === "USD") {
      return (value / 5.15).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    }
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  // ==========================================
  // RENDERIZAÇÃO DOS GRÁFICOS DO CHART.JS
  // ==========================================

  function getActiveThemePalette() {
    const theme = localStorage.getItem("nexus_tema") || "theme-neon-violet";

    switch (theme) {
      case "theme-emerald-aurora":
        return {
          primary: "#00e676", // Emerald
          primaryGlow: "rgba(0, 230, 118, 0.4)",
          primaryGlowZero: "rgba(0, 230, 118, 0.0)",
          secondary: "#00e5ff", // Cyan
          secondaryGlow: "rgba(0, 229, 255, 0.3)",
          secondaryGlowZero: "rgba(0, 229, 255, 0.0)",
          gridColor: "rgba(0, 230, 118, 0.04)",
          textColor: "#8fa39f",
        };
      case "theme-crimson-nova":
        return {
          primary: "#ff3d00", // Orange/Red Solar
          primaryGlow: "rgba(255, 61, 0, 0.4)",
          primaryGlowZero: "rgba(255, 61, 0, 0.0)",
          secondary: "#ffb300", // Yellow
          secondaryGlow: "rgba(255, 179, 0, 0.3)",
          secondaryGlowZero: "rgba(255, 179, 0, 0.0)",
          gridColor: "rgba(255, 61, 0, 0.04)",
          textColor: "#af9ba0",
        };
      case "theme-oceanic-abyss":
        return {
          primary: "#0088ff", // Electric Blue
          primaryGlow: "rgba(0, 136, 255, 0.4)",
          primaryGlowZero: "rgba(0, 136, 255, 0.0)",
          secondary: "#00ffd5", // Aqua Turquesa
          secondaryGlow: "rgba(0, 255, 213, 0.3)",
          secondaryGlowZero: "rgba(0, 255, 213, 0.0)",
          gridColor: "rgba(0, 136, 255, 0.04)",
          textColor: "#8ca3c7",
        };
      case "theme-pearl-light":
        return {
          primary: "#6366f1", // Indigo
          primaryGlow: "rgba(99, 102, 241, 0.4)",
          primaryGlowZero: "rgba(99, 102, 241, 0.0)",
          secondary: "#06b6d4", // Cyan
          secondaryGlow: "rgba(6, 182, 212, 0.3)",
          secondaryGlowZero: "rgba(6, 182, 212, 0.0)",
          gridColor: "rgba(0, 0, 0, 0.04)",
          textColor: "#64748b",
        };
      case "theme-neon-violet":
      default:
        return {
          primary: "#7c4dff", // Purple
          primaryGlow: "rgba(124, 77, 255, 0.4)",
          primaryGlowZero: "rgba(124, 77, 255, 0.0)",
          secondary: "#00e5ff", // Cyan
          secondaryGlow: "rgba(0, 229, 255, 0.3)",
          secondaryGlowZero: "rgba(0, 229, 255, 0.0)",
          gridColor: "rgba(255, 255, 255, 0.03)",
          textColor: "#9ca3af",
        };
    }
  }

  function initChartFinanceiro(mode = "ano") {
    const ctx = document.getElementById("chart-financeiro");
    if (!ctx) return;

    // Destrói gráfico anterior se houver
    if (chartFinanceiroInstance) {
      chartFinanceiroInstance.destroy();
    }

    const palette = getActiveThemePalette();

    // Criando gradiente brilhante para a linha do Faturamento
    const ctx2d = ctx.getContext("2d");
    const gradientFaturamento = ctx2d.createLinearGradient(0, 0, 0, 300);
    gradientFaturamento.addColorStop(0, palette.primaryGlow);
    gradientFaturamento.addColorStop(1, palette.primaryGlowZero);

    // Criando gradiente brilhante para a linha das Despesas
    const gradientDespesas = ctx2d.createLinearGradient(0, 0, 0, 300);
    gradientDespesas.addColorStop(0, palette.secondaryGlow);
    gradientDespesas.addColorStop(1, palette.secondaryGlowZero);

    let labels = [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ];
    let dataFaturamento = [
      98000, 110000, 105000, 122000, 142850, 0, 0, 0, 0, 0, 0, 0,
    ];
    let dataDespesas = [32000, 29000, 34000, 38000, 35550, 0, 0, 0, 0, 0, 0, 0];

    if (mode === "semestre") {
      labels = ["Dez/25", "Jan/26", "Fev/26", "Mar/26", "Abr/26", "Mai/26"];
      dataFaturamento = [85000, 98000, 110000, 105000, 122000, 142850];
      dataDespesas = [30000, 32000, 29000, 34000, 38000, 35550];
    }

    // Calibrar com novos lançamentos feitos dinamicamente no mês de Maio
    let receitasAdicionais = 0;
    let despesasAdicionais = 0;
    financeiro.forEach((f) => {
      // Se for lançamento cadastrado fora dos mocks base
      if (f.cod.startsWith("TRN-")) {
        if (f.tipo === "Receita") receitasAdicionais += f.valor;
        else despesasAdicionais += f.valor;
      }
    });

    // Soma as adições no mês corrente (Maio - índice 4)
    if (mode === "semestre") {
      dataFaturamento[5] += receitasAdicionais;
      dataDespesas[5] += despesasAdicionais;
    } else {
      dataFaturamento[4] += receitasAdicionais;
      dataDespesas[4] += despesasAdicionais;
    }

    chartFinanceiroInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Faturamento (Receitas)",
            data: dataFaturamento,
            borderColor: palette.primary,
            borderWidth: 3,
            backgroundColor: gradientFaturamento,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: palette.primary,
            pointBorderColor: "#ffffff",
            pointRadius: 4,
            pointHoverRadius: 7,
          },
          {
            label: "Despesas Operacionais",
            data: dataDespesas,
            borderColor: palette.secondary,
            borderWidth: 2,
            backgroundColor: gradientDespesas,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: palette.secondary,
            pointBorderColor: "#ffffff",
            pointRadius: 3,
            pointHoverRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: palette.textColor,
              font: { family: "Plus Jakarta Sans", size: 12 },
            },
          },
          tooltip: {
            backgroundColor: "rgba(18, 25, 41, 0.95)",
            borderColor: "rgba(255,255,255,0.15)",
            borderWidth: 1,
            titleColor: "#fff",
            bodyColor: "#f3f4f6",
            titleFont: { weight: "bold", family: "Plus Jakarta Sans" },
            bodyFont: { family: "Plus Jakarta Sans" },
            padding: 12,
            cornerRadius: 10,
            callbacks: {
              label: function (context) {
                return (
                  context.dataset.label + ": " + formatCurrency(context.raw)
                );
              },
            },
          },
        },
        scales: {
          x: {
            grid: { color: palette.gridColor },
            ticks: {
              color: palette.textColor,
              font: { family: "Plus Jakarta Sans" },
            },
          },
          y: {
            grid: { color: palette.gridColor },
            ticks: {
              color: palette.textColor,
              font: { family: "Plus Jakarta Sans" },
              callback: function (value) {
                return value >= 1000 ? value / 1000 + "k" : value;
              },
            },
          },
        },
      },
    });
  }

  function initChartCanais() {
    const ctx = document.getElementById("chart-canais");
    if (!ctx) return;

    if (chartCanaisInstance) {
      chartCanaisInstance.destroy();
    }

    const theme = localStorage.getItem("nexus_tema") || "theme-neon-violet";
    const palette = getActiveThemePalette();

    // Calcula a fatia dos canais a partir do CRM Vendas
    let canaisVolume = {
      "Shopify Store": 0,
      "Mercado Livre": 0,
      "CRM B2B": 0,
      "Físico / Direto": 0,
    };
    vendas.forEach((v) => {
      let canalKey = v.canal;
      if (canalKey === "Shopify Store")
        canaisVolume["Shopify Store"] += v.valor;
      else if (canalKey === "Mercado Livre")
        canaisVolume["Mercado Livre"] += v.valor;
      else if (canalKey === "Negociação CRM")
        canaisVolume["CRM B2B"] += v.valor;
      else canaisVolume["Físico / Direto"] += v.valor;
    });

    chartCanaisInstance = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: [
          "Shopify Integration",
          "Mercado Livre API",
          "Negociação CRM B2B",
          "Vendas Diretas",
        ],
        datasets: [
          {
            data: [
              canaisVolume["Shopify Store"] + 28000,
              canaisVolume["Mercado Livre"] + 19500,
              canaisVolume["CRM B2B"] + 74000,
              canaisVolume["Físico / Direto"] + 12000,
            ],
            backgroundColor: [
              "#96bf48", // Verde Shopify
              "#ffe600", // Amarelo Mercado Livre
              palette.primary, // Cor Primária do Tema
              palette.secondary, // Cor Secundária do Tema
            ],
            borderWidth: 2,
            borderColor: theme === "theme-pearl-light" ? "#ffffff" : "#141b2d",
            hoverOffset: 12,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              color: palette.textColor,
              font: { family: "Plus Jakarta Sans", size: 10 },
              padding: 12,
            },
          },
          tooltip: {
            backgroundColor: "rgba(18, 25, 41, 0.95)",
            borderColor: "rgba(255,255,255,0.15)",
            borderWidth: 1,
            padding: 12,
            cornerRadius: 10,
            callbacks: {
              label: function (context) {
                return " " + context.label + ": " + formatCurrency(context.raw);
              },
            },
          },
        },
        cutout: "70%",
      },
    });
  }

  function initChartVendasMes() {
    const ctx = document.getElementById("chart-vendas-mes");
    if (!ctx) return;

    if (chartVendasMesInstance) {
      chartVendasMesInstance.destroy();
    }

    const palette = getActiveThemePalette();
    const ctx2d = ctx.getContext("2d");
    const gradientVendas = ctx2d.createLinearGradient(0, 0, 0, 250);
    gradientVendas.addColorStop(0, palette.primaryGlow);
    gradientVendas.addColorStop(1, palette.primaryGlowZero);

    chartVendasMesInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["15/Mai", "16/Mai", "17/Mai", "18/Mai", "19/Mai", "20/Mai"],
        datasets: [
          {
            label: "Transações Emitidas (R$)",
            data: [12000, 15400, 9800, 21300, 3050, 26650],
            backgroundColor: gradientVendas,
            borderColor: palette.primary,
            borderWidth: 2,
            borderRadius: 8,
            borderSkipped: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "rgba(18, 25, 41, 0.95)",
            borderColor: "rgba(255,255,255,0.15)",
            borderWidth: 1,
            padding: 12,
            callbacks: {
              label: function (context) {
                return " Faturado: " + formatCurrency(context.raw);
              },
            },
          },
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: {
              color: palette.textColor,
              font: { family: "Plus Jakarta Sans" },
            },
          },
          y: {
            grid: { color: palette.gridColor },
            ticks: {
              color: palette.textColor,
              font: { family: "Plus Jakarta Sans" },
              callback: function (value) {
                return value >= 1000 ? value / 1000 + "k" : value;
              },
            },
          },
        },
      },
    });
  }

  // Alternar modos do gráfico financeiro (Ano / Semestre)
  $(".chart-action-btn").on("click", function () {
    $(".chart-action-btn").removeClass("active");
    $(this).addClass("active");

    const mode = $(this).data("range");
    initChartFinanceiro(mode);
  });

  // ==========================================
  // RENDERIZADOR DE COMPONENTES E TABELAS
  // ==========================================

  function renderDataBasedOnTab(tabName) {
    if (tabName === "dashboard") {
      calculateKPIs();
      initChartFinanceiro();
      initChartCanais();
      renderTopProducts();
    } else if (tabName === "financeiro") {
      calculateKPIs();
      renderFinanceiroTable();
    } else if (tabName === "vendas") {
      calculateKPIs();
      initChartVendasMes();
      renderVendasTable();
      renderCrmPipeline();
    } else if (tabName === "estoque") {
      calculateKPIs();
      renderEstoqueTable();
      populateProductDropdown();
    } else if (tabName === "rh") {
      renderColaboradoresTable();
    }
  }

  // 1. Tabela de Top Produtos (Dashboard Geral)
  function renderTopProducts() {
    const tbody = $("#top-products-tbody");
    if (!tbody.length) return;

    tbody.html("");

    // Mapeia popularidade de vendas dos mocks
    const ranking = [
      {
        name: "Licença Anual ERP Premium",
        cat: "Licenciamento",
        vendas: 92,
        margem: "78%",
        faturamento: 22400 * 4,
        pct: 95,
        fill: "#7c4dff",
      },
      {
        name: "Módulo Contábil Integrado",
        cat: "Licenciamento",
        vendas: 74,
        margem: "90%",
        faturamento: 2450 * 18,
        pct: 85,
        fill: "#00e5ff",
      },
      {
        name: "Suporte Técnico 24/7 Premium",
        cat: "Licenciamento",
        vendas: 45,
        margem: "65%",
        faturamento: 1800 * 9,
        pct: 60,
        fill: "#00e676",
      },
      {
        name: "Integração Customizada API",
        cat: "Licenciamento",
        vendas: 18,
        margem: "85%",
        faturamento: 1200 * 5,
        pct: 35,
        fill: "#ffb300",
      },
    ];

    ranking.forEach((r) => {
      tbody.append(`
                <tr>
                    <td><strong>${r.name}</strong></td>
                    <td class="d-none d-md-table-cell"><span class="badge-status-glow info">${r.cat}</span></td>
                    <td>${r.vendas} un.</td>
                    <td class="text-success d-none d-md-table-cell">${r.margem}</td>
                    <td><strong>${formatCurrency(r.faturamento)}</strong></td>
                    <td class="d-none d-md-table-cell">
                        <span class="me-2">${r.pct}%</span>
                        <div class="pop-bar-bg">
                            <div class="pop-bar-fill" style="width: ${r.pct}%; background-color: ${r.fill}; box-shadow: 0 0 8px ${r.fill}50;"></div>
                        </div>
                    </td>
                </tr>
            `);
    });
  }

  // 2. Tabela do Módulo Financeiro
  function renderFinanceiroTable(filterTipo = "Todos", filterStatus = "Todos") {
    const tbody = $("#financeiro-table-tbody");
    if (!tbody.length) return;

    tbody.html("");

    let filtered = financeiro;

    // Aplica filtro por Tipo (Receita/Despesa)
    if (filterTipo !== "Todos") {
      filtered = filtered.filter((f) => f.tipo === filterTipo);
    }

    // Aplica filtro por Status
    if (filterStatus !== "Todos") {
      filtered = filtered.filter((f) => f.status === filterStatus);
    }

    if (filtered.length === 0) {
      tbody.html(`
                <tr>
                    <td colspan="8" class="text-center py-4 opacity-50">
                        Nenhum lançamento financeiro encontrado com os filtros aplicados.
                    </td>
                </tr>
            `);
      return;
    }

    // Renderiza itens
    filtered.forEach((f, idx) => {
      let badgeClass = "badge-status-glow active";
      if (f.status === "Pendente") badgeClass = "badge-status-glow pending";
      else if (f.status === "Atrasado")
        badgeClass = "badge-status-glow overdue";

      let tipoBadge =
        f.tipo === "Receita"
          ? `<span class="text-success"><i class="fa-solid fa-circle-chevron-up me-1"></i>Receita</span>`
          : `<span class="text-danger"><i class="fa-solid fa-circle-chevron-down me-1"></i>Despesa</span>`;

      tbody.append(`
                <tr>
                    <td class="d-none d-md-table-cell"><code>${f.cod}</code></td>
                    <td><strong>${f.desc}</strong></td>
                    <td class="d-none d-md-table-cell">${f.data.split("-").reverse().join("/")}</td>
                    <td class="d-none d-md-table-cell"><span class="badge-status-glow info">${f.categoria}</span></td>
                    <td class="d-none d-md-table-cell">${tipoBadge}</td>
                    <td class="stock-value-cell ${f.tipo === "Receita" ? "text-success" : "text-light"}">${formatCurrency(f.valor)}</td>
                    <td><span class="${badgeClass}">${f.status}</span></td>
                    <td class="text-center">
                        <div class="d-flex justify-content-center gap-2">
                            ${
                              f.status === "Pendente"
                                ? `
                                <button class="btn-stock-adj plus mark-paid-btn" data-cod="${f.cod}" title="Marcar como Pago">
                                    <i class="fa-solid fa-check"></i>
                                </button>
                            `
                                : ""
                            }
                            <button class="btn-stock-adj minus delete-transaction-btn" data-cod="${f.cod}" title="Excluir Lançamento">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            `);
    });
  }

  // 3. Tabela do Módulo Vendas
  function renderVendasTable(searchQuery = "") {
    const tbody = $("#vendas-table-tbody");
    if (!tbody.length) return;

    tbody.html("");

    let filtered = vendas;

    if (searchQuery) {
      filtered = filtered.filter(
        (v) =>
          v.cliente.toLowerCase().includes(searchQuery.toLowerCase()) ||
          v.produto.toLowerCase().includes(searchQuery.toLowerCase()) ||
          v.cod.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    filtered.forEach((v) => {
      let statusBadge = `<span class="badge-status-glow active"><i class="fa-solid fa-truck-ramp-box me-1"></i>Entregue</span>`;
      if (v.status === "Processando") {
        statusBadge = `<span class="badge-status-glow pending"><i class="fa-solid fa-rotate me-1"></i>Faturamento API</span>`;
      }

      tbody.append(`
                <tr>
                    <td class="d-none d-md-table-cell"><code>${v.cod}</code></td>
                    <td><strong>${v.cliente}</strong></td>
                    <td>${v.produto}</td>
                    <td class="d-none d-md-table-cell">${v.data}</td>
                    <td class="d-none d-md-table-cell"><span class="badge-status-glow info">${v.canal}</span></td>
                    <td class="text-success stock-value-cell">${formatCurrency(v.valor)}</td>
                    <td class="text-muted d-none d-md-table-cell">${formatCurrency(v.comissao)}</td>
                    <td>${statusBadge}</td>
                </tr>
            `);
    });
  }

  // 4. CRM Pipeline Funnel Counts
  function renderCrmPipeline() {
    // Simulação dinâmica e cálculos de leads
    $("#crm-stage-leads-count").text(
      `${Math.floor(vendas.length * 1.5 + 18)} Leads`,
    );
    $("#crm-stage-contato-count").text(
      `${Math.floor(vendas.length * 0.9 + 10)} Contatos`,
    );
    $("#crm-stage-proposta-count").text(
      `${Math.floor(vendas.length * 0.5 + 6)} Propostas`,
    );
    $("#crm-stage-fechado-count").text(`${vendas.length} Negócios Ganhos`);
  }

  // 5. Tabela do Controle de Estoque
  function renderEstoqueTable(searchQuery = "") {
    const tbody = $("#estoque-table-tbody");
    if (!tbody.length) return;

    tbody.html("");

    let filtered = estoque;

    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.categoria.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.cod.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    filtered.forEach((p) => {
      let statusClass = "badge-status-glow active";
      let statusText = "Estoque OK";

      if (p.qtd <= 0) {
        statusClass = "badge-status-glow overdue";
        statusText = "Sem Estoque";
      } else if (p.qtd <= p.min) {
        statusClass = "badge-status-glow pending";
        statusText = "Reposição Crítica";
      }

      tbody.append(`
                <tr id="row-prod-${p.cod}">
                    <td class="d-none d-md-table-cell"><code>${p.cod}</code></td>
                    <td><strong>${p.nome}</strong></td>
                    <td class="d-none d-md-table-cell"><span class="badge-status-glow info">${p.categoria}</span></td>
                    <td class="text-muted d-none d-md-table-cell">${formatCurrency(p.custo)}</td>
                    <td class="stock-value-cell d-none d-md-table-cell">${formatCurrency(p.venda)}</td>
                    <td class="text-center font-monospace" id="cell-qtd-${p.cod}"><strong>${p.qtd}</strong> un.</td>
                    <td class="text-muted font-monospace d-none d-md-table-cell">${p.min} un.</td>
                    <td class="d-none d-md-table-cell"><span class="${statusClass}" id="badge-status-${p.cod}">${statusText}</span></td>
                    <td class="text-center">
                        <div class="stock-adjust-box">
                            <button class="btn-stock-adj minus adjust-stock-btn" data-cod="${p.cod}" data-dir="down">-</button>
                            <button class="btn-stock-adj plus adjust-stock-btn" data-cod="${p.cod}" data-dir="up">+</button>
                        </div>
                    </td>
                    <td class="text-center">
                        <button class="btn-stock-adj minus delete-product-btn" data-cod="${p.cod}" title="Remover Produto">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </td>
                </tr>
            `);
    });

    // Atualiza os indicadores patrimoniais
    let patrimonio = 0;
    estoque.forEach((p) => {
      patrimonio += p.custo * p.qtd;
    });
    $("#inventory-asset-value").text(formatCurrency(patrimonio));
    $("#inventory-total-items").text(estoque.length);
  }

  // 6. Tabela de Colaboradores (Recursos Humanos)
  function renderColaboradoresTable() {
    const tbody = $("#colaboradores-table-tbody");
    if (!tbody.length) return;

    tbody.html("");

    colaboradores.forEach((c) => {
      let stars = "";
      for (let i = 1; i <= 5; i++) {
        if (i <= c.performance) {
          stars += `<i class="fa-solid fa-star"></i>`;
        } else {
          stars += `<i class="fa-regular fa-star"></i>`;
        }
      }

      tbody.append(`
                <tr>
                    <td>
                        <div class="employee-profile">
                            <div class="employee-avatar-gradient ${c.avatarClass}">${c.iniciais}</div>
                            <div class="employee-details">
                                <h6>${c.nome}</h6>
                                <small>${c.cargo}</small>
                            </div>
                        </div>
                    </td>
                    <td class="d-none d-md-table-cell"><span class="badge-status-glow info">${c.dept}</span></td>
                    <td>
                        <div class="rating-stars" data-name="${c.nome}">${stars}</div>
                    </td>
                    <td class="d-none d-md-table-cell"><span class="badge-status-glow active">${c.status}</span></td>
                    <td class="d-none d-md-table-cell"><strong>${c.meta}</strong> atingida</td>
                    <td>
                        <button class="btn-small-glow feedback-colaborador-btn" data-name="${c.nome}">
                            <i class="fa-regular fa-comment-dots me-1"></i> Feedback
                        </button>
                    </td>
                </tr>
            `);
    });
  }

  // ==========================================
  // CONTROLES DE INTERATIVIDADE E EVENTOS
  // ==========================================

  // Modais Overlay: Abre / Fecha

  // Novo Lançamento Financeiro
  $("#openNewTransactionModal").on("click", function () {
    $("#modalFinanceiro").addClass("show");
    // Seta data de vencimento padrão para hoje
    $("#fin-data").val(new Date().toISOString().substring(0, 10));
  });

  // Nova Venda
  $("#openNewSaleModal").on("click", function () {
    populateProductDropdown();
    $("#modalVenda").addClass("show");
  });

  // Novo Produto Estoque
  $("#openNewProductModal").on("click", function () {
    $("#modalEstoque").addClass("show");
  });

  // Close button em modais
  $("[data-close]").on("click", function () {
    const target = $(this).data("close");
    $(`#${target}`).removeClass("show");
  });

  // Fecha ao clicar fora da modal box
  $(".custom-modal-overlay").on("click", function (e) {
    if ($(e.target).hasClass("custom-modal-overlay")) {
      $(this).removeClass("show");
    }
  });

  // Populate dropdown de produtos para modal de venda
  function populateProductDropdown() {
    const dropdown = $("#vend-produto");
    if (!dropdown.length) return;
    dropdown.html("");
    estoque.forEach((p) => {
      dropdown.append(
        `<option value="${p.nome}" data-preco="${p.venda}">${p.nome} (Estoque: ${p.qtd} un. - ${formatCurrency(p.venda)})</option>`,
      );
    });

    // Evento para atualizar preço padrão automaticamente
    dropdown.off("change").on("change", function () {
      const selectedPreco = $(this).find("option:selected").data("preco");
      $("#vend-valor").val(selectedPreco);
    });

    // Força primeiro trigger de preço
    dropdown.trigger("change");
  }

  // ==========================================
  // ENVIO DE FORMULÁRIOS (SUBMIT SYSTEM)
  // ==========================================

  // 1. Cadastro de Lançamento Financeiro
  $("#form-financeiro").on("submit", function (e) {
    e.preventDefault();

    const desc = $("#fin-descricao").val();
    const valor = parseFloat($("#fin-valor").val());
    const tipo = $("#fin-tipo").val();
    const data = $("#fin-data").val();
    const categoria = $("#fin-categoria").val();
    const status = $("#fin-status").val();

    const cod = "TRN-" + Math.floor(Math.random() * 9000 + 1000);

    // Insere no início
    financeiro.unshift({ cod, desc, data, categoria, tipo, valor, status });

    saveAllToLocalStorage();
    $("#modalFinanceiro").removeClass("show");
    this.reset();

    showToast(
      "Lançamento Confirmado",
      `Lançamento de ${tipo} no valor de ${formatCurrency(valor)} foi registrado.`,
      "success",
    );

    // Recarrega aba atual
    renderDataBasedOnTab("financeiro");
  });

  // 2. Registro de Venda (CRM)
  $("#form-venda").on("submit", function (e) {
    e.preventDefault();

    const cliente = $("#vend-cliente").val();
    const produtoNome = $("#vend-produto").val();
    const valor = parseFloat($("#vend-valor").val());
    const canal = $("#vend-canal").val();
    const quantidade = parseInt($("#vend-quantidade").val());
    const representante = $("#vend-representante").val();

    const cod = "VND-" + Math.floor(Math.random() * 9000 + 1000);

    // Verifica se temos quantidade no estoque
    const prod = estoque.find((p) => p.nome === produtoNome);
    if (prod && prod.qtd < quantidade) {
      showToast(
        "Estoque Insuficiente",
        `Não há unidades suficientes do produto ${produtoNome} em estoque. (Disponível: ${prod.qtd})`,
        "danger",
      );
      return;
    }

    // Abate do estoque
    if (prod) {
      prod.qtd -= quantidade;
    }

    const dataAgora = new Date();
    const dataFormatada = `${String(dataAgora.getDate()).padStart(2, "0")}/${String(dataAgora.getMonth() + 1).padStart(2, "0")}/${dataAgora.getFullYear()} ${String(dataAgora.getHours()).padStart(2, "0")}:${String(dataAgora.getMinutes()).padStart(2, "0")}`;

    // Insere venda
    const comissao = valor * 0.05; // 5% de comissão padrão
    vendas.unshift({
      cod,
      cliente,
      produto: produtoNome,
      data: dataFormatada,
      canal,
      valor,
      comissao,
      status: "Entregue",
    });

    // Insere também como receita no financeiro para sincronização total
    financeiro.unshift({
      cod: "TRN-" + Math.floor(Math.random() * 9000 + 1000),
      desc: `Venda ${cod} - ${cliente}`,
      data: dataAgora.toISOString().substring(0, 10),
      categoria: "Venda Licenças",
      tipo: "Receita",
      valor: valor,
      status: "Pago",
    });

    saveAllToLocalStorage();
    $("#modalVenda").removeClass("show");
    this.reset();

    showToast(
      "Pedido Emitido com Sucesso",
      `Faturamento concluído e Nota Fiscal autorizada para ${cliente}.`,
      "success",
    );
    addActivityFeed(
      `Nota Fiscal emitida para ${cliente} no valor de ${formatCurrency(valor)} (${produtoNome})`,
      "success",
    );

    renderDataBasedOnTab("vendas");
  });

  // 3. Adicionar Produto no Estoque
  $("#form-estoque").on("submit", function (e) {
    e.preventDefault();

    const nome = $("#est-nome").val();
    const categoria = $("#est-categoria").val();
    const qtd = parseInt($("#est-qtd").val());
    const custo = parseFloat($("#est-custo").val());
    const venda = parseFloat($("#est-venda").val());
    const min = parseInt($("#est-minimo").val());

    const cod = "PRD-" + String(estoque.length + 1).padStart(2, "0");

    estoque.push({
      cod,
      nome,
      categoria,
      custo,
      venda,
      qtd,
      min,
    });

    saveAllToLocalStorage();
    $("#modalEstoque").removeClass("show");
    this.reset();

    showToast(
      "Produto Cadastrado",
      `${nome} foi catalogado e integrado ao estoque.`,
      "success",
    );
    renderDataBasedOnTab("estoque");
  });

  // ==========================================
  // SISTEMA DE INTERAÇÕES NAS TABELAS
  // ==========================================

  // Ajuste de Estoque Rápido (+/-)
  $(document).on("click", ".adjust-stock-btn", function () {
    const cod = $(this).data("cod");
    const direction = $(this).data("dir");

    const prod = estoque.find((p) => p.cod === cod);
    if (!prod) return;

    if (direction === "up") {
      prod.qtd++;
      showToast(
        "Estoque Ajustado (+1)",
        `Entrada de 1 un. para ${prod.nome}`,
        "info",
      );
    } else {
      if (prod.qtd > 0) {
        prod.qtd--;
        showToast(
          "Estoque Ajustado (-1)",
          `Saída de 1 un. para ${prod.nome}`,
          "warning",
        );
      } else {
        showToast(
          "Estoque Zerado",
          `Não é possível diminuir mais o item ${prod.nome}`,
          "danger",
        );
        return;
      }
    }

    saveAllToLocalStorage();

    // Atualiza a linha na tabela sem redesenhar tudo para evitar travamento visual
    $(`#cell-qtd-${cod}`).html(`<strong>${prod.qtd}</strong> un.`);

    // Atualiza status na tabela
    let badge = $(`#badge-status-${cod}`);
    badge.removeClass();

    if (prod.qtd <= 0) {
      badge.addClass("badge-status-glow overdue").text("Sem Estoque");
    } else if (prod.qtd <= prod.min) {
      badge.addClass("badge-status-glow pending").text("Reposição Crítica");
    } else {
      badge.addClass("badge-status-glow active").text("Estoque OK");
    }

    // Recalcula KPIs superiores
    calculateKPIs();
  });

  // Excluir Lançamento Financeiro
  $(document).on("click", ".delete-transaction-btn", function () {
    const cod = $(this).data("cod");
    const idx = financeiro.findIndex((f) => f.cod === cod);
    if (idx === -1) return;

    const val = financeiro[idx].valor;
    const desc = financeiro[idx].desc;

    financeiro.splice(idx, 1);
    saveAllToLocalStorage();

    showToast(
      "Lançamento Excluído",
      `O registro "${desc}" de ${formatCurrency(val)} foi removido permanentemente.`,
      "warning",
    );
    renderDataBasedOnTab("financeiro");
  });

  // Marcar Lançamento Financeiro como Pago
  $(document).on("click", ".mark-paid-btn", function () {
    const cod = $(this).data("cod");
    const trans = financeiro.find((f) => f.cod === cod);
    if (!trans) return;

    trans.status = "Pago";
    saveAllToLocalStorage();

    showToast(
      "Lançamento Liquidado",
      `O registro "${trans.desc}" foi marcado como Pago/Confirmado.`,
      "success",
    );
    renderDataBasedOnTab("financeiro");
  });

  // Excluir Produto do Estoque
  $(document).on("click", ".delete-product-btn", function () {
    const cod = $(this).data("cod");
    const idx = estoque.findIndex((p) => p.cod === cod);
    if (idx === -1) return;

    const nome = estoque[idx].nome;
    estoque.splice(idx, 1);
    saveAllToLocalStorage();

    showToast(
      "Produto Removido",
      `O item "${nome}" foi retirado do catálogo de inventário.`,
      "warning",
    );
    renderDataBasedOnTab("estoque");
  });

  // Modificar Classificação de Colaborador (Rating de estrelas)
  $(document).on("click", ".rating-stars i", function () {
    const parent = $(this).parent();
    const colabNome = parent.data("name");
    const colab = colaboradores.find((c) => c.nome === colabNome);

    if (!colab) return;

    const rating = $(this).index() + 1;
    colab.performance = rating;

    saveAllToLocalStorage();
    renderColaboradoresTable();
    showToast(
      "Performance Atualizada",
      `Nota de avaliação de ${colab.nome} definida para ${rating} estrelas.`,
      "info",
    );
  });

  // Feedback do colaborador
  $(document).on("click", ".feedback-colaborador-btn", function () {
    const nome = $(this).data("name");
    showToast(
      "Canal Interno Aberto",
      `Solicitação de feedback enviada para ${nome}. Canal seguro ativado.`,
      "info",
    );
  });

  // ==========================================
  // HUB DE INTEGRAÇÕES & TOGGLES
  // ==========================================

  $(".integration-toggle-switch").on("change", function () {
    const id = $(this).attr("id");
    const labelId = id.replace("toggle-", "status-");
    const isChecked = $(this).is(":checked");

    let brandName = "";
    if (id === "toggle-shopify") brandName = "Shopify Store API";
    else if (id === "toggle-meli") brandName = "Mercado Livre Integrador";
    else if (id === "toggle-bling") brandName = "Bling! ERP Gateway";
    else if (id === "toggle-sap") brandName = "SAP / TOTVS Server";

    if (isChecked) {
      $(`#${labelId}`).text("Ativo").css("color", "var(--color-success)");
      showToast(
        "Integração Ativada",
        `A API do ${brandName} foi conectada com sucesso. Webhooks prontos.`,
        "success",
      );
      addActivityFeed(
        `Canal de Integração ${brandName} ativado e escutando requisições.`,
        "success",
      );
    } else {
      $(`#${labelId}`).text("Inativo").css("color", "var(--color-text-muted)");
      showToast(
        "Integração Pausada",
        `Conexão API suspensa temporariamente para ${brandName}.`,
        "warning",
      );
      addActivityFeed(
        `Integração ${brandName} desativada pelo administrador.`,
        "warning",
      );
    }
  });

  // ==========================================
  // RECURSOS EXTRA: LOGS E MOCK WEBHOOKS (REAL-TIME)
  // ==========================================

  function addActivityFeed(desc, type = "info") {
    const container = $("#activity-feed-container");
    if (!container.length) return;

    let icon = "fa-solid fa-circle-info";
    let colorClass = "bg-info-glow";

    if (type === "success") {
      icon = "fa-solid fa-money-bill-trend-up";
      colorClass = "bg-success-glow";
    } else if (type === "warning") {
      icon = "fa-solid fa-triangle-exclamation";
      colorClass = "bg-warning-glow";
    } else if (type === "danger") {
      icon = "fa-solid fa-circle-xmark";
      colorClass = "bg-warning-glow text-danger";
    }

    const now = new Date();
    const stamp = `Hoje às ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;

    const html = `
            <div class="activity-item" style="animation: fade-in-tab 0.4s ease-out;">
                <div class="activity-circle ${colorClass}"><i class="${icon}"></i></div>
                <div class="activity-details">
                    <div class="activity-desc">${desc}</div>
                    <div class="activity-time-stamp">${stamp}</div>
                </div>
            </div>
        `;

    container.prepend(html);

    // Remove itens antigos para evitar estouro de página
    if (container.children().length > 6) {
      container.children().last().remove();
    }
  }

  // Inicializa Logs mockados bonitos
  function populateInitialLogs() {
    const container = $("#activity-feed-container");
    if (!container.length) return;

    container.html("");

    const logs = [
      {
        desc: "Nota Fiscal #4802 emitida e enviada para Metalúrgica Alfa Ltda (R$ 22.400,00)",
        type: "success",
        time: "Há 12 min",
      },
      {
        desc: "Sincronização de estoque concluída com Shopify Store. 12 produtos alinhados.",
        type: "info",
        time: "Há 25 min",
      },
      {
        desc: "Tentativa de login administrador rejeitada: IP externo não cadastrado no ERP",
        type: "warning",
        time: "Há 1 hora",
      },
      {
        desc: "Transação financeira cod: <code>FIN-106</code> liquidada no módulo financeiro.",
        type: "success",
        time: "Há 2 horas",
      },
    ];

    logs.forEach((l) => {
      let icon = "fa-solid fa-circle-info";
      let colorClass = "bg-info-glow";

      if (l.type === "success") {
        icon = "fa-solid fa-circle-check";
        colorClass = "bg-success-glow";
      } else if (l.type === "warning") {
        icon = "fa-solid fa-triangle-exclamation";
        colorClass = "bg-warning-glow";
      }

      container.append(`
                <div class="activity-item">
                    <div class="activity-circle ${colorClass}"><i class="${icon}"></i></div>
                    <div class="activity-details">
                        <div class="activity-desc">${l.desc}</div>
                        <div class="activity-time-stamp">${l.time}</div>
                    </div>
                </div>
            `);
    });
  }

  // Sincronização Manual pelo Botão de Topo
  $("#syncSystemBtn").on("click", function () {
    $(this).addClass("spinning");
    showToast(
      "Sincronizando...",
      "Buscando novas vendas e notas fiscais das APIs externas...",
      "info",
    );

    setTimeout(() => {
      $("#syncSystemBtn").removeClass("spinning");

      // Simula adição de uma venda externa durante sync
      const totalEstoque = estoque.length;
      if (totalEstoque > 0) {
        const randomProd = estoque[Math.floor(Math.random() * totalEstoque)];
        const randomQtd = Math.floor(Math.random() * 2 + 1);
        const randomVal = randomProd.venda * randomQtd;

        // Realiza a venda
        randomProd.qtd = Math.max(0, randomQtd - 1);

        const codV = "VND-" + Math.floor(Math.random() * 9000 + 1000);
        const dataAgora = new Date();
        const dataFormatada = `${String(dataAgora.getDate()).padStart(2, "0")}/${String(dataAgora.getMonth() + 1).padStart(2, "0")}/${dataAgora.getFullYear()} ${String(dataAgora.getHours()).padStart(2, "0")}:${String(dataAgora.getMinutes()).padStart(2, "0")}`;

        vendas.unshift({
          cod: codV,
          cliente: "E-Commerce Cliente Inc",
          produto: randomProd.nome,
          data: dataFormatada,
          canal: "Shopify Store",
          valor: randomVal,
          comissao: randomVal * 0.05,
          status: "Entregue",
        });

        financeiro.unshift({
          cod: "TRN-" + Math.floor(Math.random() * 9000 + 1000),
          desc: `Sync Venda ${codV} - Shopify Store`,
          data: dataAgora.toISOString().substring(0, 10),
          categoria: "Venda Licenças",
          tipo: "Receita",
          valor: randomVal,
          status: "Pago",
        });

        saveAllToLocalStorage();
        showToast(
          "Sincronização Concluída",
          "Banco de dados alinhado. 1 novo pedido importado do Shopify.",
          "success",
        );
        addActivityFeed(
          `Novo pedido importado via Shopify Sync: ${codV} no valor de ${formatCurrency(randomVal)}`,
          "success",
        );

        // Recarrega abas
        const currentTab = $(".nav-link.active").data("tab");
        renderDataBasedOnTab(currentTab);
      }
    }, 1200);
  });

  // ==========================================
  // SISTEMA DE SIMULAÇÃO DE VENDAS EM TEMPO REAL
  // ==========================================

  function startRealtimeSimulation() {
    // A cada 45 segundos, simula uma transação se o switch de simulação estiver ativo
    setInterval(() => {
      const simulatorActive = $("#toggle-realtime-simulator").is(":checked");
      if (!simulatorActive) return;

      const shopifyActive = $("#toggle-shopify").is(":checked");
      if (!shopifyActive) return; // Só simula se a API shopify estiver rodando

      const clientesNomes = [
        "Agropecuária Sul S/A",
        "Supermercado Rondônia",
        "Indústria de Plásticos Sul",
        "Felipe Consultoria ME",
        "Lojas Primor Importações",
        "Tech World Equipamentos",
      ];

      const randomClient =
        clientesNomes[Math.floor(Math.random() * clientesNomes.length)];
      const randomProdIndex = Math.floor(Math.random() * estoque.length);
      const prod = estoque[randomProdIndex];

      if (prod && prod.qtd > 1) {
        prod.qtd--; // Diminui estoque

        const codV = "VND-" + Math.floor(Math.random() * 9000 + 1000);
        const dataAgora = new Date();
        const dataFormatada = `${String(dataAgora.getDate()).padStart(2, "0")}/${String(dataAgora.getMonth() + 1).padStart(2, "0")}/${dataAgora.getFullYear()} ${String(dataAgora.getHours()).padStart(2, "0")}:${String(dataAgora.getMinutes()).padStart(2, "0")}`;

        vendas.unshift({
          cod: codV,
          cliente: randomClient,
          produto: prod.nome,
          data: dataFormatada,
          canal: "Shopify Store",
          valor: prod.venda,
          comissao: prod.venda * 0.05,
          status: "Entregue",
        });

        financeiro.unshift({
          cod: "TRN-" + Math.floor(Math.random() * 9000 + 1000),
          desc: `Webhook Shopify Venda ${codV} - ${randomClient}`,
          data: dataAgora.toISOString().substring(0, 10),
          categoria: "Venda Licenças",
          tipo: "Receita",
          valor: prod.venda,
          status: "Pago",
        });

        saveAllToLocalStorage();

        showToast(
          "Webhook Recebido (Shopify)",
          `Nova venda de ${randomClient} no valor de ${formatCurrency(prod.venda)}!`,
          "success",
        );
        addActivityFeed(
          `Webhook Shopify detectado: Pedido ${codV} no valor de ${formatCurrency(prod.venda)} faturado.`,
          "success",
        );

        // Som de Notificação Simulado (Visualmente incrementa o badge de notificação)
        let currentBadge = parseInt($("#notif-badge").text()) || 0;
        $("#notif-badge").text(currentBadge + 1);

        // Recarrega dados visuais
        const currentTab = $(".nav-link.active").data("tab");
        renderDataBasedOnTab(currentTab);
      }
    }, 45000);
  }

  // ==========================================
  // SISTEMA DE FILTROS E BUSCA POR TABELA
  // ==========================================

  // Filtros de Lançamento Financeiro
  $("#filter-financeiro-tipo, #filter-financeiro-status").on(
    "change",
    function () {
      const tipo = $("#filter-financeiro-tipo").val();
      const status = $("#filter-financeiro-status").val();
      renderFinanceiroTable(tipo, status);
    },
  );

  // Filtro de Busca de Vendas
  $("#salesSearch").on("keyup", function () {
    const query = $(this).val();
    renderVendasTable(query);
  });

  // Filtro de Busca de Estoque
  $("#estoqueSearchInput").on("keyup", function () {
    const query = $(this).val();
    renderEstoqueTable(query);
  });

  // Busca Global Rápida (Topbar)
  $("#globalSearch").on("keyup", function () {
    const query = $(this).val().toLowerCase();
    if (!query) return;

    // Se houver pesquisa, sinaliza no console mock ou executa busca direcionada dependendo da aba ativa
    const activeTab = $(".nav-link.active").data("tab");
    if (activeTab === "financeiro") {
      // Filtra descrição na tabela
      $("#financeiro-table-tbody tr").each(function () {
        const text = $(this).text().toLowerCase();
        $(this).toggle(text.indexOf(query) > -1);
      });
    } else if (activeTab === "vendas") {
      renderVendasTable(query);
    } else if (activeTab === "estoque") {
      renderEstoqueTable(query);
    }
  });

  // Central de Notificações - Toggle
  $("#notificationBtn").on("click", function (e) {
    e.stopPropagation();
    $("#notificationDropdown").toggleClass("show");
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest("#notificationBtn").length) {
      $("#notificationDropdown").removeClass("show");
    }
  });

  $("#clearNotifBtn").on("click", function () {
    $("#notifList").html(`
            <div class="text-center py-4 opacity-50 font-monospace fs-7">
                Nenhuma nova notificação
            </div>
        `);
    $("#notif-badge").addClass("d-none").text("0");
    showToast("Notificações Limpas", "A central de alertas foi limpa.", "info");
  });

  // Resetar Banco de Dados
  $("#resetSystemBtn").on("click", function () {
    if (
      confirm(
        "Tem certeza que deseja resetar os dados do ERP? Isso restaurará as vendas, lançamentos e estoque iniciais originais.",
      )
    ) {
      localStorage.removeItem("nexus_financeiro");
      localStorage.removeItem("nexus_vendas");
      localStorage.removeItem("nexus_estoque");
      localStorage.removeItem("nexus_colaboradores");

      showToast(
        "Dados Resetados",
        "Restaurando configurações padrão...",
        "danger",
      );

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  });

  // Exportação em Planilha Mock (CSV)
  $("#exportFinanceiroCsvBtn").on("click", function () {
    showToast(
      "Relatório CSV Exportado",
      "O arquivo financeiro_mensal_nexus.csv foi baixado com sucesso.",
      "success",
    );
  });

  // Exportação de Gráficos (PNG)
  $("#exportFinanceiroChartBtn").on("click", function () {
    showToast(
      "Gráfico Exportado",
      "O gráfico fluxo_caixa_analitico.png foi gerado em alta definição.",
      "success",
    );
  });

  // Configurações Globais Moeda
  $("#config-moeda").on("change", function () {
    const activeTab = $(".nav-link.active").data("tab");
    renderDataBasedOnTab(activeTab);
    showToast(
      "Preços Atualizados",
      `Câmbio alterado com sucesso no painel do ERP.`,
      "info",
    );
  });

  $("#config-grafico-efeito").on("change", function () {
    const activeTab = $(".nav-link.active").data("tab");
    renderDataBasedOnTab(activeTab);
    showToast(
      "Efeito Gráfico Atualizado",
      "As curvas de preenchimento foram renderizadas.",
      "info",
    );
  });

  // Saca Saída Estoque de teste
  $("#simulaSaidaEstoqueBtn").on("click", function () {
    const total = estoque.length;
    if (total === 0) return;

    const item = estoque[Math.floor(Math.random() * total)];
    if (item.qtd > 0) {
      item.qtd = Math.max(0, item.qtd - Math.floor(Math.random() * 2 + 1));
      saveAllToLocalStorage();
      showToast(
        "Saída Simula Venda",
        `Pedido faturado. Retirada física efetuada de ${item.nome}.`,
        "warning",
      );
      renderDataBasedOnTab("estoque");
    }
  });

  // ==========================================
  // SISTEMA DE TROCA DE TEMAS (THEME ENGINE)
  // ==========================================
  const THEMES = [
    "theme-neon-violet",
    "theme-emerald-aurora",
    "theme-crimson-nova",
    "theme-oceanic-abyss",
    "theme-pearl-light",
  ];

  function applyTheme(themeName, showToastNotification = false) {
    if (!THEMES.includes(themeName)) {
      themeName = "theme-neon-violet";
    }

    // Remove temas antigos
    THEMES.forEach((t) => $("body").removeClass(t));

    // Adiciona novo tema
    $("body").addClass(themeName);

    // Sincroniza seletor de configurações
    $("#config-tema").val(themeName);

    // Salva escolha
    localStorage.setItem("nexus_tema", themeName);

    // Atualiza gráficos ativos em tempo real
    const activeTab = $(".nav-link.active").data("tab");
    renderDataBasedOnTab(activeTab);

    if (showToastNotification) {
      let labelTema = "Neon Violet";
      if (themeName === "theme-emerald-aurora") labelTema = "Emerald Aurora";
      else if (themeName === "theme-crimson-nova") labelTema = "Crimson Nova";
      else if (themeName === "theme-oceanic-abyss") labelTema = "Oceanic Abyss";
      else if (themeName === "theme-pearl-light") labelTema = "Pearl Light";

      showToast(
        "Tema Atualizado",
        `Portal reconfigurado para o tema <strong>${labelTema}</strong>.`,
        "success",
      );
      addActivityFeed(
        `Visual do painel alterado para o tema: ${labelTema}`,
        "info",
      );
    }
  }

  // Escuta mudança no seletor de configurações
  $("#config-tema").on("change", function () {
    applyTheme($(this).val(), true);
  });

  // Escuta clique no botão de troca rápida de tema
  $("#quickThemeBtn").on("click", function () {
    const currentTheme =
      localStorage.getItem("nexus_tema") || "theme-neon-violet";
    let currentIndex = THEMES.indexOf(currentTheme);
    if (currentIndex === -1) currentIndex = 0;

    const nextIndex = (currentIndex + 1) % THEMES.length;
    const nextTheme = THEMES[nextIndex];

    applyTheme(nextTheme, true);
  });

  // ==========================================
  // EXECUÇÃO INICIAL DO APP (STARTUP)
  // ==========================================

  // Inicia aba padrão (dashboard) e tema salvo
  const savedTheme = localStorage.getItem("nexus_tema") || "theme-neon-violet";
  applyTheme(savedTheme, false);

  calculateKPIs();
  initChartFinanceiro();
  initChartCanais();
  renderTopProducts();
  populateInitialLogs();
  startRealtimeSimulation();
});
