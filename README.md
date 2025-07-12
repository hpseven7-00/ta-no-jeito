<<<<<<< HEAD
# tanojeito
Projeto para sistema Web e App "Tá no jeito!"
Requisitos do sistema

Esboço - Escrever aqui o que em geral o aplicativo deve fazer
# Requisitos Funcionais
# Cliente (Aplicativo "Tá no Jeito!")
RF01 – Visualizar lista de produtos por categoria.


RF02 – Adicionar e remover itens do carrinho.


RF03 – Finalizar pedido com endereço de entrega.


RF04 – Acompanhar status do pedido.


RF05 – Realizar login e cadastro.


RF06 – Receber notificações de pedido aprovado, enviado e entregue.


RF07 – Realizar pagamento via Pix ou cartão.*Adicionar função de usar dinheiro físico também


# Admin (Painel Web e App)

RF08 – Login com autenticação segura.
RF09 – Cadastro, edição e exclusão de produtos.
RF10 – Visualizar pedidos em tempo real.
RF11 – Gerenciar entregadores.
RF12 – Gerar relatórios básicos de vendas.


# Entregador (App ou Web)
RF13 – Visualizar pedidos disponíveis para entrega.
RF14 – Marcar pedidos como “em rota” e “entregue”.
RF15 – Receber notificações de novos pedidos.










# Projeto do Aplicativo: Tá no Jeito

📄 Estrutura Geral do Projeto
O aplicativo será dividido em duas partes principais:
Parte do Cliente (usuário final que compra os produtos)


Parte do Vendedor (comerciante que gerencia o estoque e vende)


Além disso, cada parte incluirá os dados necessários para funcionamento, desde o cadastro até a operação.

# 👥 Parte do Cliente
1. Cadastro e Login
Como funciona: O cliente se cadastra com nome, telefone, endereço e e-mail. Pode usar login via WhatsApp, Google ou e-mail/senha.
 Importância: Identifica o cliente, armazena endereço de entrega e permite personalizar experiência.
 Dados necessários:
Nome completo


E-mail (obrigatório)


Número de celular (obrigatório)


Endereço (rua, número, complemento, bairro, cidade, CEP)


Senha de acesso


Método de login preferido (WhatsApp/Google/E-mail)


# 2. Catálogo de Produtos
Como funciona: Mostra todos os produtos disponíveis nas lojas cadastradas por localização.
 Funções:
Busca por nome/categoria
Buscar comércio/empresa
Filtros (promoções, mais vendidos, validade curta)
Preço, imagem, descrição e estoque disponível
 Importância: É o coração do app para o cliente escolher com facilidade.


# 3. Carrinho de Compras
Como funciona: O cliente adiciona produtos ao carrinho.
 Funções:
Editar a quantidade dos produtos


Apagar itens


Exibir valor total e frete
 Importância: Etapa antes do fechamento do pedido, precisa ser simples e clara.


# 4. Pagamento
Como funciona: O cliente escolhe como pagar: PIX, cartão ou dinheiro na entrega, usar crédito do ercado.
 Funções:
Escolher o tipo de pagamento
Pagar 
Aplicar cupons
Acompanhar situação do pagamento (aprovado/em análise/recusado)
Cancelar compra



 Importância: Garante o recebimento. O pagamento só é liberado para o vendedor após a entrega.


# 5. Rastreamento de Pedido
Como funciona: Mostra o status da entrega em tempo real.
 Funções:
Pedido confirmado, em separação, a caminho, entregue
Confirmar que o pedido foi entregue 
Também pode conversar com entregador ou comércio durante a preparação do pedido
Avaliar entregador após entrega
Denunciar entregador


Mapa com localização do entregador e estimativa de chegada
 Importância: Aumenta a confiança e reduz reclamações.



# 6. Histórico e Recompra
Como funciona: Lista pedidos anteriores e permite repetir a compra.
 Funções:
Listar todo o histórico de compra
Avaliar produto
Botão "comprar novamente"
 Importância: Fideliza o cliente e aumenta o ticket médio.



# 🛒 Parte do Vendedor (Comerciante)
# 1. Cadastro e Login
Como funciona: Cadastro com CNPJ/CPF, nome da loja, endereço e dados bancários.
 Importância: Permite gerenciar estoque e vendas com segurança.
 Dados necessários:
