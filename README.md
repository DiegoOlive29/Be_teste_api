### Inicialização do projeto:

    O projeto consiste no desenvolvimento de uma aplicação que pudesse consultar dados em um mockend com informações de produtos e de users, e que fosse capaz de fazer o calculo de desconto para cada user. 

    Após o fazer o clone repositorio na sua maquina, faça os seguinte comandos nesse repositorio Instalando as techs yarn init -y yarn install.

## Banco de dados

    O projeto não utiliza um banco de dados, por não se neessario armazenar dados. 

## Para iniciar a api localmente:

    Use o comando yarn dev.

## Techs usadas no front:

    Express;
    Node;
    TypeScript;
    Axios;
    
 
  

## Porta:

    A api por padrão roda na http://localhost:3000/.

## Rotas:

    http://localhost:3000/users -  Retorna os dados de todos os users. (Não necessita de body)
   
    http://localhost:3000/procucts - Retorna os dados de todos os produtos. (Não necessita de body)
   
    http://localhost:3000/calc/:id -  Retorna os dados dos produtos passados pelo body com o valor para o cliente que teve o id mensionado na url.
    BodyJson:   {
                     "idsProducts":[1,2,3,4] 
                }   

## Estrutura de pastas:

    Src - com todos os arquivos desenvolvidos.
        
        controllers - Funções que tem responsabilidade de pegar as informações nececssarias na requisição e chamar os services.
        
        services - Funções que de fato executam as atividade dentro da api, realizando post, get, update...
        
        interfaces - Mascaras para usod o typescript, de forma a ajuda no desenvolvimento.

        routes - Rotas da api.

        utils -  Contem um arquivo auxiliar para o uso do axios.
