const day = require('dayjs');

const insert = [{
    id: 'a86b2b18-f3cd-40d0-a041-75e74cded15c',
    name: 'Seeded Requests',
    createdAt: day().format('YYYY-MM-DD HH:mm:ss'),
    updatedAt: day().format('YYYY-MM-DD HH:mm:ss'),
}];

module.exports = {
    up: (queryInterface,) => queryInterface.bulkInsert('Requests', insert),
    down: () => { }
};
