exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          name: 'ANTONIO FERREIRA ',
          cpf: '33333333333',
          email: 'antonio@antonio.com.br',
          whatsapp: '3123123123',
          city: 'SAO PAULO',
          uf: 'SP',
          password:
            '$2b$10$ws32UHsGRqiNvwW69dabU.t79kCtUvN5JvRbtMV6et9QHwc0UUbda', // 123456789
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]);
    });
};
