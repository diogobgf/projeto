const readline = require("readline-sync");

let geradorMatriculaVendedor = 3;
let geradorCodigoCliente = 5;
let geradorCodigoVenda = 0;
let geradorCodigoCarro = 5;

let loop = true;
let opcao = 0;

const vendedor1 = { matricula: 1, nome: "Adriano", cpf: 12345678900, idade: 49 };
const vendedor2 = { matricula: 2, nome: "Diogo", cpf: 234556789011, idade: 30 };
const vendedor3 = { matricula: 3, nome: "Lucas", cpf: 12345678900, idade: 49 };

const cliente1 = { codigoCliente: 1, nome: "Paula", cpf: 986575421, idade: 26 };
const cliente2 = { codigoCliente: 2, nome: "Sérgio", cpf: 65321458744, idade: 31 };
const cliente3 = { codigoCliente: 3, nome: "Maria", cpf: 98321456712, idade: 62 };
const cliente4 = { codigoCliente: 4, nome: "Antônio", cpf: 96587423501, idade: 21 };
const cliente5 = { codigoCliente: 5, nome: "Fernanda", cpf: 98652347815, idade: 44 };

const carro1 = { codigoCarro: 1, marca: "Chevrolet", modelo: "Onix", cor: "Prata", ano: "2019", preco: 62000 };
const carro2 = { codigoCarro: 2, marca: "Fiat", modelo: "Pulse", cor: "Branco", ano: "2021", preco: 75900 };
const carro3 = { codigoCarro: 3, marca: "Ford", modelo: "Ranger", cor: "Vermelho", ano: "2018", preco: 148000 };
const carro4 = { codigoCarro: 4, marca: "Honda", modelo: "Civic", cor: "Verde", ano: "2020", preco: 105000 };
const carro5 = { codigoCarro: 5, marca: "Renault", modelo: "kwid", cor: "Azul", ano: "2019", preco: 46000 };

const vendedores = [vendedor1, vendedor2, vendedor3];
const clientes = [cliente1, cliente2, cliente3, cliente4, cliente5];
const carros = [carro1, carro2, carro3, carro4, carro5];
const vendas = [];

function menuPrincipal() {
  console.log();
  console.log("==== Concessionária de Carros Seminovos ====");
  console.log();
  console.log("Menu | =====================================");
  console.log("============== 1 – CADASTROS ===============");
  console.log("============== 2 – CONSULTAS ===============");
  console.log("============== 3 – VENDAS ==================");
  console.log("============== 0 – Sair ====================");
  console.log("============================================");
  console.log();
}

function menuCadastros() {
  console.log();
  console.log("==== Concessionária de Carros Seminovos ====");
  console.log();
  console.log("============| Menu1 CADASTROS | ============");
  console.log();
  console.log("============== 1 – VENDEDOR ================");
  console.log("============== 2 – CLIENTE =================");
  console.log("============== 3 – CARROS ==================");
  console.log("============== 4 – ALTERAR =================");
  console.log("============== 5 – REMOVER =================");
  console.log("============== 9 – VOLTAR ==================");
  console.log("============== 0 – Sair ====================");
  console.log("============================================");
  console.log();
}

function menuConsultas() {
  console.log();
  console.log("==== Concessionária de Carros Seminovos ====");
  console.log();
  console.log("============| Menu2 CONSULTAS | ============");
  console.log();
  console.log("============== 1 – VENDEDOR ================");
  console.log("============== 2 – CLIENTE =================");
  console.log("============== 3 – CARROS ==================");
  console.log("============== 4 – ALTERAR =================");
  console.log("============== 5 – REMOVER =================");
  console.log("============== 9 – VOLTAR ==================");
  console.log("============== 0 – Sair ====================");
  console.log("============================================");
  console.log();
}

function mConsulta(texto) {
  console.log("==================================");
  console.log("======== Menu 2 – Consulta =======");
  console.log("========== 1 – VENDEDOR ==========");
  console.log("========== 2 – CLIENTE  ==========");
  console.log("========== 3 – CARROS ============");
  console.log("========== 4 – VOLTAR ============");
  console.log("==================================");

  return texto;
}

