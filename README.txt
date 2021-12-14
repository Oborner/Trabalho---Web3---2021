A API foi desenvolvida em Node js usando express, salvando no banco de dados do MongoDB através do mongoose.
Para checar as funções foram checadas usando postman.

A aplicação é iniciando com o comando "node app.js".

A inserção de novos usuários é feito em "http://localhost:5000/api/usuario", utilizando o método POST.
Deve ser enviado como JSON e seguir o modelo:
{
    "nome": "nome do usuario <String>",
    "sobrenome": "Sobrenome do usuario <String>",
    "idade": "idade do usuario <Number>",
    "sexo": "sexo do usuario <String>"
}

A consulta de usuarios pode ser feito de 3 formas:
Utilizando o método GET em "http://localhost:5000/api/usuario", será retornado todos os usuários

Utilizando o método GET em "http://localhost:5000/api/usuario" e junto com um JSON contendo um ou mais campos
do modelo anterior, será feita uma pesquisa com os parametros.

Utilizando o método GET em "http://localhost:5000/api/usuario/NomeUsuario" irá retornar o usuario com o nome 
enviado.


Para atualizar o usuario, é feito um PUT em "http://localhost:5000/api/usuario/IdUsuario", o id do usuario
é retornado junto na consulta no banco do dados. Junto do PUT deve ser enviado um JSON com um ou mais campos 
e os valores atualizados.

Para deletar o usuario, é feito um DELETE em "http://localhost:5000/api/usuario/IdUsuario"