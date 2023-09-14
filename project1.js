const readline = require(`readline-sync`);

//Função Menu Principal
function mPrincipal (texto){  
    console.log("==================================");
    console.log("Concessionária de Carros Seminovos");
    console.log("========= Menu Principal =========");
    console.log("========== 1 - CADASTRO ==========");
    console.log("========== 2 - CONSULTA ==========");
    console.log("========== 3 - VENDAS ============");
    console.log("========== 4 - SAIR ==============");
    console.log("==================================");

return texto;
}

//Função Menu Cadastro
function mCadastro (texto){
    console.log("==================================");
    console.log("======== Menu 1 – CADASTRO =======");
    console.log("========== 1 – VENDEDOR ==========");
    console.log("========== 2 – CLIENTE  ==========");
    console.log("========== 3 – CARROS ============");
    console.log("========== 4 – VOLTAR ============");
    console.log("========== 5 - SAIR ==============");
    console.log("==================================");
    
    return texto;
    }

    //Função Menu Consulta
function mConsulta (texto){
    console.log("==================================");
    console.log("======== Menu 2 – Consulta =======");
    console.log("========== 1 – VENDEDOR ==========");
    console.log("========== 2 – CLIENTE  ==========");
    console.log("========== 3 – CARROS ============");
    console.log("========== 4 – VOLTAR ============");
    console.log("========== 5 - SAIR ==============");
    console.log("==================================");
    
    return texto;
    }

let cont_Mp = 0;
let cont_Mcad = 0;
let cod_Vendedor = 0;
let cod_Cliente = 0;

while (cont_Mp === 0){
    
    mPrincipal();

    const opcao_MenuP = parseInt(readline.question("Digite o numero referente: "))
    console.log(opcao_MenuP);

    if (opcao_MenuP === 1){
        mCadastro(); // Futuramente colocar no Menu Cadastro as opções Alterar e remover 
                     // Colocar agora no menu Cadrasto a opção para voltar para o Menu Principal e a opção de Sair

        while (cont_Mcad === 0){
            const opcao_Mcad = parseInt(readline.question("Digite o numero referente: "))
            console.log(opcao_Mcad);
            
            if (opcao_Mcad === 1){
                console.log("========== CADASTRO DE VENDEDORES ==========");
                let nomeVendedor = readline.question("Digite o Nome do Vendedor: ");
                let idadeVendedor = parseInt(readline.question("Digite a Idade do Vendedor: "));
                let cpfVendedor = readline.question("Digite o CPF do Vendedor sem pontos ou traços: ");
                cod_Vendedor++
                console.log("==============================");
                console.log("Nome do Vendedor: ", nomeVendedor);
                console.log("Idade do Vendedor: ", idadeVendedor);
                console.log("Nome do Vendedor: ", cpfVendedor); // Futuramente converter o cpf para imprimir no formato original Ex: 256.874.985-32
                console.log("Código do Vendedor: ", cod_Vendedor);
                console.log("==============================");
                // futuramente colocar um confirmação se os dados estão corretos se quer alteras algum dado
                // futuramente colocar a opção para pergunta se deseja cadastrar outro Vendedor e criar um objeto vendedor
                break

            } else if (opcao_Mcad === 2){
                console.log("========== CADASTRO DE CLIENTES ==========");
                let nomeCliente = readline.question("Digite o Nome do Cliente: ");
                let idadeCliente = parseInt(readline.question("Digite a Idade do Cliente: "));
                let cpfCliente = readline.question("Digite o CPF do Cliente sem pontos ou traços: ");
                cod_Cliente++
                console.log("==============================");
                console.log("Nome do Cliente: ", nomeCliente);
                console.log("Idade do Cliente: ", idadeCliente);
                console.log("Nome do Cliente: ", cpfCliente); // Futuramente converter o cpf para imprimir no formato original Ex: 256.874.985-32
                console.log("Código do Cliente: ", cod_Cliente);
                console.log("==============================");
                // futuramente colocar um confirmação se os dados estão corretos se quer alteras algum dado
                // futuramente colocar a opção para pergunta se deseja cadastrar outro Carro e criar um objeto Carro
                
                break

            } else if (opcao_Mcad === 3){
                console.log("========== CADASTRO DE CARROS ==========");
                let marcaCarros = readline.question("Digite a Marca do Carro: ");
                let modeloCarros = readline.question("Digite o Modelo do Carro: ");
                let anoCarros = readline.question("Digite o Ano do Carro: ");
                let versaoCarros = readline.question("Digite a Versão do Carro: ");
                let precoCarros = parseFloat(readline.question("Digite o Preço do Carro: "));

                console.log("==============================");
                console.log("Marca do Carro: ", marcaCarros);
                console.log("Modelo do Carro: ", modeloCarros);
                console.log("Ano do Carro: ", anoCarros); 
                console.log("Versão do Carro: ", versaoCarros);
                console.log("Preço do Carro: ", "R$",precoCarros);
                console.log("==============================");
                
                break

            }
        } 
        

        break

    } else if (opcao_MenuP === 2){
        mConsulta();
        
        break
    } else if (opcao_MenuP === 3){
        console.log("Vendas");
        break
    } else if (opcao_MenuP === 4){
        console.log("Sistema Finalizado");
        break
    } else{
        console.log("Opção Inválida");
    } 
    /* else if (opcao_MenuP > 0 || opcao_MenuP > 4){
        console.log("Opção Inválida");
        cont_Mp = 0;
    } */
}







