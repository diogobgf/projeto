const readline = require("readline-sync");
// const clear = require("clear");

// EXECUÇÃO
// instâncias de vendedor
const vendedor1 = { matricula: 1, nome: "Adriano", cpf: 12345678900, idade: 49 };
const vendedor2 = { matricula: 2, nome: "Diogo", cpf: 234556789011, idade: 30 };
const vendedor3 = { matricula: 3, nome: "Lucas", cpf: 12345678900, idade: 49 };

// instâncias de cliente
const cliente1 = { codigoCliente: 1, nome: "Paula", cpf: 986575421, idade: 26 };
const cliente2 = { codigoCliente: 2, nome: "Sérgio", cpf: 65321458744, idade: 31 };
const cliente3 = { codigoCliente: 3, nome: "Maria", cpf: 98321456712, idade: 62 };
const cliente4 = { codigoCliente: 4, nome: "Antônio", cpf: 96587423501, idade: 21 };
const cliente5 = { codigoCliente: 5, nome: "Fernanda", cpf: 98652347815, idade: 44 };

// instâncias de carro
const carro1 = { codigoCarro: 1, marca: "Chevrolet", modelo: "Onix", cor: "Prata", ano: "2019", preco: 62000 };
const carro2 = { codigoCarro: 2, marca: "Fiat", modelo: "Pulse", cor: "Branco", ano: "2021", preco: 75900 };
const carro3 = { codigoCarro: 3, marca: "Ford", modelo: "Ranger", cor: "Vermelho", ano: "2018", preco: 148000 };
const carro4 = { codigoCarro: 4, marca: "Honda", modelo: "Civic", cor: "Verde", ano: "2020", preco: 105000 };
const carro5 = { codigoCarro: 5, marca: "Renault", modelo: "kwid", cor: "Azul", ano: "2019", preco: 46000 };

// listas
const vendedores = [vendedor1, vendedor2, vendedor3];
const clientes = [cliente1, cliente2, cliente3, cliente4, cliente5];
const carros = [carro1, carro2, carro3, carro4, carro5];

// geradores de código automático
let geradorMatriculaVendedor = 3;
let geradorCodigoCliente = 5;
let gereadorCodigoVenda = 0;
let geradorCodigoCarro = 5;

// variáveis de controle
let loop = true;
let opcao = 0;

// função exibe o menu principal
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

// função exibe o menu cadastros
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

function mConsulta (texto){
    console.log("==================================");
    console.log("======== Menu 2 – Consulta =======");
    console.log("========== 1 – VENDEDOR ==========");
    console.log("========== 2 – CLIENTE  ==========");
    console.log("========== 3 – CARROS ============");
    console.log("========== 4 – VOLTAR ============");
    console.log("==================================");
    
    return texto;
}

function consVendedor (texto){
    console.log("");
    console.log("==================================");
    console.log("===== Consulta de Vendedores =====");
    console.log("==================================");
    console.log("==================================");
    console.log("===== 1 – Cosulta Todos ==========");
    console.log("===== 2 – Consulta Especifica ====");
    console.log("===== 3 – Voltar Menu Consulta ===");
    console.log("==================================");

    return texto;
}

function consCliete (texto){
    console.log("");
    console.log("==================================");
    console.log("====== Consulta de Clientes ======");
    console.log("==================================");
    console.log("==================================");
    console.log("===== 1 – Cosulta Todos ==========");
    console.log("===== 2 – Consulta Especifica ====");
    console.log("===== 3 – Voltar Menu Consulta ===");
    console.log("==================================");

    return texto;
}

function consCarro (texto){
    console.log("");
    console.log("==================================");
    console.log("======= Consulta de Carros =======");
    console.log("==================================");
    console.log("==================================");
    console.log("===== 1 – Cosulta Todos ==========");
    console.log("===== 2 – Consulta Especifica ====");
    console.log("===== 3 – Voltar Menu Consulta ===");
    console.log("==================================");

    return texto;
}

// função para cadastrar novo vendedor
function cadastrarVendedor() {
    console.log("CADASTRO DE VENDEDOR | ========================");
    console.log();
    let nomeVendedor = readline.question("Nome: ");
    let cpfVendedor = readline.question("CPF: ");
    let idadeVendedor = readline.question("Idade: ");
    geradorMatriculaVendedor++;
    const vendedor = {
        matricula: geradorMatriculaVendedor++,
        nome: nomeVendedor,
        cpf: cpfVendedor,
        idade: idadeVendedor,
    };
    vendedores.push(vendedor);
    console.log();
    console.log("Vendedor cadastrado com sucesso!");
    return opcao = 1;
}

// função para cadastrar novo cliente
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
    return opcao = 1;
}

// função para cadastrar novo carro
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
        preco: valorCarro
    };
    carros.push(carro);
    console.log();
    console.log("Carro cadastrado com sucesso!");
    return opcao = 1;
}

// função para alterar cadastro de vendedor
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
    return opcao = 1;
}

// função para alterar cadastro de cliente
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
    return opcao = 1;
}

// função para alterar cadastro de carro
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
    return opcao = 1;
}

