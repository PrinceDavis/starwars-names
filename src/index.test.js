'use strict'
const expect = require('chai').expect
const starWarsNames = require('./index')

describe('starwars-names', () => {
  describe('all', () => {
    it('should be an array of strings', () => {
      expect(starWarsNames.all).to.satisfies(isArrayOfStrings)
      function isArrayOfStrings(array) {
        return array.every(item => typeof item === 'string')
      }
    })

    it('should contain Luke Skywalker', () => {
      expect(starWarsNames.all).to.include('Luke Skywalker')
    })
  })

  describe('random', () => {
    it('it should return a random item from starwarsNames.all', () => {
      const randomItem = starWarsNames.random()
      expect(starWarsNames.all).to.include(randomItem)
    })

    it('should return a number of random item if passed a number', () => {
      const randomItems = starWarsNames.random(3)
      expect(randomItems).to.have.length(3)
      randomItems.forEach(function(element) {
        expect(starWarsNames.all).to.include(element)
      })
    })
  })
})

