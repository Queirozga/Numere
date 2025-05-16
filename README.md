# Numere - Jogo de Adivinhar o Número 🎲

Um jogo de "Adivinhe o Número" desenvolvido com HTML, CSS e JavaScript puro. O objetivo é descobrir um número secreto entre 0 e 100, com dicas visuais a cada tentativa!

## 🖼️ Visualização

![image](https://github.com/user-attachments/assets/896b85fd-19bb-4b8d-ac9f-5c5375b30206)

## ✨ Funcionalidades Principais

-   **Número Aleatório:** A cada nova partida, um número secreto entre 0 e 100 é gerado.
-   **Feedback Visual:**
    -   Cor <span style="color:#2F6073; font-weight:bold;">AZUL</span>: O número secreto é **MAIOR** que o digitado.
    -   Cor <span style="color:#A64138; font-weight:bold;">LARANJA</span>: O número secreto é **MENOR** que o digitado.
    -   Ícones de seta (⬆️/⬇️) indicando a direção.
-   **Histórico de Tentativas:** Todas as suas tentativas são exibidas na tela, com o feedback correspondente.
-   **Contador de Tentativas:** Saiba em quantas tentativas você acertou o número.
-   **Pop-up "Como Jogar":** Instruções claras sobre as regras e o significado das cores.
-   **Pop-up de Parabéns:** Mensagem de sucesso ao acertar o número, mostrando o número correto e a quantidade de tentativas.
-   **Jogar Novamente:** Funcionalidade para reiniciar o jogo com um novo número secreto.
-   **Validação de Entrada:** Garante que apenas números válidos (0-100) sejam processados.
-   **Design Responsivo:** Interface adaptada para diferentes tamanhos de tela (desktop, tablets e mobile).

## 🛠️ Tecnologias Utilizadas

-   **HTML5:** Estrutura semântica da página.
-   **CSS3:** Estilização completa, incluindo:
    -   Variáveis CSS (Custom Properties) para um tema de cores consistente.
    -   Flexbox para layout.
    -   Media Queries para responsividade.
-   **JavaScript (ES6+):** Toda a lógica do jogo, incluindo:
    -   Manipulação do DOM (criação e modificação de elementos).
    -   Gerenciamento de eventos (clicks, submit de formulário).
    -   Geração de números aleatórios.
    -   Lógica condicional para as regras do jogo.
-   **Font Awesome:** Para os ícones utilizados na interface.
-   **Google Fonts (Nunito):** Para a tipografia do projeto.

## 🎮 Como Jogar

1.  Abra o link: (https://queirozga.github.io/Numere/)
2.  Opcionalmente, clique no ícone de interrogação (❓) no canto superior para ler as instruções detalhadas.
3.  No campo de texto, digite um número entre 0 e 100.
4.  Pressione Enter ou clique implicitamente (ao enviar o formulário, que é o comportamento padrão do input dentro de um form).
5.  Observe o feedback:
    -   Sua tentativa aparecerá listada.
    -   Se o fundo da tentativa for <span style="color:#2F6073; font-weight:bold;">AZUL</span> e tiver uma seta para cima (⬆️), o número secreto é **MAIOR** que o seu palpite.
    -   Se o fundo da tentativa for <span style="color:#A64138; font-weight:bold;">LARANJA</span> e tiver uma seta para baixo (⬇️), o número secreto é **MENOR** que o seu palpite.
6.  Continue tentando até acertar!
7.  Ao acertar, uma mensagem de parabéns será exibida. Você pode então clicar em "Jogar novamente".

## 🚀 Como Executar Localmente

1.  Clone este repositório:
    ```bash
    git clone https://github.com/queirozga/Numere.git
    ```

2.  Navegue até o diretório do projeto:
    ```bash
    cd Numere
    ```

3.  Abra o arquivo `index.html` em seu navegador de preferência (Ex: Google Chrome, Firefox, Edge).

Não há necessidade de instalação de dependências ou processos de build, pois é um projeto front-end puro com HTML, CSS e JavaScript.

## 👨‍💻 Autor

Criado por **Gabriel Queiroz**
-   GitHub: [@Queirozga](https://github.com/Queirozga)

## 📜 Licença

Este projeto é de código aberto. Sinta-se à vontade para usar, modificar e distribuir. Se desejar, pode adicionar uma licença formal (ex: MIT License).
