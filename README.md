# 📘 Anotação de como usar TypeScript com Node.js

## 🔧 Inicialização do Projeto

### Usando Yarn

```bash
yarn init -y
```

**Técnico:**
Inicializa um novo projeto Node.js criando um `package.json` com valores padrão (`-y` = yes para todas as perguntas).

**Simples:**
Cria os arquivos básicos do projeto automaticamente, sem precisar responder perguntas.

### Usando NPM

```bash
npm init -y
```

**Técnico:**
Mesmo comportamento do `yarn init -y`, mas usando o gerenciador de pacotes `npm`.

**Simples:**
Começa um projeto Node.js com configurações padrão.

---

## 📦 Instalação das Dependências

### Com Yarn

```bash
yarn add express
yarn add -D typescript ts-node-dev @types/express
```

### Com NPM

```bash
npm install express
npm install -D typescript ts-node-dev @types/express
```

### Explicação Técnica:

- `express`: Framework web minimalista para Node.js.
- `typescript`: Adiciona o compilador TypeScript ao projeto.
- `ts-node-dev`: Ferramenta para rodar `.ts` com hot-reload em ambiente de desenvolvimento.
- `@types/express`: Adiciona as definições de tipo (TypeScript) para o Express.

**Diferença entre `add`/`install` e `-D`/`--save-dev`:**

- `add` / `install`: Adiciona como dependência comum, necessária em produção.
- `-D` / `--save-dev`: Adiciona como dependência de desenvolvimento (não vai para produção).

### Versão Simples:

Esses comandos instalam o Express para criar o servidor e o TypeScript com ferramentas que ajudam a programar e testar o projeto mais rapidamente.

---

## 🧠 Configurando o TypeScript

Crie um arquivo `tsconfig.json`:

```bash
npx tsc --init
```

### Explicação Técnica:

Gera automaticamente o arquivo de configuração do compilador TypeScript (`tsconfig.json`), que controla como os arquivos `.ts` devem ser convertidos em `.js`.

### Versão Simples:

Cria um arquivo com configurações do TypeScript para o projeto funcionar corretamente.

#### ⚙️ Sugestão de `tsconfig.json` básico

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "moduleResolution": "node",
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"]
}
```

---

## 🏗 Estrutura de Pastas

```
/src
  ├── index.ts
  └── server/
        └── server.ts
```

---

## ▶️ Executando o Projeto

### Com Yarn

```bash
yarn ts-node-dev src/index.ts
```

### Com NPM

```bash
npx ts-node-dev src/index.ts
```

### Explicação Técnica:

Executa o arquivo principal (`index.ts`) com suporte a reinício automático ao salvar os arquivos (hot-reload) e suporte a TypeScript.

### Versão Simples:

Inicia o servidor e recarrega automaticamente quando você altera os arquivos.

---

## 🚫 Erros Comuns e Como Corrigir

| Erro                                        | Causa Provável                                               | Solução                                                         |
| ------------------------------------------- | ------------------------------------------------------------ | --------------------------------------------------------------- |
| `Cannot find module 'src/server/server'`    | Caminho incorreto ou falta de extensão para import ESModules | Use import relativo: `import { server } from "./server/server"` |
| `MODULE_NOT_FOUND`                          | Arquivo não existe ou não está no caminho correto            | Verifique o nome e caminho do arquivo                           |
| Falta do arquivo `tsconfig.json`            | Não foi gerado                                               | Execute `npx tsc --init`                                        |
| Expressão `import` sem suporte no Node      | Faltando `"module": "ESNext"` no tsconfig                    | Edite o `tsconfig.json` e adicione ou ajuste `module: "ESNext"` |
| Rodar `src/index.ts` dentro da pasta `src/` | Caminho errado (resolve errado)                              | Rode sempre da raiz do projeto: `npx ts-node-dev src/index.ts`  |

---

## ✅ Conclusão

Você agora tem um ambiente configurado para usar TypeScript com Node.js, com suporte a hot-reload e tipagem estática. Use sempre `yarn` ou `npm` com consistência no projeto e mantenha o `tsconfig.json` bem definido para evitar erros difíceis de depurar.
