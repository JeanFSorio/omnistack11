const request = require('supertest'); // Importação do supertest
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback(); // Para não enchermos o banco, limpamos.
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    }); // Depois de tudo, destrua a conexão.

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "APAD3",
                email: "contato@apad.com.br",
                whatsapp: "47999062666",
                city: "Rio do Sul",
                uf: "SC"
            }); // Verifica se vai ser executado com sucesso.

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});