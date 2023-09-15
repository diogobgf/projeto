const readline = require(`readline-sync`);

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

    function consVendedor (texto){
      console.log("");
      console.log("==================================");
      console.log("===== Consulta de Vendedores =====");
      console.log("==================================");
      console.log("==================================");
      console.log("===== 1 – Cosulta Todos ==========");
      console.log("===== 2 – Consulta Especifica ====");
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
        console.log("==================================");
      
        return texto;
        }
  

    const vendedor1 = {
      matricula: 1,
      nome: "Ana Silva",
      cpf: 12345678900,
      idade: 49,
    };
      
    const vendedor2 = {
      matricula: 2,
      nome: "Paulo Baza",
      cpf: 234556789011,
      idade: 30,
    };

    const vendedores = [vendedor1, vendedor2];

    const cliente1 = {
      codigoCliente: 1,
      nome: "Paula", 
      cpf: 986575421, 
      idade: 26,
    };

    const cliente2 = {
      codigoCliente: 2, 
      nome: "Sérgio", 
      cpf: 65321458744, 
      idade: 31
    };
    
    const cliente3 = {
      codigoCliente: 3, 
      nome: "Maria", 
      cpf: 98321456712, 
      idade: 62
    };
    
    const cliente4 = {
      codigoCliente: 4, 
      nome: "Antônio", 
      cpf: 96587423501, 
      idade: 21
    };
    
    const cliente5 = {
      codigoCliente: 5, 
      nome: "Fernanda", 
      cpf: 98652347815, 
      idade: 44
    };

    const clientes = [cliente1, cliente2, cliente3, cliente4, cliente5];

    const carro1 = {
      codigoCarro: 1,
      marca: "Chevrolet", 
      modelo: "Onix", 
      versao: "1.4", 
      ano: "2019", 
      preco: 62000
    };
    
    const carro2 = {
      codigoCarro: 2,
      marca: "Fiat", 
      modelo: "Pulse", 
      versao: "1.6", 
      ano: "2021", 
      preco: 75900
    }
    
    const carro3 = {
      codigoCarro: 3,
      marca: "Ford", 
      modelo: "Ranger", 
      versao: "2.4", 
      ano: "2018", 
      preco: 148000
    };
    
    const carro4 = {
      codigoCarro: 4,
      marca: "Honda", 
      modelo: "Civic", 
      versao: "1.8", 
      ano: "2020", 
      preco: 105000
    };
    
    const carro5 = {
      codigoCarro: 5,
      marca: "Renault", 
      modelo: "kwid", 
      versao: "1.0", 
      ano: 2019,
      preco: 46000
    };

    const carros = [carro1, carro2, carro3, carro4, carro5];

    mConsulta ();
    
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

            let cod_vend = parseInt(readline.question("Digite o codigo do Vendedor: "));
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

                let cod_vend = parseInt(readline.question("Digite o codigo do Vendedor: "));
                cod_vend = cod_vend - 1;
                console.log("");
                console.log(vendedores[cod_vend]); 
                console.log("");
                cont_Mcv2 = 0;
                
              } else{
                console.log("");
                consVendedor();
                console.log("");
              }
            }      
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

            let cod_cliente = parseInt(readline.question("Digite o codigo do Vendedor: "));
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

                let cod_cliente = parseInt(readline.question("Digite o codigo do Vendedor: "));
                cod_cliente = cod_cliente - 1;
                console.log("");
                console.log(clientes[cod_cliente]);
                console.log("");
                cont_Mcc2 = 0;
                
              } else{
                console.log("");
                consCliete();
                console.log("");
                cont_Mcc2 = 1;
              }
            }
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

            let cod_carro = parseInt(readline.question("Digite o codigo do Carro: "));
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

                let cod_carro = parseInt(readline.question("Digite o codigo do Carro: "));
                cod_carro = cod_carro - 1;
                console.log("");
                console.log(carros[cod_carro]);
                console.log("");
                cont_Mccar2 = 0;

              } else{
                console.log("");
                consCarro();
                cont_Mccar2 = 1;
              }
            }
          }
        }
      } else if (opcao_mCons === 4){

        console.log("Voltar para o Menu principal");
        break
            
      } else if (opcao_mCons === 5){
        
        console.log("");
        console.log("Sistema Finalizado");
        console.log("");

        break
          
      } else {
        console.log("");
        console.log("Opção Inválida");
        console.log("");
  
        cont_Mc = 0;
        mConsulta ();
      }
    }