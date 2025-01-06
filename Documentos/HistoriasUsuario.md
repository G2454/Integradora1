# 1. História de Usuário

A Tabela a seguir contém as Histórias de Usuárias para o desenvolvimento do projeto. 

<table>
    <thead>
        <tr style="background-color: purple; color: white" >
            <th style="border-style:solid;border-width:1px;text-align:center">ID</th>
            <th style="border-style:solid;border-width:1px;text-align:center">História de Usuário</th>
            <th style="border-style:solid;border-width:1px;text-align:center">Critérios de aceitação</th>
            <th style="border-style:solid;border-width:1px;text-align:center">Prioridade</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <span id="ustory-01"></span>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">US01</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">Eu, como usuário, quero poder ter uma sinalização visual de que o aplicativo está carregando (SplashScreen)</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1"><ol><li>A SplashScreen deve estar visível enquanto a próxima tela não tiver sido carregada</li><li> A imagem na SplashScreen deve estar centralizada e seguir as IDV do projeto</li></ol></td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Média</td>
        </tr>
        <tr>
            <span id="ustory-02"></span>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">US02</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">Eu, como usuário regular, desejo ter acesso a uma tela que vai me permitir logar no sistema</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1"><ol><li>As caixas de input devem estar alinhadas, com a utilização correta de ícones e na caixa de entrada da senha deve ser possível esconder/mostrar ela</li></ol></td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"> Alta </td>
        </tr>
        <tr>
            <span id="ustory-03"></span>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">US03</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">Eu,como usuário regular, desejo ter acesso a uma tela que vai me permitir alterar a senha</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1"><ol><li>Essa tela deve ser acessível pela tela de Login por meio de um botão que deve ficar visível ao usuário</li><li>Essa tela será identica ao de cadastro de um novo usuário</li><li>A única exigência para o usuário poder alterar a senha vai ser confirmar o email de cadastro correto</li></ol></td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Baixa</td>
        </tr>
        <tr>
            <span id="ustory-04"></span>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">US04</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">Eu,como usuário regular, desejo ter acesso a uma tela com o qual poderei realizar o meu cadastro no aplicativo</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1"><ol><li>A tela de cadastro deve conter caixas de input para o nome do usuário, email, senha e confirmação dela</li><li>Deve ser possível voltar para a tela de Login caso o usuário não queira criar uma nova conta</li></ol></td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Média</td>
        </tr>
        <tr>
            <span id="ustory-05"></span>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">US05</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">Eu,como usuário regular, desejo ter acesso a uma tela com o qual poderei ver todos os eventos marcados que vão estar acontecendo na UTFPR de Cornélio Procópio</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1"><ol><li>Deve ser possível ver o título do evento, a data, a hora e o local em que vai acontecer</li><li>Deve ser evidente se o evento vai ocorrer de forma Online ou Presencial para evitar confusões</li></ol></td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Média</td>
        </tr>
         <tr>
            <span id="ustory-06"></span>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">US06</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">Eu,como usuário regular, desejo ter acesso a um menu expansível em que vai me permitir ir para algumas telas específicas com a intenção de verificar informações como eventos que mostrei interesse em participar, cadastro/alteração de eventos, meu perfil caso eu queira verificar alguma informação (nome, email ou senha), uma opção que vai permitir verificar as informações de contato com os responsáveis pelo aplicativo e por fim, uma botão que vai fazer o logout da minha conta </td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1"><ol><li>O menu expansível pode ocupar toda a tela ou não, mas deve ficar claro quando ele estiver sendo usado ou não</li><li>Na situação dele não ocupar completamente a tela, o que não estiver sendo utilizado por ele deve ficar escurecido para dar mais destaque ao menu expansível</li><li>Esse menu vai ficar disponível em toda a aplicação com exceção das telas de Login e Registro</li></ol></td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Alta</td>
        </tr>
        <tr>
            <span id="ustory-07"></span>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">US07</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">Eu,como usuário regular, desejo ter acesso a uma tela que vai mostrar minhas informações básica (email, nome e senha)</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1"><ol><li>Essa tela deve mostrar as informações que foram utilizadas no cadastro</li></ol></td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Baixa</td>
        </tr>
           <tr>
            <span id="ustory-08"></span>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">US08</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">Eu,como usuário regular, desejo ter acesso a uma tela que vai me permitir ter acesso detalhado a um evento que mostrei interesse, também deve ser possível favoritar ou desfavoritar ele para que eu possa ter acesso rápido por um tela específica posteriormente</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1"><ol><li>Essa tela deve estar bem formatada e apenas mostrar as informações básicas para o usuário</li></ol></td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Baixa</td>
        </tr>
        <tr>
            <span id="ustory-09"></span>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">US09</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">Eu,como usuário regular, desejo ter acesso a uma tela que vai me permitir ter as informações de contato do desenvolvedor caso eu tenha alguma dúvida</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1"><ol><li>Essa tela deve estar bem formatada e apenas mostrar as informações básicas dos desenvolvedores para eventual contato</li></ol></td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Baixa</td>
        </tr>
        <tr>
            <span id="ustory-10"></span>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">US10</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">Eu,como usuário regular, desejo ter a possibilidade de fazer logout do aplicativo</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1"><ol><li>A função deve levar o usuário a tela de Login</li></ol></td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Baixa</td>
        </tr>
                <tr>
            <span id="ustory-11"></span>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">US11</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">Eu,como usuário regular, desejo ter a possibilidade de cadastrar, alterar ou excluir um evento do sistema</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1"><ol><li>Os únicos que podem fazer alterações são o usuário que criou o evento e o administrador do aplicativo</li><li>Deve ser possível preencher informações como título do evento, data e horário em que vão acontecer, local que vai ocorrer se for presencial</li><li>No caso de um evento remoto, deve ser possível colocar o link da plataforma para que o usuário possa acessar pelo celular</li><li>Deve ser possível colocar uma imagem para o evento, mas não obrigatório</li><li>Deve ter um campo para colocar informações adicionais que não entrariam em nenhuma das anteriores. O seu preenchimento não é obrigatório</li></ol></td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Baixa</td>
        </tr>
</table>

<div style="text-align: center">
<p>Tabela 1: História de Usuário</p>
</div>