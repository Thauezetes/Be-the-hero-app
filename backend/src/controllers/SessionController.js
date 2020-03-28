const connection = require('../database/connection');

module.exports = {
    async create(resquest, response){
        const { id } = resquest.body;

        const ongs = await connection('ongs')
          .where('id',id)
          .select('nome')
          .first();

        if(!ongs){
          return response.status(400).json({error: 'Ong não encontrada'});
        }

        return response.json(ongs);

    }
}