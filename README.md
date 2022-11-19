<h1>🎥 RocketMovie</h1>
<p>Neste Website eu consumi a api <a href="https://www.themoviedb.org" target="_blank">The Movie Database</a> para desenvolver um botão
    que quando é clicado pelo usuário ele traz o nome, descrição e poster de um filme popular aleatório, fui um desafio
    fazer este website utilizando
    <b>fetch</b> do <a href="https://nodejs.org/en/" target="_blank"><b>NodeJs</b></a>.
</p>
<hr>
<h2>🛠 Tecnologias utilizadas</h2>
<h3>🎡 Back-End com  <a href="https://nodejs.org/en/" target="_blank">NodeJS</a></h3>
<h3>🪁 Métodos HTTP com  <a href="https://expressjs.com" target="_blank">Express</a></h3>
<h3>🔐 Variáveis ambiente com <a href="https://www.npmjs.com/package/dotenv" target="_blank">DotEnv</a></h3>
<h3>⏱ Atualização do servidor em tempo real com <a href="https://www.npmjs.com/package/nodemon" target="_blank">Nodemon</a></h3>
<h3>🧰 Estilização do Front-end feita com o <a href="https://getbootstrap.com" target="_blank">Bootstrap</a></h3>
<hr>
<h2>🧩 Além do desafio</h2>
<p>Eu fui além do desafio neste projeto, levei em pratica o meu conhecimento máximo em clean code e boas práticas para
    trabalho em equipe.</p>
<hr>
<h2>🖋 Design</h2>
<p>O design do Front-end foi feito pela equipe da <a href="https://www.rocketseat.com.br" target="_blank">RocketSeat</a> que dão
    desafios incríveis para seus alunos, o design
    utilizado foi feito no <a
        href="https://www.figma.com/file/9HFoO4wNB150gRSV4v0Qse/DD-%2F-Rocketflix/duplicate" target="_blank">Figma</a>.</p>
<div style="max-width: 600px; margin: auto;">

![gifFigma](https://user-images.githubusercontent.com/104699555/202767436-9be061f0-c259-4ac5-bcf2-ee01cd0785ae.gif)

</div>
<hr>
<h2>👨‍💻 Projeto</h2>
<p>Desenvolvido o mais fiel possível ao design, utilizando as mesmas cores, fontes, ícones e textos </p>
<p>Algumas features adicionais foram implementadas para deixar o website mais consistente.</p>
<div style="max-width: 600px; margin: auto;">

![gifFrontEndWeb](https://user-images.githubusercontent.com/104699555/202769227-4159a917-585b-4a03-be27-41131f6cb87d.gif)

</div>
<p>Adicionei uma tela de carregamento ao encontrar filme que é ativada quando o Front-end busca os dados do filme e é
    desativada quando o poster do filme carrega totalmente.</p>
<p>Website totalmente responsivo para dispositivos móveis.</p>
<div style="max-width: 300px; margin: auto;">

![gifFrontEndMobile](https://user-images.githubusercontent.com/104699555/202771410-7c8c3297-71e9-427e-b685-efd0df1c1fc0.gif)
</div>
<hr>
<h2>🔧 Teste na sua máquina</h2>
<h4>1 - Você deve instalar os programas necessários para utilizar a api</h4>
<p>Entre no site do <a href="https://code.visualstudio.com" target="_blank">Visual Studio Code</a> baixe e faça a instalação</p>
<p>Baixe e instale a versão LTS do <a href="https://nodejs.org/en/" target="_blank">NodeJs</a></p>
<hr>
<h4>2 - Pegue a chave da API do <a href="https://www.themoviedb.org" target="_blank">The Movie Database</a> para pegar a chave siga os
    passos abaixo</h4>
<p>A - Crie uma conta no <a href=" https://www.themoviedb.org/signup" target="_blank">The Movie Database</a></p>
<p>B - Após verificar o e-mail, faça o login e <a href="https://www.themoviedb.org/settings/api/request" target="_blank">acesse este
        link</a></p>
<p>C - Clique em Criar e escolha a opção Developer</p>
<div style="max-width: 800px; margin: auto;">
    <img src="https://efficient-sloth-d85.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Facd70876-b5c9-433a-ac4c-30fda77c907e%2FUntitled.png?table=block&id=efef7909-d847-47b0-aadf-7d48fe40c9c4&spaceId=08f749ff-d06d-49a8-a488-9846e081b224&width=2000&userId=&cache=v2"
        alt="">
</div>
<p>D - Aceite os termos de uso da API</p>
<p>E - Preencha os dados necessários e clique em Enviar.</p>
<div style="max-width: 800px; margin: auto;">
    <img src="https://efficient-sloth-d85.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F53fde663-8cda-4481-a0f0-d979c085fd25%2FUntitled.png?table=block&id=accd9903-9243-4dd0-bd2d-372985e85e7e&spaceId=08f749ff-d06d-49a8-a488-9846e081b224&width=2000&userId=&cache=v2"
        alt="">
</div>
<p>F - Após clicar em enviar você terá acesso a sua API Key</p>
<div style="max-width: 800px; margin: auto;">
    <img src="https://efficient-sloth-d85.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F533f3ea6-2537-49fb-ae5c-417d699d17d8%2FUntitled.png?table=block&id=54349baf-bc25-4659-b825-27115646dcd7&spaceId=08f749ff-d06d-49a8-a488-9846e081b224&width=2000&userId=&cache=v2"
        alt="">
</div>
<p>G - Após baixar o template terá um arquivo chamado <b>.env.example</b>, cole a sua API KEY gerada no arquivo e
    renomeie o
    arquivo para <b>.env</b></p>
<hr>
<h4>3 - Com o VsCode aberto abra o terminal utilizando o atalho <b>Ctrl + '</b> e digite o comando <b>npm install</b>
</h4>
<h4>4 - Ainda com o terminal aberto, após a instalação de todos os recursos necessários, digite o comando <b>npm
        start</b></h4>
<h4>Tudo pronto agora é só você abrir seu navegador e colar o link <a
        href="http://localhost:3000/" target="_blank">http://localhost:3000/</a> e se divertir!</h4>