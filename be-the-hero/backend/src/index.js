const express = require('express');
const routes = require('./routes');
const cors = require('cors')


const app = express();

app.use(cors());
app.use(express.json());  // converte json recebido para um objeto
app.use(routes);

app.listen(3333);




/* 
Utilizaremos o sqlite como bd relacional. Existem 3 formas principais de pedir dado para o BD, que são:
1 Driver = SELECT * FROM users
2 Query builder = table('users').select('*').where()
o query builder pode ser usado em qualquer sql, ele faz a selecao para todos. é escrito em js. estaremos usando o KNEXJS


*/