function consVendedor(texto) {
  console.log("");
  console.log("==================================");
  console.log("===== Consulta de Vendedores =====");
  console.log("==================================");
  console.log("==================================");
  console.log("===== 1 – Consulta Todos ==========");
  console.log("===== 2 – Consulta Especifica ====");
  console.log("===== 3 – Voltar Menu Consulta ===");
  console.log("==================================");

  return texto;
}

function consCliete(texto) {
  console.log("");
  console.log("==================================");
  console.log("====== Consulta de Clientes ======");
  console.log("==================================");
  console.log("==================================");
  console.log("===== 1 – Consulta Todos ==========");
  console.log("===== 2 – Consulta Especifica ====");
  console.log("===== 3 – Voltar Menu Consulta ===");
  console.log("==================================");

  return texto;
}

function consCarro(texto) {
  console.log("");
  console.log("==================================");
  console.log("======= Consulta de Carros =======");
  console.log("==================================");
  console.log("==================================");
  console.log("===== 1 – Consulta Todos ==========");
  console.log("===== 2 – Consulta Especifica ====");
  console.log("===== 3 – Voltar Menu Consulta ===");
  console.log("==================================");

  return texto;
}

function cadastrarVendedor() {
  console.log("CADASTRO DE VENDEDOR | ========================");
  console.log();
  let nomeVendedor = readline.question("Nome: ");
  let cpfVendedor = readline.question("CPF: ");
  let idadeVendedor = readline.question("Idade: ");
  geradorMatriculaVendedor++;
  const vendedor = {
    matricula: geradorMatriculaVendedor,
    nome: nomeVendedor,
    cpf: cpfVendedor,
    idade: idadeVendedor,
  };
  vendedores.push(vendedor);
  console.log();
  console.log("Vendedor cadastrado com sucesso!");
  return (opcao = 1);
}

function cadastrarCliente() {
  console.log("CADASTRO DE CLIENTE  | ========================");
  console.log();
  let nomeCliente = readline.question("Nome: ");
  let cpfCliente = readline.questionInt("CPF: ");
  let idadeCliente = readline.questionInt("Idade: ");
  geradorCodigoCliente++;
  const cliente = {
    codigoCliente: geradorCodigoCliente,
    nome: nomeCliente,
    cpf: cpfCliente,
    idade: idadeCliente,
  };
  clientes.push(cliente);
  console.log();
  console.log("Cliente cadastrado com sucesso!");
  opcao = 1;
  return (opcao = 1);
}

function cadastrarCarro() {
  console.log("CADASTRO DE CARROS   | ========================");
  console.log();
  let marcaCarro = readline.question("Marca: ");
  let modeloCarro = readline.question("Modelo: ");
  let corCarro = readline.question("Cor: ");
  let anoFabricacao = readline.question("Ano de fabricação: ");
  let valorCarro = readline.question("Valor: ");
  geradorCodigoCarro++;
  const carro = {
    codigoCarro: geradorCodigoCarro,
    marca: marcaCarro,
    modelo: modeloCarro,
    cor: corCarro,
    ano: anoFabricacao,
    preco: valorCarro,
  };
  carros.push(carro);
  console.log();
  console.log("Carro cadastrado com sucesso!");
  return (opcao = 1);
}

function alterarCadastroVendedor() {
  console.log();
  matriculaBusca = readline.question("Informe o ID do Vendedor: ");
  console.log();
  console.log("ALTERAÇÃO CADASTRAL | VENDEDOR ========");
  console.log();
  for (let i = 0; i < vendedores.length; i++) {
    if (vendedores[i].matricula == matriculaBusca) {
      console.log(`O seguinte cadastro será alterado:\n\nID: ${vendedores[i].matricula}\nNome: ${vendedores[i].nome}\nCPF: ${vendedores[i].cpf}`);
      console.log();
      vendedores[i].nome = readline.question("Novo nome: ");
      vendedores[i].cpf = readline.question("Novo cpf: ");
      vendedores[i].idade = readline.question("Nova idade: ");
      console.log(`Dados inseridos:\n\nVendedor ${vendedores[i].nome}\nCPF: ${vendedores[i].cpf}\nIdade: ${vendedores[i].idade} `);
    }
  }
  console.log();
  console.log("Cadastro atualizado com sucesso!");
  return (opcao = 1);
}

