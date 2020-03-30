const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');


module.exports = {
    async index(request, response){
    const ongs = await connection('ongs').select('*');

    return response.json({ ongs });
    }, 


    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;
    const id = generateUniqueId();

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    });

    return response.json({ id });
    }
};




/* 
TIPOS DE PARAMETROS
Query params: /users?page=2&nome=jean&idade=24     request.query
route params: /users/(o :id 1, 2, 3, 4) nao nomeado       request.params
request body; corpo da requisicao           request.body
*/

