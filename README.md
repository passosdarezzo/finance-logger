# finance-logger
Estudando Typescript

https://www.youtube.com/playlist?list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI

# Typescript 101
- Alternativa para o Javascript (superset)
- Permite a utilização de strict types
- Oferece suporte para novos recursos (arrow functions, let, const)
- e alguns recursos extras (generics, interfaces, tuples etc)

# Compilar Typescript para Javascript
## Se o Typescript foi instalado globalmente (npm install -g typescript)

```
> tsc sandbox.ts sandbox.js
```

vc pode omitir o segundo parâmetro se o nome for o mesmo

```
> tsc sandbox.ts
```

## Se o Typescript foi instalado local (npm install typescript)
Adicionar o script no package.json

"scripts": {
  "tsc": "tsc"
}

Depois, executar com o comando:

```
> npm run tsc sandbox.ts
```

# Compilação automática ao mudar o código

Cria um arquivo "tsconfig.json" no root do projeto.
Create a file named tsconfig.json in your project root and include following lines in it:

{
    "compilerOptions": {
        "emitDecoratorMetadata": true,
        "module": "commonjs",
        "target": "ES5",
        "outDir": "ts-built",
        "rootDir": "src"
    }
}
Please note that outDir should be the path of the directory to receive compiled JS files, and rootDir should be the path of the directory containing your source (.ts) files.

Open a terminal and run tsc -w, it'll compile any .ts file in src directory into .js and store them in ts-built directory.

SOURCE
https://stackoverflow.com/questions/12799237/how-to-watch-and-compile-all-typescript-sources#30148384


Depois adicione mais um script:

```
"scripts": {
    "tsc": "tsc",
    "tsc:w": "tsc -w"
  },
``` 
SOURCE
https://www.positronx.io/setup-typescript-using-npm-and-visual-studio-code/


# Iniciar o projeto
Após colocor o Typescript em modo de observação.

```
> npm run tsc:w
```
Iniciar o plugin "Go Live" para disponibilizar o app localmente
