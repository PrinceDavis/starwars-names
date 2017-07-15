'use strict'
const starWarsNames = require('./starwars-names')
const uniqueRandomArray = require('unique-random-array')

module.exports = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames)
}