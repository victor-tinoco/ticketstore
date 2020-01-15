# ticketstore
Projeto de aplicação de compra de ingressos de cinema, para aprendizado do *framework Angular*.

## Começando
O projeto foi desenvolvido na [Iteris Consultoria de Software](https://www.iteris.com.br/) por nós ~~turma de estagiários~~ num sistema de treinamento e aprendizado interno de front-end.

### O que encontrarei neste repositório?
Neste repositório se encontra um sistema focado à compra de ingressos de um cinema, versão *client-side*. O mesmo foi desenvolvido em uma espécie de hackathon interno, onde foi nos dado aproximadamente 3 dias para colocar em prática o conhecimento que foi adquirido em recentes dias anteriores.

> Foi-nos introduzido o conceito de componentização que um *SPA* nos trás, com uma página somente (não fica redirecionando) onde a performance é sensacional, a reutilização se torna fundamental e simples — obviamente quando se trata de sistemas web que não necessitem de uma otimização em *SEO*.

Teve uma grande pressão, porque não lidávamos somente com a ideia e lógica em si, mas com um framework novo com conceitos novos que havíamos assimilado recentemente.

## Features
- Login e inscrição de um novo usuário à partir dos formulários presentes na tela inicial.
- Visualização de todos os filmes cadastrados, com uma visualização próxima à do netflix.
- Possibilidade de adquirir um ticket (bilhete, ingresso) de um cinema, baseado nas sessões e salas disponíveis, com uma interface gráfica trabalhada para ser possível de forma dinâmica visualizar as cadeiras já ocupadas e também disponíveis.
- A ideia literal de uma *wallet*, onde é possível visualizar todos os bilhetes adquiridos e suas respectivas informações. Tal tela foi trabalhada de forma minimalista para fornecer um feedback imediatista, direto e dinâmico, e ainda, minimalista sendo fácil de interagir.

## Construído com
- JavaScript com o framework Angular v8.3.21
- JSON Server - Pacote do node que nos permite simular uma *API Rest* trabalhando com um "compacto banco de dados" em *JSON*.

## Testando a aplicação

Abaixo teremos um passo-a-passo com o caminho necessário para atender aos requisitos da aplicação e testá-la. Contém alguns links bacanas para alguns artigos que me auxiliaram bastante no desenvolvimento e com certeza também somarão à você. 

### Passo 1 - Instalação do *NodeJS* e *npm*

Primeiramente, por conta do *JSON Server* e pelo próprio framework utilizado, é obrigatório se ter instalado o *NodeJS* e o *npm* (gerenciador de pacotes). Eles vão nos permitir instalar todas as dependências e o *CLI* do *Angular*. Então, caso não os possua instalados, segue [aqui](https://dicasdejavascript.com.br/instalacao-do-nodejs-e-npm-no-windows-passo-a-passo/) um step-by-step que o guiará para tal passo inicial.

### Passo 2 - Instalação do *Angular CLI*
Pós ter atendido nosso primeiro requisito agora vamos para a instalação do *CLI* em si que vai nos permitir criar aplicações, **executar o servidor local com a nossa aplicação**, criar componentes, módulos, serviços, etc. Para instalar usando o npm, abra o prompt de comandos (cmd no windows) e execute o seguinte comando:

```
npm install -g @angular/cli
```

O parâmetro ``-g`` faz com que tal pacote seja instalado globalmente no seu sistema operacional.

Após o *npm* baixar todas as dependências e instalar o *Angular CLI*, você já está pronto para usá-lo através do comando ``ng``.

### Passo 3 - Instalar e subir a *API* com *JSON Server*
#### Instalando
De forma semelhante ao passo anterior, aqui temos de também instalar via *npm* um pacote para conseguir subir nossa ~~API~~ e simular um *back-end*. Diga-se de passagem, tal pacote é uma mão na roda para cenários onde se deve desenvolver uma interface mas ainda não está disponível a *API* da aplicação, ou ainda para fins de teste (como nesse caso, onde o foco era o aprendizado com o *front-end* mesmo). Caso tenha curtido e queira saber mais sobre o pacote, clique [aqui](http://www.fabricadecodigo.com/json-server/) para ser redirecionado à um artigo bacana que me auxiliou com a utilização do mesmo.

De forma enxugada, só para o teste da aplicação, vamos fazer os comandos necessários somente para a instalação e implementação da feature. Let's go!

Para instalar usando o npm, abra o prompt de comandos (cmd no windows) e execute o seguinte comando:
```
npm install -g json-server
```

Novamente, o parâmetro ``-g`` faz com que tal pacote seja instalado globalmente no seu sistema operacional.

#### Rodando o servidor

Para iniciar o servidor, abra o prompt de comandos (cmd no windows) e execute, na pasta ``api`` do repositório clonado o seguinte comando:

```
json-server --watch db.json
```

Agora seu servidor estará iniciado. Lembrando que por padrão a API vai funcionar no enderço: *http://localhost:3000*.

#### Bizu 

Aqui, caso tiver se interessado e começar a utilizar com frequência a funcionalidade, fica uma dica: para não ter de digitar esse comando (meio extenso e confuso, não tão intuitivo e prático) você pode criar um *script* no seu arquivo ``package.json`` com um nome qualquer que facilite a utilização. Exemplo:

```
{
  "scripts": {
    "start": "json-server --watch db.json"
  }
}
```

Agora, de forma simples, sempre que quiser subir seu servidor, simplesmente vai executar o seguinte comando:

```
npm start
```

Mágico!

### Passo 4 - Rodando a aplicação

Por fim: vamos rodar a aplicação e ver toda essa magia em vigor.

Aqui é bem simples, o citado anteriormente comando ``ng`` nos permitirá interagir com a *Angular CLI*. [Aqui](https://www.devmedia.com.br/angular-cli-como-criar-e-executar-um-projeto-angular/38246) temos um ótimo artigo show que vai te guiar para os primeiros passos à utilizando caso tenha interesse pelo framework.

Novamente, na pasta ``hackathon`` onde se encontra o projeto em angular, de forma enxugada vamos rodar os comandos:

```
ng serve --open
```

ou, abreviando:

```
ng s -o
```

Irá abrir sua aplicação na porta default (*http://localhost:4200*). O parâmetro ``--open`` ou abreviado `-o` faz com que além de abrir sua aplicação numa porta ele também abra essa porta no seu navegador padrão.

### Concluído!

Agora já pode ver a aplicação rodando, logando com um usuário presente no JSON Server (arquivo ``db.json``) e testando as features.

## Versionamento
Usamos o Git para controles de versão. Inicialmente o projeto foi estruturado e desenvolvido num repositório interno da empresa no Azure DevOps, que posteriormente foi importado aqui.

## Autores
- **Victor Martins Tinoco** - [victrmart](https://github.com/victrmart/)
- **Jorge Aranha** - [joranha](https://www.linkedin.com/in/jorge-aranha-a5143b60/)
- **Gabriel Moretti** - [moretti](https://www.linkedin.com/in/gabriel-moretti-caliman-1a3604134/)

Veja também a [lista]() de colaboradores que participaram deste projeto.

## Licença
Este projeto está licenciado sob a licença MIT (consulte o arquivo [LICENSE.md](LICENSE.md) para obter mais detalhes).

## Agradecimentos
- Ao [Douglas](https://github.com/douglasfernandesjr) pela dedicação e comprometimento ao lecionar os treinamentos.
- À [Iteris](https://github.com/IterisConsultoria) pela oportunidade e por toda a estrutura fornecida.


