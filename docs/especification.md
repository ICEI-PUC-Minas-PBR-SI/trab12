# Especificações do Projeto
O problema: O grande tempo de espera que algumas pessoas precisam para receber uma doação de sangue e a dificuldade de encontrar alguém com tipo sanguíneo compatível.

Solução: BloodBridge, uma aplicação com o intuito de conectar doador/receptor de maneira simples.
A aplicação consiste basicamente em 4 telas: tela incial/login, tela de cadastro, tela principal, tela do perfil.
O objetivo da aplicação é fornecer meios para que o usuário seja ele doador ou receptor, entre em contato com outro usuário que tenha sangue compatível com o seu. Os meios de contato que serão fornecidos são o número de telefone e/ou e-mail, dando preferência ao número de telefone. Estes dados serão coletados na hora do cadastro.
BloodBridge é uma aplicação de uso simples, amigável ao usuário e com potencial para salvar diversas vidas e reduzir possíveis sequelas causadas pela demora ao realizar uma transfusão de sangue.
Os possíveis usuários são as pessoas que tem a tecnologia presente em suas vidas, o poder da plataforma não atende somente ao usuário primário mas também as pessoas ao seu entorno como exemplificado na Persona 2, onde o usuário apesar de bem de saúde possui parentes com problemas que frequentemente precisam passar por transfusões. O usuário utilizaria a aplicação não para si mesmo, mas para seus avós. Isso pode se estender a qualquer pessoa. Já que a aplicação trata de informações pessoais porém de baixo grau de importância, qualquer pessoa de confiança pode administrar a conta de uma outra.


## Personas

### Persona 1
Nome: Ana

Idade: 27 anos

Profissão: Estudante

Localização: Rio de Janeiro, Brasil

Perfil:
Ana é uma estudante de jornalismo que mora no Rio de Janeiro. Ela é uma pessoa preocupada com o bem-estar das pessoas e sempre que pode se voluntaria em ações sociais. Ana acredita que doar sangue é uma das melhores formas de ajudar outras pessoas e salvar vidas.
Ana quer doar sangue regularmente, mas tem dificuldades para encontrar um local de doação próximo e que tenha um horário compatível com sua rotina de estudante. Ela também tem receio de ir a locais desconhecidos e não saber se o processo de doação será seguro e eficiente.
Ana é uma pessoa muito engajada nas redes sociais. Ela gosta de compartilhar informações úteis e incentivar outras pessoas a doarem sangue. Ela também é muito ativa em eventos sociais e de voluntariado em sua comunidade, sempre buscando formas de ajudar outras pessoas.

### Persona 2

Nome: Paulo

Idade: 20 anos

Profissão: Estudante

Localização: Minas Gerais, Brasil

Perfil:
Paulo é um estudante de administração que não possui trabalho formal. Ele mora com seus avós que já possúem uma idade avançada e frequentemente precisam ir ao hospital para exames de rotina e eventuais complicações médicas. Paulo é dedicado aos seus avós e possui certo domínio sobre tecnologias frequentemente ajudando seus avós com questões que envolvem aparelhos eletrônicos. Paulo é bem de saúde mas seus avós não, seu avô precisa de constantes transfusões de sangue para a hemodiálise e sua avó também já precisou devido à um acidente.

### Persona 3

Nome: André

idade: 25 anos

Profissão: Eletricista

Localização: São Paulo, Brasil

Perfil: André trabalha como eletricista em uma firma no centro de São Paulo, tem como hobby fazer viagens de moto com seus colegas do motoclube, André sabe os riscos que andar de moto traz, principalmente por conhecer várias pessoas que sofreram acidentes enquanto viajavam. André possui seu tipo sanguíneo (O-) bordado no seu colete de motoclube. Ele sabe que seu sangue é um raro doador universal e por isso realiza doações regularmente.

## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Receber notificaçoes semanais     |incentivar a  doar                 |
|Usuário do sistema  | Filtrar outros usuários por região | Poder encontrar usuários próximos      |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

     Ana, 23 anos

     Meu nome é Ana e, há alguns meses, eu me cadastrei nessa aplicação web, a BloodBridge, que tinha um propósito muito nobre: facilitar o processo de doação de sangue. Como muitas pessoas, eu sempre quis ajudar, mas sempre tive dificuldades em encontrar os locais de doação ou saber quando e onde era necessário. Mas essa aplicação mudou tudo para mim.
     Logo no meu primeiro acesso, fiquei impressionada com a simplicidade do sistema. Era tudo muito intuitivo e fácil de usar. Eu simplesmente selecionei minha região e comecei a explorar as opções disponíveis. Eu poderia escolher se queria doar sangue ou se precisava de sangue, e a aplicação me mostrava todos os hospitais e postos de coleta que estavam próximos da minha localização.
     Foi quando vi um pedido de doação de sangue de um menino chamado Lucas, de apenas 7 anos. Ele tinha leucemia e precisava de doações constantes de sangue. Eu me senti compelida a ajudar e imediatamente marquei um horário para doar. Era algo tão simples e fácil que eu me perguntava por que nunca tinha feito isso antes.
     No dia da minha doação, fui ao hospital indicado pela aplicação. Foi um processo rápido e indolor. Eu estava feliz por estar fazendo algo de bom e por saber que minha doação iria ajudar alguém que realmente precisava.
     Algumas semanas depois, recebi uma mensagem de agradecimento da mãe do Lucas. Ela me contou que minha doação havia ajudado a salvar a vida do filho dela e que estava muito grata por isso. Eu fiquei emocionada ao ler aquela mensagem. Eu não poderia estar mais feliz por ter ajudado a fazer a diferença na vida de alguém.
     Desde então, tenho usado a aplicação regularmente para ver se há novas oportunidades de doação de sangue na minha região. A cada doação, sinto que estou fazendo minha parte para ajudar a salvar vidas. É incrível como algo tão simples pode fazer tanta diferença.


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Cadastro de usuários  | ALTA |  |
|RF-002| Usuário cadastrado deve conseguir alterar seu status entre doador/receptor | ALTA | |
|RF-003| Usuário cadastrado deve conseguir atualizar seu endereço | ALTA | |
|RF-004| Exibir na tela principal a ficha dos outros usuários da aplicação | ALTA | |
|RF-004.1| Se o status do usuário for de "doador" apresentar a ficha de possíveis receptores | ALTA | |
|RF-004.2| Se o status do usuário for de "recptor" apresentar a ficha de possíveis doadores | ALTA | |
|RF-004.3| permitir que os doadores/receptores tenham acesso aos contatos uns dos outros | ALTA | |
|RF-007| permitir que os usuários filtrem as buscas por localidade, tipo sanguíneo e disponibilidade | ALTA | |
|RF-008| Feedback dos usuários | MÉDIA | |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | ALTA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  MÉDIA | 
|RNF-003| Garantir a segurança dos dados pessoais |  ALTA |  
|RNF-004| O sistema deve estar sempre disponível |  ALTA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| O projeto deve ser desenvolvido respeitando as leis de privacidade de dados |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
