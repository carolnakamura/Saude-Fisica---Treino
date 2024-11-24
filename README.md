Saude Fisica
Descrição
É um aplicativo de treinamento físico que permite aos usuários selecionar, adicionar e detalhar rotinas de exercícios. Desenvolvido com React Native e TypeScript, o aplicativo utiliza React Navigation para navegação entre telas.

Estrutura do Projeto
/saudefisica1
  ├── /src
  │   ├── /screens
  │   │   ├── HomeScreen.tsx
  │   │   ├── TrainingSelectionScreen.tsx
  │   │   ├── CostasScreen.tsx
  │   │   ├── PeitoScreen.tsx
  │   │   ├── PernasScreen.tsx
  │   │   ├── BracosScreen.tsx
  │   │   ├── AbdomenScreen.tsx
  │   │   ├── CardioScreen.tsx
  │   │   ├── AlongamentoScreen.tsx
  │   │   ├── AddExerciseScreen.tsx
  │   │   ├── NewTrainingScreen.tsx
  │   │   ├── MinhasRotinasScreen.tsx
  │   │   └── RotinaDetalhesScreen.tsx
  │   ├── /navigation
  │   │   └── AppNavigator.tsx
  │   ├── App.tsx
  ├── package.json
  ├── tsconfig.json
  └── README.md

Instalação
Pré-requisitos

Node.js
React Native CLI
Android Studio (para desenvolvimento no Android)
Xcode (para desenvolvimento no iOS)

Passos
Clone o repositório:
    
bash
git clone https://github.com/seu-usuario/meuapp.git
cd meuapp
Instale as dependências:

bash
npm install
Instale as dependências do React Navigation:

bash
npm install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context
Inicie o servidor de desenvolvimento:

bash
npm start
Para rodar no Android:

bash
npm run android
Para rodar no iOS:

bash
npm run ios
Uso
Home Screen
A tela inicial do aplicativo, onde os usuários podem navegar para outras telas de seleção de treino.

Training Selection Screen
Os usuários podem selecionar o tipo de treino que desejam fazer.

Add Exercise Screen
Os usuários podem adicionar novos exercícios a um treino específico.

Rotina Detalhes Screen
Detalha os exercícios e informações específicas de uma rotina de treino.

Estrutura de Arquivos
App.tsx: Ponto de entrada principal do aplicativo.

src/navigation/AppNavigator.tsx: Configurações de navegação do aplicativo.

src/screens/: Pasta contendo as telas do aplicativo.

Contribuição
Faça um fork do projeto.

Crie uma branch para sua feature (git checkout -b feature/MinhaFeature).

Commit suas mudanças (git commit -m 'Adiciona minha feature').

Faça um push para a branch (git push origin feature/MinhaFeature).

Abra um Pull Request.

Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

Contato
Para mais informações, entre em contato:

Nome: Seu Nome

Email: seuemail@example.com

GitHub: seu-usuario