function alterarCadastroCliente() {
  console.log();
  matriculaBusca = readline.question("Informe o ID do Cliente: ");
  console.log();
  console.log("ALTERAÇÃO CADASTRAL | CLIENTE ========");
  console.log();
  for (let i = 0; i < clientes.length; i++) {
    if (clientes[i].codigoCliente == matriculaBusca) {
      console.log(`O seguinte cadastro será alterado:\n\nID: ${clientes[i].codigoCliente}\nNome: ${clientes[i].nome}\nCPF: ${clientes[i].cpf}`);
      console.log();
      clientes[i].nome = readline.question("Novo nome: ");
      clientes[i].cpf = readline.question("Novo cpf: ");
      clientes[i].idade = readline.question("Nova idade: ");
      console.log(`Dados inseridos:\n\nCliente ${clientes[i].nome}\nCPF: ${clientes[i].cpf}\nIdade: ${clientes[i].idade} `);
    }
  }
  console.log();
  console.log("Cadastro atualizado com sucesso!");
  return (opcao = 1);
}

function alterarCadastroCarro() {
  console.log();
  matriculaBusca = readline.question("Informe o ID do Carro: ");
  console.log();
  console.log("ALTERAÇÃO CADASTRAL | CARRO ========");
  console.log();
  for (let i = 0; i < carros.length; i++) {
    if (carros[i].codigoCarro == matriculaBusca) {
      console.log(`O seguinte cadastro será alterado:\n\nID: ${carros[i].codigoCarro}\nMarca ${carros[i].marca}\nModelo ${carros[i].modelo}\nAno ${carros[i].ano}\nValor: ${carros[i].preco}`);
      console.log();
      carros[i].marca = readline.question("Nova Marca: ");
      carros[i].modelo = readline.question("Novo Modelo: ");
      carros[i].versao = readline.question("nova Cor: ");
      carros[i].ano = readline.question("Novo Ano: ");
      carros[i].preco = readline.question("Novo Preço: ");
      console.log(`Dados inseridos:\n\nMarca ${carros[i].marca}\nModelo ${carros[i].modelo}\nAno ${carros[i].ano}\nValor: ${carros[i].preco}`);
    }
  }
  console.log();
  console.log("Cadastro atualizado com sucesso!");
  return (opcao = 1);
}

function excluirCadastroVendedor() {
  console.log();
  const matriculaBusca = readline.question("Informe o ID do Vendedor: ");
  console.log();
  console.log("EXCLUSÃO CADASTRAL | VENDEDOR =========");
  console.log();

  // Encontra o índice do vendedor com base na matrícula
  const indexVendedor = vendedores.findIndex((vendedor) => vendedor.matricula == matriculaBusca);

  if (indexVendedor !== -1) {
    console.log(`O seguinte cadastro será excluído:\n\nID: ${vendedores[indexVendedor].matricula} | Nome: ${vendedores[indexVendedor].nome} | CPF: ${vendedores[indexVendedor].cpf}`);
    vendedores.splice(indexVendedor, 1);
    console.log("Cadastro excluído com sucesso!");
  } else {
    console.log("Vendedor não encontrado. Verifique o ID inserido.");
  }

  return (opcao = 1);
}

