// Função para incluir uma venda no sub-menu Vendas
function incluirVenda() {
  console.log("==== Incluir Venda ====");
  const codigoVenda = gereadorCodigoVenda; // Solicita o código da venda ao usuário
  const matVendedor = readline.questionInt("Informe a Matricula do vendedor: "); // Solicita o CPF do vendedor
  // Procura o vendedor pelo CPF na lista de vendedores
  const vendedor = vendedores.find((v) => v.cpf === cpfVendedor);

  if (!vendedor) {
    console.log("Vendedor não encontrado."); // Se o vendedor não for encontrado, exibe uma mensagem de erro
    return;
  }

  const marcaProduto = readline.question("Informe a marca do produto: "); // Solicita a marca do produto
  const valorProduto = readline.questionFloat("Informe o valor do produto: "); // Solicita o valor do produto
  const nomeCliente = readline.question("Informe o nome do cliente: "); // Solicita o nome do cliente

  // Cria um objeto representando a venda
  const venda = {
    codigo: codigoVenda,
    vendedor: codigoDoVendedor,
    produto: { marca: marcaProduto, valor: valorProduto },
    cliente: nomeCliente,
  };

  // Adiciona a venda à lista de vendas do vendedor
  vendedor.vendas.push(venda);

  console.log("Venda incluída com sucesso!"); // Exibe mensagem de sucesso
}

// Função para excluir uma venda
function excluirVenda() {
  console.log("==== Excluir Venda ====");
  const codigoVenda = readline.question("Informe o código da venda a ser excluída: "); // Solicita o código da venda a ser excluída

  // Procura a venda pelo código e a remove, se encontrada
  vendedores.forEach((vendedor) => {
    const index = vendedor.vendas.findIndex((venda) => venda.codigo === codigoVenda);
    if (index !== -1) {
      vendedor.vendas.splice(index, 1);
      console.log("Venda excluída com sucesso!"); // Exibe mensagem de sucesso
    }
  });
}

// Função para alterar uma venda
function alterarVenda() {
  console.log("==== Alterar Venda ====");
  const codigoVenda = readline.question("Informe o código da venda a ser alterada: "); // Solicita o código da venda a ser alterada

  // Procura a venda pelo código e exibe os detalhes da venda
  vendedores.forEach((vendedor) => {
    const venda = vendedor.vendas.find((v) => v.codigo === codigoVenda);
    if (venda) {
      console.log("Venda encontrada:");
      console.log(`Código: ${venda.codigo}`);
      console.log(`Vendedor: ${vendedor.nome}`);
      console.log(`Produto: ${venda.produto.marca} - Valor: ${venda.produto.valor}`);
      console.log(`Cliente: ${venda.cliente}`);

      // Solicita um novo valor para o produto
      const novoValor = readline.questionFloat("Informe o novo valor do produto: ");
      venda.produto.valor = novoValor;

      console.log("Venda alterada com sucesso!"); // Exibe mensagem de sucesso
    }
  });
}

// Função para consultar uma venda pelo código
function consultarVenda() {
  console.log("==== Consultar Venda ====");
  const codigoVenda = readline.question("Informe o código da venda a ser consultada: "); // Solicita o código da venda a ser consultada

  // Procura a venda pelo código e exibe seus detalhes, se encontrada
  vendedores.forEach((vendedor) => {
    const venda = vendedor.vendas.find((v) => v.codigo === codigoVenda);
    if (venda) {
      console.log("Venda encontrada:");
      console.log(`Código: ${venda.codigo}`);
      console.log(`Vendedor: ${vendedor.nome}`);
      console.log(`Produto: ${venda.produto.marca} - Valor: ${venda.produto.valor}`);
      console.log(`Cliente: ${venda.cliente}`);
    }
  });
}

// Função para exibir o histórico de vendas de todos os vendedores
function historicoVendas() {
  console.log("==== Histórico de Vendas ====");

  // Itera sobre a lista de vendedores
  vendedores.forEach((vendedor) => {
    if (vendedor.vendas.length > 0) {
      console.log(`Vendedor: ${vendedor.nome}`);
      console.log("Vendas:");

      // Itera sobre a lista de vendas do vendedor e exibe os detalhes de cada venda
      vendedor.vendas.forEach((venda) => {
        console.log(`Código: ${venda.codigo}`);
        console.log(`Produto: ${venda.produto.marca} - Valor: ${venda.produto.valor}`);
        console.log(`Cliente: ${venda.cliente}`);
        console.log("------------------------");
      });
    }
  });
}

// Função para gerenciar o sub-menu de vendas
function menuVendas() {
  while (true) {
    exibirMenu(["INCLUIR", "EXCLUIR", "ALTERAR", "CONSULTAR UMA VENDA", "HISTÓRICO DE VENDAS"]); // Exibe as opções do menu

    let opcao = readline.questionInt("Escolha uma opção: "); // Solicita a escolha de uma opção

    // Executa a ação correspondente à opção selecionada
    switch (opcao) {
      case 1:
        incluirVenda();
        break;
      case 2:
        excluirVenda();
        break;
      case 3:
        alterarVenda();
        break;
      case 4:
        consultarVenda();
        break;
      case 5:
        historicoVendas();
        break;
      case 9:
        return; // Retorna ao menu principal
      case 0:
        console.log("Saindo do menu de vendas..."); // Exibe mensagem de saída
        return;
      default:
        console.log("Opção inválida!"); // Exibe mensagem de opção inválida
    }
  }
}