'use strict'

const faker = require('faker')

const generateProducts = (quantity) => {
  const products = []

  for (let i = 0; i < quantity; i += 1) {
    products.push({
      name: faker.commerce.productName(),
      description: faker.lorem.sentences(3),
      ingredients: faker.lorem.words(5).split(' ').join(', '),
      price: faker.finance.amount(0.5, 10, 2),
      currency: 'THB',
      available: faker.random.boolean()
    })
  }

  return products
}

function seed(knex) {
  // Deletes ALL existing products
  return knex('products').del()
    .then(() => knex('products').insert(generateProducts(50)))
}

module.exports = {
  seed
}