function excluirCadastroCliente() {
  console.log();
  const matriculaBusca = readline.question("Informe o ID do Cliente: ");
  console.log("EXCLUSÃO CADASTRAL | CLIENTE ==========");
  console.log();

  // Encontra o índice do cliente com base no código do cliente
  const indexCliente = clientes.findIndex((cliente) => cliente.codigoCliente == matriculaBusca);

  if (indexCliente !== -1) {
    console.log(`O seguinte cadastro será excluído:\n\nID: ${clientes[indexCliente].codigoCliente} | Nome: ${clientes[indexCliente].nome} | CPF: ${clientes[indexCliente].cpf}`);
    clientes.splice(indexCliente, 1);
    console.log("Cadastro excluído com sucesso!");
  } else {
    console.log("Cliente não encontrado. Verifique o ID inserido.");
  }

  return (opcao = 1);
}

function excluirCadastroCarro() {
  console.log();
  const matriculaBusca = readline.question("Informe o ID do Carro: ");
  console.log("EXCLUSÃO CADASTRAL | CARRO ============");
  console.log();

  // Encontra o índice do carro com base no código do carro
  const indexCarro = carros.findIndex((carro) => carro.codigoCarro == matriculaBusca);

  if (indexCarro !== -1) {
    console.log(`O seguinte cadastro será excluído:\n\nID: ${carros[indexCarro].codigoCarro} | Marca: ${carros[indexCarro].marca} | Modelo: ${carros[indexCarro].modelo} | Ano: ${carros[indexCarro].ano}`);
    carros.splice(indexCarro, 1);
    console.log("Cadastro excluído com sucesso!");
  } else {
    console.log("Carro não encontrado. Verifique o ID inserido.");
  }

  return (opcao = 1);
}

// Função para realizar uma venda
function realizarVenda() {
  console.log("======================== | REALIZAR VENDAS | ========================");
  console.log();

  // Exibe a lista de vendedores disponíveis
  console.log("Vendedores disponíveis:");
  for (const vendedor of vendedores) {
    console.log(`Matrícula: ${vendedor.matricula}, Nome: ${vendedor.nome}`);
  }
  const matriculaVendedor = readline.questionInt("Selecione a matrícula do vendedor: ");

  // Exibe a lista de clientes disponíveis
  console.log("\nClientes disponíveis:");
  for (const cliente of clientes) {
    console.log(`Código: ${cliente.codigoCliente}, Nome: ${cliente.nome}`);
  }
  const codigoCliente = readline.questionInt("Selecione o código do cliente: ");

  // Exibe a lista de carros disponíveis
  console.log("\nCarros disponíveis:");
  for (const carro of carros) {
    console.log(`Código: ${carro.codigoCarro}, Marca: ${carro.marca}, Modelo: ${carro.modelo}`);
  }
  const codigoCarro = readline.questionInt("Selecione o código do carro: ");

  // Encontra o vendedor, cliente e carro selecionados
  const vendedorSelecionado = vendedores.find((vendedor) => vendedor.matricula === matriculaVendedor);
  const clienteSelecionado = clientes.find((cliente) => cliente.codigoCliente === codigoCliente);
  const carroSelecionado = carros.find((carro) => carro.codigoCarro === codigoCarro);
  // Verifica se os valores são válidos
  if (!vendedorSelecionado || !clienteSelecionado || !carroSelecionado) {
    console.log("\nSeleção inválida. Verifique os códigos selecionados.");
    return;
  }

  // Realiza a venda e remove o carro da lista de carros disponíveis
  const venda = {
    codigoVenda: ++geradorCodigoVenda,
    vendedor: vendedorSelecionado,
    cliente: clienteSelecionado,
    carro: carroSelecionado,
  };
  //Exibe os detalhes da Venda
  console.log("\nVenda realizada com sucesso!");
  console.log(`Detalhes da venda:`);
  console.log(`Código da venda: ${venda.codigoVenda}`);
  console.log(`Vendedor: ${venda.vendedor.nome}`);
  console.log(`Cliente: ${venda.cliente.nome}`);
  console.log(`Carro: ${venda.carro.marca} ${venda.carro.modelo}`);
  console.log(`Valor da venda: R$${venda.carro.preco.toFixed(2)}`);

  // Remove o carro da lista de carros disponíveis
  const indexCarro = carros.indexOf(carroSelecionado);
  if (indexCarro !== -1) {
    carros.splice(indexCarro, 1);
  }
  vendas.push(venda);
}