Nome da loja
Nome do responsável
CPF ou CNPJ
Endereço comercial
E-mail e telefone
Dados bancários para recebimento
Foto da fachada (opcional)
Foto de perfil da empresa
Categoria principal (mercearia, padaria, rural, etc.)


# 2. Cadastro de Produtos com Lote
Como funciona: O vendedor acessa a aba "Produtos" e escolhe a opção "Adicionar Produto". O formulário exibido permite cadastrar o produto em lotes, com campos detalhados para controle de estoque e validade.
Passos:
Inserir nome do produto


Selecionar categoria (ex: bebidas, alimentos, limpeza...)


Inserir descrição breve


Informar preço unitário


Adicionar imagem do produto


Inserir quantidade e data de validade do lote


(Opcional) Cadastrar código de barras para controle automatizado


Importância: Permite rastrear validade e origem, essencial para promoções automatizadas e gestão eficiente do estoque.
Dados por produto:
Nome do produto
Categoria
Preço unitário
Quantidade por lote
Data de validade
Código de barras (opcional)
Descrição curta
Imagem do produto
 Como funciona: O vendedor adiciona produtos com:
Nome, descrição, preço
Lote (quantidade e validade)
Código de barras (opcional)
 Importância: Permite rastrear validade e origem, essencial para promoções automatizadas.
 Dados por produto:
Nome do produto
Preço unitário
Quantidade por lote
Data de validade
Código de barras (opcional)
Descrição curta
Imagem do produto


# 3. Gestão de Estoque
Como funciona: O app atualiza o estoque automaticamente com base nas vendas e permite a visualização detalhada de todas as movimentações.
Funções:
Avisos de baixo estoque
Sugestão de reposição
Busca e filtro por nome do produto, lote ou categoria
Histórico de produtos vendidos com:
Data e hora da venda
Nome do vendedor que realizou a venda
Tipo de recebimento (PIX, cartão, dinheiro)
Registro de trocas ou devoluções (com motivo)


Quantidade remanescente por lote
Preço de venda unitário e total por lote
Estimativa de lucro por produto
Previsão de reposição baseada na frequência de vendas e demanda histórica


Importância: Evita ruptura de estoque, reduz perdas e melhora o planejamento de compras com base em dados precisos.
 Como funciona: O app atualiza o estoque automaticamente com base nas vendas.
 Funções:
Avisos de baixo estoque
Sugestão de reposição
 Importância: Evita ruptura e desperdício.


# 4. Promoções Inteligentes
Como funciona: O sistema identifica automaticamente produtos com baixa rotatividade ou próximos da validade e sugere promoções personalizadas ao vendedor.
Funções:
Visualização das sugestões de promoção com:
Preço original e sugerido
Lucro estimado
Quantidade em estoque
Tempo restante de validade


Opção de ativar sugestões com um clique
Criação manual de promoções com:
Tipo de promoção: permanente, temporária, limitada (por quantidade), ilimitada
Data de início e fim


Produtos selecionados e valores personalizados


Importância: Reduz perdas com vencimentos, aumenta a atratividade da loja e oferece controle total ao comerciante sobre campanhas promocionais.
 Como funciona: Produtos próximos da validade entram em promoção automática com opção de ativar manualmente.
 Importância: Reduz perdas e atrai clientes.
5. Painel de Vendas e Relatórios
Como funciona: É a parte mais completa do sistema, oferecendo uma visão 360º sobre o desempenho financeiro e de vendas da loja.
Funções:
Relatórios com gráficos por:
Dia, semana, mês e ano
Produtos mais vendidos
Produtos com maior e menor margem de lucro
Estoque parado e rotatividade
Orçamento geral com:
Lucro estimado
Receitas e despesas
Comparação com períodos anteriores
Registro de movimentações financeiras:
Entradas por vendas
Saídas por compras de estoque
Gastos operacionais (entrega, impulsionamento, impostos)
Fluxo de caixa
Controle de dívidas e contas:
Cadastro de contas a pagar (com data e recorrência)
Programar pagamentos automáticos (se autorizado)
Histórico de contas quitadas
Configuração de pagamentos:
Alterar chaves PIX
Configurar aceitação de cartões (integração com serviços de terceiros)
Cadastro de clientes para compras a prazo:
Lista de clientes fiadores
Valor total devido por cliente
Histórico de pagamento
Configurar limite individual de crédito para cada cliente
Importância: Permite ao comerciante controlar completamente sua saúde financeira e otimizar estratégias de vendas e reposição de estoque.
 Como funciona: Exibe relatórios em gráficos:
Vendas por dia/mês
Produtos mais vendidos
Lucros e perdas
Estoque parado
 Importância: Ajuda a tomar decisões com base em dados reais.


# 6. Recebimento de Pedidos
Como funciona: O vendedor recebe uma notificação assim que um pedido é confirmado pelo cliente. Se houver uma impressora conectada, o sistema pode imprimir automaticamente o pedido para facilitar a separação. O comerciante pode gerenciar todas as etapas do pedido até a entrega final.
Funções:
Receber notificação em tempo real
Imprimir pedido automaticamente (caso tenha impressora)
Atualizar o status do pedido em tempo real:
Recebido
Preparando
Montado
Em entrega
Entregue
Cancelar pedidos (com motivo obrigatório)
Chat integrado com o cliente para dúvidas ou atualizações
Acesso completo aos dados do cliente:
Nome, telefone, endereço
Tipo de pagamento
Valor do pedido
Descontos aplicados
Observações feitas pelo cliente
Importância: Garante controle total da operação, reduz falhas na entrega e melhora a comunicação entre vendedor e cliente.
 Como funciona: Vendedor recebe notificação e detalhes do pedido.
 Funções:
Separar por lote
Confirmar pedido
Atualizar status
 Importância: Agiliza o atendimento.
 
# 7. Entregas e Roteirizador
Como funciona: Cria rota para entregador com base nos pedidos aprovados, podendo atender um único cliente ou vários em uma rota otimizada.
Funções:
Entrega individual ou em rota com múltiplos clientes
Rota atualizada em tempo real com base na geolocalização
Entregador tem acesso a dados mínimos do cliente:
Nome
Telefone para contato
Endereço completo
Chat direto entre entregador e cliente (sem mostrar número pessoal)
Atualização de status do pedido conforme deslocamento:
Pedido saiu para entrega
Chegando ao destino
Pedido entregue
Confirmação da entrega:
Foto de entrega (opcional)
Confirmação por QR Code ou assinatura digital
Informar quem recebeu o pedido (nome ou grau de parentesco)
Caso pagamento em espécie:
Confirmar valor recebido
Informar se houve troco e quanto foi devolvido


Importância: Melhora a precisão na entrega, aumenta a confiança do cliente, reduz erros logísticos e permite rastrear cada etapa da entrega com segurança e transparência.
 Como funciona: Cria rota para entregador com base nos pedidos.
 Funções:
Entrega individual ou em rota com múltiplos clientes
Confirmação com QR code ou foto
 Importância: Otimiza logística e reduz custos.


# 8. Personalização da Vitrine
Como funciona:
 O vendedor escolhe o que mostrar na loja virtual, como promoções, destaques, combos e ofertas especiais.
Funções:
Seleção de produtos para pôr na vitrine
Criação e organização de combos promocionais
Definição da ordem e categorias dos produtos exibidos
Inserção de banners e imagens personalizadas para campanhas promocionais na bio do comércio
Controle sobre quais promoções e produtos ficam visíveis para os clientes
Atualização rápida e prática das ofertas exibidas

# 9. Impulsionamento e Anúncio
Como funciona:
 O vendedor pode pagar para aumentar a visibilidade de seus produtos e promoções dentro do marketplace.
Funções:
Pagamento para destacar promoções específicas
Pagamento para aparecer em posição de destaque no marketplace
Opção para ser recomendado a clientes com base em buscas e perfil
Pagamento para aumentar o número de visualizações dos produtos
Recursos para aumentar seguidores e engajamento da loja no mercado
Importância:
 Gera renda para a plataforma e oferece ao comerciante maior visibilidade, aumentando as chances de venda e crescimento da base de clientes.

# 10. Versão premium
Como funciona:
 O vendedor pode ver, criar, editar todos os seus funcionários .
Funções:
Adicionar novo funcionário	
Nome
E-mail
Telefone
Cargo/Função
Conversar em um chat privado com um ou mais funcionários 
Criar grupos de conversa
Gerir o salário dos funcionários 
Editar o que cada funcionário pode fazer no aplicativo
Criar equipes 	
Designar funcionários para as equipes
Edicar cargos de cada funcionário na equipe
Dar missões a equipe 	
=======
# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
>>>>>>> 247f332 (Projeto inicial com Expo)