// função para excluir cadastro de vendedor
function excluirCadastroVendedor() {
    console.log();
    matriculaBusca = readline.question("Informe o ID do Vendedor: ");
    console.log();
    console.log("EXCLUSÃO CADASTRAL | VENDEDOR =========");
    console.log();
    for (let i = 0; i < vendedores.length; i++) {
        if (vendedores[i].matricula == matriculaBusca) {
            console.log(`O seguinte cadastro será excluído:\n\nID: ${vendedores[i].matricula} | Nome: ${vendedores[i].nome} | CPF: ${vendedores[i].cpf}`);
        }
    }
    console.log();
    console.log("Cadastro excluído com sucesso!");
    return opcao = 1;
}

// função para excluir cadastro de cliente
function excluirCadastroCliente() {
    console.log();
    matriculaBusca = readline.question("Informe o ID do Cliente: ");
    console.log("EXCLUSÃO CADASTRAL | CLIENTE ==========");
    console.log();
    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].codigoCliente == matriculaBusca) {
            console.log(`O seguinte cadastro será excluído:\n\nID: ${clientes[i].codigoCliente} | Nome: ${clientes[i].nome} | CPF: ${clientes[i].cpf}`);
        }
    }
    console.log();
    console.log("Cadastro excluído com sucesso!");
    return opcao = 1;
}

// função para excluir cadastro de carro
function excluirCadastroCarro() {
    console.log();
    matriculaBusca = readline.question("Informe o ID do Carro: ");
    console.log();
    console.log("EXCLUSÃO CADASTRAL | CARRO ============");
    console.log();
    for (let i = 0; i < carros.length; i++) {
        if (carros[i].codigoCarro == matriculaBusca) {
            console.log(`O seguinte cadastro será excluído:\n\nID: ${carros[i].codigoCarro} |  marca ${carros[i].marca} | modelo ${carros[i].modelo} | ano ${carros[i].ano}`);
        }
    }
    console.log();
    console.log("Cadastro excluído com sucesso!");
    return opcao = 1;
}

// inicializa a aplicação exibindo o menu principal
while (loop) {
    menuPrincipal();
    opcao = readline.questionInt("Escolha uma opcao: ");
    if (opcao == 0) {
        console.log('Sistema encerrado!');
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
                    console.log('Opção inválida. Tente Novamente!');
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
                    console.log('Opção Inválida. Tente novamente!');
                }
            case 9:
                opcao = 1;
                break;
            case 0:
                console.log();
                console.log('Sistema Encerrado');
                loop = false;
                break;
            default:
                console.log();
                console.log('Opção inválida. Tente novamente!');
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
            console.log("========= Cosulta Todos ==========");
            console.log("==================================");
            console.log("");
            console.log(vendedores);
            console.log("");
            
            let cons_voltar = parseInt(readline.question("Digite 1 para volta ao Menu Consultas: "));
            console.log("");
            mConsulta ();
            cont_Mcv = 1;
        
          } else if(opcao_Mcv === 2){
            console.log("");
            console.log("==================================");
            console.log("======= Cosulta Específica =======");
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
                console.log("======= Cosulta Específica =======");
                console.log("==================================");
                console.log("");

                let cod_vend = parseInt(readline.question("Digite o Matrícula do Vendedor: "));
                cod_vend = cod_vend - 1;
                console.log("");
                console.log(vendedores[cod_vend]); 
                console.log("");
                           
              } else {
                console.log("");
                consVendedor();
                console.log("");
                break
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
            console.log("========= Cosulta Todos ==========");
            console.log("==================================");
            console.log("");
            console.log(clientes);
            console.log("");

            let cons_voltar1 = parseInt(readline.question("Digite 1 para volta ao Menu Consultas: "));
            console.log("");
            mConsulta ();
            console.log("");
            cont_Mcc = 1;
                        
          } else if(opcao_Mcc === 2){
            console.log("");
            console.log("==================================");
            console.log("======= Cosulta Específica =======");
            console.log("==================================");
            console.log("");

            let cod_cliente = parseInt(readline.question("Digite o Matrícula do Cliente: "));
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
                console.log("======= Cosulta Específica =======");
                console.log("==================================");
                console.log("");

                let cod_cliente = parseInt(readline.question("Digite o Matrícula do Cliente: "));
                cod_cliente = cod_cliente - 1;
                console.log("");
                console.log(clientes[cod_cliente]);
                console.log("");
                
              } else{
                console.log("");
                consCliete();
                console.log("");
                break
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
            console.log("========= Cosulta Todos ==========");
            console.log("==================================");
            console.log("");
            console.log(carros);
            console.log("");

            let cons_voltar4 = parseInt(readline.question("Digite 1 para volta ao Menu Consultas: "));
            console.log("");
            mConsulta ();
            cont_Mccar = 1;
                        
          }else if(opcao_Mccar === 2){
            console.log("");
            console.log("==================================");
            console.log("======= Cosulta Específica =======");
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
                console.log("======= Cosulta Específica =======");
                console.log("==================================");
                console.log("");

                let cod_carro = parseInt(readline.question("Digite o cádigo do Carro: "));
                cod_carro = cod_carro - 1;
                console.log("");
                console.log(carros[cod_carro]);
                console.log("");

              } else{
                console.log("");
                consCarro();
                console.log("");
                break
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
        console.log('VENDAS');
    } else {
        console.log('Opção inválida. Tente novamente!');
    }
}

