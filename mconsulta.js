/* function mConsulta (texto){
    console.log("==================================");
    console.log("======== Menu 2 – Consulta =======");
    console.log("========== 1 – VENDEDOR ==========");
    console.log("========== 2 – CLIENTE  ==========");
    console.log("========== 3 – CARROS ============");
    console.log("========== 4 – VOLTAR ============");
    console.log("========== 5 - SAIR ==============");
    console.log("==================================");
    
    return texto;
    } */

    const vendedor1 = {
        matricula: 1,
        nome: "Ana Silva",
        cpf: 12345678900,
        idade: 49,
        vendas: [10000, 15000, 12000]
      };
      
      const vendedor2 = {
        matricula: 2,
        nome: "Paulo Baza",
        cpf: 234556789011,
        idade: 30,
        vendas: [11900, 14350, 13000]
      };
    
      const vendedores = [vendedor1, vendedor2];

      console.log(vendedores[0]);
