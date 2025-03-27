# Acompanhamento de Pedido com WebSocket

Este projeto implementa um sistema de acompanhamento de pedidos utilizando WebSockets. Ele possui duas interfaces principais:

- **Cliente**: Para o cliente acompanhar o status do pedido em tempo real.
- **Entregador**: Para o entregador atualizar o status do pedido enquanto realiza a entrega.

## Tecnologias Utilizadas

- **Node.js**: Para o servidor WebSocket.
- **HTML/CSS/JavaScript**: Para a interface do cliente e do entregador.
- **WebSockets**: Para comunicação em tempo real entre o cliente e o servidor.

## Funcionalidades

- O **Cliente** pode acompanhar o status do seu pedido e cancelá-lo.
- O **Entregador** pode avançar o status do pedido e devolver o pedido, se necessário.
- Comunicação em tempo real entre cliente e entregador utilizando WebSockets.

---

## Como Rodar o Projeto

### 1. **Pré-requisitos**

Certifique-se de ter o **Node.js** instalado. Você pode verificar se o Node.js está instalado com o seguinte comando:

## Entre na pasta do projeto e instale as dependências necessárias:
cd pedido-tracker-websocket
npm install

## Rodando o Servidor WebSocket
node server.js


```bash
node -v



