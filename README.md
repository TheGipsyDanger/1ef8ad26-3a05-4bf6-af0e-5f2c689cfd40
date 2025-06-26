# GitRepo - Aplicativo React Native com Expo Bare Workflow

## 📱 Sobre o Projeto

GitRepo é um aplicativo React Native desenvolvido com Expo Bare Workflow que permite buscar e visualizar informações de usuários e repositórios do GitHub. O projeto utiliza uma arquitetura limpa com separação clara entre camadas de apresentação, aplicação e dados.

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo Bare Workflow** - Configuração customizada do Expo
- **TypeScript** - Linguagem de programação tipada
- **Redux Toolkit** - Gerenciamento de estado global
- **React Query** - Gerenciamento de cache e estado do servidor
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas
- **NativeWind** - Framework CSS para React Native
- **Tailwind CSS** - Framework de utilitários CSS
- **Jest** - Framework de testes
- **React Navigation** - Navegação entre telas

## 📁 Estrutura do Projeto

### 🏗️ Arquitetura Principal

```
src/
├── application/          # Camada de aplicação
├── data/                # Camada de dados
├── presentation/         # Camada de apresentação
└── utils/               # Utilitários e helpers
```

### 📂 Detalhamento das Pastas

#### `src/application/` - Camada de Aplicação

```
application/
├── configs/             # Configurações globais
│   ├── constants.ts     # Constantes da aplicação
│   ├── index.ts         # Exportações
│   └── queryClient.ts   # Configuração do React Query
├── forms/               # Schemas de validação
│   ├── exampleSchema.ts
│   ├── index.ts
│   └── searchUserSchema.ts
├── hooks/               # Hooks customizados
│   ├── index.ts
│   ├── useCustomFonts.ts
│   └── useDemo.ts
├── redux/               # Gerenciamento de estado
│   ├── reducers/
│   │   ├── index.ts
│   │   ├── Repo.ts
│   │   └── User.ts
│   └── store.ts
├── routes/              # Configuração de rotas
│   ├── index.ts
│   ├── routeConfig.ts
│   └── routes.ts
└── styles/              # Estilos globais
    ├── colors.ts
    └── index.ts
```

#### `src/data/` - Camada de Dados

```
data/
└── users/               # Módulo de usuários
    ├── api.ts           # Configuração da API
    ├── services.ts      # Serviços de dados
    ├── types/           # Tipos TypeScript
    │   ├── GetRepoDetail.types.ts
    │   ├── GetUserInfos.types.ts
    │   └── GetUserRepos.types.ts
    └── useCases/        # Casos de uso
        ├── useGetRepoDetail.ts
        ├── useGetUserInfos.ts
        └── useGetUserRepos.ts
```

#### `src/presentation/` - Camada de Apresentação

```
presentation/
├── components/          # Componentes reutilizáveis
│   ├── atoms/          # Componentes atômicos
│   │   ├── Box/
│   │   ├── Conditional/
│   │   └── Text/
│   └── molecules/      # Componentes moleculares
│       ├── Button/
│       ├── Form/
│       └── ScreenLayout/
└── pages/              # Páginas da aplicação
    ├── Main/
    ├── RepoDetails/
    ├── UserDetails/
    └── UserRepos/
```

#### `src/utils/` - Utilitários

```
utils/
├── componentExists.js   # Verificação de existência de componentes
├── interfaces/          # Interfaces TypeScript
│   ├── customTypes.ts
│   ├── repos.ts
│   ├── services.ts
│   ├── svgs.ts
│   └── users.ts
└── navigator.ts         # Utilitários de navegação
```

#### `src/assets/` - Recursos

```
assets/
├── fonts/              # Fontes customizadas (Gilroy)
├── images/             # Imagens
├── jsSvgs/             # SVGs como componentes JS
└── svgs/               # Arquivos SVG
```

### 🎨 Templates e Configurações

#### `__templates__/` - Templates para Geração de Código

```
__templates__/
├── components/         # Templates de componentes
├── data/              # Templates de camada de dados
├── flow/              # Templates de fluxo
├── hooks/             # Templates de hooks
├── pages/             # Templates de páginas
└── zustand/           # Templates de store Zustand
```

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- Yarn ou npm
- Expo CLI
- Xcode (para iOS)
- Android Studio (para Android)

### Instalação

1. **Clone o repositório**

```bash
git clone <url-do-repositorio>
cd app
```

2. **Instale as dependências**

```bash
yarn install
# ou
npm install
```

3. **Instale as dependências do iOS (se necessário)**

```bash
cd ios && pod install && cd ..
```

### Executando o Projeto

#### Desenvolvimento

```bash
# Iniciar o servidor de desenvolvimento
yarn start
# ou
npm start
```

#### iOS

```bash
# Executar no iOS Simulator
yarn ios
# ou
npm run ios
```

#### Android

```bash
# Executar no Android Emulator
yarn android
# ou
npm run android
```

## 🧪 Testes

```bash
# Executar todos os testes
yarn test

# Executar testes em modo watch
yarn test:watch

# Executar testes com coverage
yarn test:coverage
```

## 📱 Funcionalidades

- 🔍 Busca de usuários do GitHub
- 👤 Visualização de detalhes do usuário
- 📚 Listagem de repositórios do usuário
- 🔗 Detalhes completos dos repositórios
- 🎨 Interface moderna com NativeWind/Tailwind
- 📱 Design responsivo para iOS e Android

## 🏗️ Padrões de Desenvolvimento

### Arquitetura Limpa

O projeto segue os princípios da Clean Architecture com separação clara entre:

- **Presentation Layer**: Componentes e páginas
- **Application Layer**: Casos de uso e lógica de negócio
- **Data Layer**: APIs e serviços externos

### Componentes

- **Atomic Design**: Componentes organizados em átomos, moléculas e organismos
- **TypeScript**: Tipagem forte em todo o projeto
- **Testes**: Cobertura de testes para componentes principais

### Estado Global

- **Redux Toolkit**: Para estado global da aplicação
- **React Query**: Para cache e sincronização de dados do servidor

## 📦 Scripts Disponíveis

```json
{
    "start": "expo start",
    "android": "expo run:android",
    "ios": "expo run:ios",
    "web": "expo start --web",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
}
```

## 🔧 Configurações

### Expo

- **Bare Workflow**: Configuração customizada sem EAS Build
- **Metro**: Bundler configurado para React Native
- **Babel**: Configuração para TypeScript e NativeWind

### TypeScript

- Configuração estrita para melhor qualidade de código
- Path mapping para imports mais limpos
- Declarações de tipos para bibliotecas externas

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👥 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Suporte

Para dúvidas ou suporte, entre em contato através dos issues do repositório.