function consultarExcluirVendas() {
  console.log("==================== | CONSULTAR/EXCLUIR VENDAS | ====================");
  console.log();

  // Exibe a lista de vendas disponíveis
  console.log("Vendas realizadas:");
  for (const venda of vendas) {
    console.log(`Código da Venda: ${venda.codigoVenda}`);
    console.log(`Vendedor: ${venda.vendedor.nome}`);
    console.log(`Cliente: ${venda.cliente.nome}`);
    console.log(`Carro: ${venda.carro.marca} ${venda.carro.modelo}`);
    console.log(`Valor da Venda: R$${venda.carro.preco.toFixed(2)}`);
    console.log();
  }

  const codigoVendaParaExcluir = readline.questionInt("Digite o código da venda para consultar/excluir (ou 0 para sair): ");

  if (codigoVendaParaExcluir === 0) {
    return;
  }

  // Encontra a venda com base no código inserido
  const vendaParaExcluir = vendas.find((venda) => venda.codigoVenda === codigoVendaParaExcluir);

  if (!vendaParaExcluir) {
    console.log("\nVenda não encontrada. Verifique o código inserido.");
    return;
  }

  // Exibe os detalhes da venda
  console.log("\nDetalhes da Venda:");
  console.log(`Código da Venda: ${vendaParaExcluir.codigoVenda}`);
  console.log(`Vendedor: ${vendaParaExcluir.vendedor.nome}`);
  console.log(`Cliente: ${vendaParaExcluir.cliente.nome}`);
  console.log(`Carro: ${vendaParaExcluir.carro.marca} ${vendaParaExcluir.carro.modelo}`);
  console.log(`Valor da Venda: R$${vendaParaExcluir.carro.preco.toFixed(2)}`);

  const confirmacao = readline.question("Deseja realmente excluir esta venda? (S para Sim, N para Não): ");
  // Remove a venda da lista de vendas
  if (confirmacao.toUpperCase() === "S") {
    const indexVendaParaExcluir = vendas.indexOf(vendaParaExcluir);
    if (indexVendaParaExcluir !== -1) {
      vendas.splice(indexVendaParaExcluir, 1);
      console.log("Venda excluída com sucesso!");
    } else {
      console.log("Erro ao excluir a venda.");
    }
  } else {
    console.log("Exclusão da venda cancelada.");
  }
}

// Função para exibir o menu de vendas
function menuVendas() {
  console.log();
  console.log("==== Concessionária de Carros Seminovos ====");
  console.log();
  console.log("============| Menu3 VENDAS | ============");
  console.log();
  console.log("============== 1 – REALIZAR VENDA ======");
  console.log("============== 2 – CONSULTAR/EXCLUIR VENDAS =====");
  console.log("============== 9 – VOLTAR ================");
  console.log("============== 0 – Sair ==================");
  console.log("=========================================");
  console.log();
}

