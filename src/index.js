'use strict'
const starWarsNames = require('./starwars-names')
const uniqueRandomArray = require('unique-random-array')
const getRandomItem = uniqueRandomArray(starWarsNames)


const random = (number) => {
  if (!number) return getRandomItem()

  const randomItem = []
  for (let i = 1; i < number; i++ ) {
    randomItem.push(getRandomItem())
  }
  return randomItem
}


module.exports = {
  all: starWarsNames,
  random
}