// inicializa a aplicação exibindo o menu principal
while (loop) {
  menuPrincipal();
  opcao = readline.questionInt("Escolha uma opcao: ");
  if (opcao == 0) {
    console.log("Sistema encerrado!");
    loop = false;
    break;
  } else if (opcao == 1) {
    menuCadastros();
    opcao = readline.questionInt("Escolha uma opcao: ");
    switch (opcao) {
      case 1:
        console.log();
        cadastrarVendedor();
        break;
      case 2:
        console.log();
        cadastrarCliente();
        break;
      case 3:
        console.log();
        cadastrarCarro();
        break;
      case 4:
        console.log();
        console.log("ALTERAÇÃO CADASTRAL | ==================");
        console.log();
        opcao = readline.questionInt(`Escolha uma opcao:\n\n1. Vendedor 2. Cliente 3. Carro: `);
        if (opcao == 1) {
          alterarCadastroVendedor();
          break;
        } else if (opcao == 2) {
          alterarCadastroCliente();
          break;
        } else if (opcao == 3) {
          alterarCadastroCarro();
          break;
        } else {
          console.log("Opção inválida. Tente Novamente!");
          break;
        }
      case 5:
        console.log();
        console.log("EXCLUSÃO CADASTRAL | ==================");
        console.log();
        opcao = readline.questionInt(`Escolha uma opcao:\n\n1. Vendedor 2. Cliente 3. Carro: `);
        if (opcao == 1) {
          excluirCadastroVendedor();
          break;
        } else if (opcao == 2) {
          excluirCadastroCliente();
          break;
        } else if (opcao == 3) {
          excluirCadastroCarro();
          break;
        } else {
          console.log("Opção Inválida. Tente novamente!");
        }
      case 9:
        opcao = 1;
        break;
      case 0:
        console.log();
        console.log("Sistema Encerrado");
        loop = false;
        break;
      default:
        console.log();
        console.log("Opção inválida. Tente novamente!");
        break;
    }
  } else if (opcao == 2) {
    mConsulta();

    let cont_Mc = 0;
    while (cont_Mc === 0){

    const opcao_mCons = parseInt(readline.question("Digite o numero referente: "))

    if (opcao_mCons === 1){
        
    consVendedor();

    let cont_Mcv = 0;
    while (cont_Mcv === 0){
      const opcao_Mcv = parseInt(readline.question("Digite o numero referente: "))

      if (opcao_Mcv === 1){
        console.log("");
        console.log("==================================");
        console.log("========= Consulta Todos ==========");
        console.log("==================================");
        console.log("");
        console.log(vendedores);
        console.log("");
        
        let cons_voltar = parseInt(readline.question("Pressione Enter para volta ao menu consulta... "));
        console.log("");
        mConsulta ();
        cont_Mcv = 1;
    
      } else if(opcao_Mcv === 2){
        console.log("");
        console.log("==================================");
        console.log("======= Consulta Específica =======");
        console.log("==================================");
        console.log("");

        let cod_vend = parseInt(readline.question("Digite o Matrícula do Vendedor: "));
        cod_vend = cod_vend - 1;
        console.log("");
        console.log(vendedores[cod_vend]);
        console.log(""); 
        
        let cont_Mcv2 = 0;
        while (cont_Mcv2 === 0){
          let cons_Voltar2 = parseInt(readline.question("Deseja realizar uma nova consulta? Digite 1-Sim / 2-Não: "));
          
          if (cons_Voltar2 === 1){
            console.log("");
            console.log("==================================");
            console.log("======= Consulta Específica =======");
            console.log("==================================");
            console.log("");

            let cod_vend = parseInt(readline.question("Digite a Matrícula do Vendedor: "));
            cod_vend = cod_vend - 1;
            console.log("");
            console.log(vendedores[cod_vend]); 
            console.log("");
                       
          } else if (cons_Voltar2 === 2){
            console.log("");
            consVendedor();
            console.log("");
            break
          } else {
            console.log("");
            console.log("Opção Inválida");
            console.log("");
          }
        }       
      } else {
        console.log("");
        mConsulta ();
        break   
      }          
    }      
  } else if(opcao_mCons === 2){
    
    consCliete();
    
    let cont_Mcc = 0;
    while (cont_Mcc === 0){

      const opcao_Mcc = parseInt(readline.question("Digite o numero referente: "))

      if (opcao_Mcc === 1){
        console.log("");
        console.log("==================================");
        console.log("========= Consulta Todos ==========");
        console.log("==================================");
        console.log("");
        console.log(clientes);
        console.log("");

        let cons_voltar1 = parseInt(readline.question("Pressione Enter para volta ao menu consulta... "));
        console.log("");
        mConsulta ();
        console.log("");
        cont_Mcc = 1;
                    
      } else if(opcao_Mcc === 2){
        console.log("");
        console.log("==================================");
        console.log("======= Consulta Específica =======");
        console.log("==================================");
        console.log("");

        let cod_cliente = parseInt(readline.question("Digite a Matrícula do Cliente: "));
        cod_cliente = cod_cliente - 1;
        console.log("");
        console.log(clientes[cod_cliente]);
        console.log("");
        
        let cont_Mcc2 = 0;
        while (cont_Mcc2 === 0){
          let cons_Voltar3 = parseInt(readline.question("Deseja realizar uma nova consulta? Digite 1-Sim / 2-Não: "));
          
          if (cons_Voltar3 === 1){
            console.log("");
            console.log("==================================");
            console.log("======= Consulta Específica =======");
            console.log("==================================");
            console.log("");

            let cod_cliente = parseInt(readline.question("Digite a Matrícula do Cliente: "));
            cod_cliente = cod_cliente - 1;
            console.log("");
            console.log(clientes[cod_cliente]);
            console.log("");
            
          } else if (cons_Voltar3 === 2){
            console.log("");
            consCliete();
            console.log("");
            break
          }else {
            console.log("");
            console.log("Opção Inválida");
            console.log("");
          }
        }
      } else {
        console.log("");
        mConsulta();
        break 
      }
    }
  } else if(opcao_mCons === 3){

    consCarro();

    let cont_Mccar = 0;
    while (cont_Mccar === 0){

      const opcao_Mccar = parseInt(readline.question("Digite o numero referente: "))
      
      if (opcao_Mccar === 1){
        console.log("");
        console.log("==================================");
        console.log("========= Consulta Todos ==========");
        console.log("==================================");
        console.log("");
        console.log(carros);
        console.log("");

        let cons_voltar4 = parseInt(readline.question("Pressione Enter para volta ao menu consulta... "));
        console.log("");
        mConsulta ();
        cont_Mccar = 1;
                    
      }else if(opcao_Mccar === 2){
        console.log("");
        console.log("==================================");
        console.log("======= Consulta Específica =======");
        console.log("==================================");
        console.log("");

        let cod_carro = parseInt(readline.question("Digite o código do Carro: "));
        cod_carro = cod_carro - 1;
        console.log("");
        console.log(carros[cod_carro]);
        console.log("");

        let cont_Mccar2 = 0;
        while (cont_Mccar2 === 0){

          let cons_Voltar5 = parseInt(readline.question("Deseja realizar uma nova consulta? Digite 1-Sim / 2-Não: "));

          if (cons_Voltar5 === 1){
            console.log("");
            console.log("==================================");
            console.log("======= Consulta Específica =======");
            console.log("==================================");
            console.log("");

            let cod_carro = parseInt(readline.question("Digite o cádigo do Carro: "));
            cod_carro = cod_carro - 1;
            console.log("");
            console.log(carros[cod_carro]);
            console.log("");

          } else if (cons_Voltar5 === 2){
            console.log("");
            consCarro();
            console.log("");
            break
          }else {
            console.log("");
            console.log("Opção Inválida");
            console.log("");
          }
        }
      } else{
        console.log("");
        mConsulta();
        break
      }
    }
  } else if (opcao_mCons === 4){

    console.log("Voltar para o Menu principal");
    break
        
  } else {
    console.log("");
    console.log("Opção Inválida");
    console.log("");

    cont_Mc = 0;
    mConsulta ();
  }
    }
  } else if (opcao == 3) {
    while (true) {
      menuVendas();
      opcao = readline.questionInt("Escolha uma opcao: ");
      if (opcao == 1) {
        realizarVenda();
      } else if (opcao == 2) {
        consultarExcluirVendas();
      } else if (opcao == 9) {
        break;
      } else if (opcao == 0) {
        console.log("Sistema Encerrado");
        loop = false;
        break;
      } else {
        console.log("Opção inválida. Tente novamente!");
      }
    }
  } else {
    console.log("Opção inválida. Tente novamente!");
  }
}
