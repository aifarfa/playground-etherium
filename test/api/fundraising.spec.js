import {expect} from 'chai'
import * as api from '../../src/api/fundraising.js'

describe('api: fundraising', () => {

  describe('getFundraising', () => {

    it('defines getFundraising function', () => {
      expect(api.getFundraising).to.be.a('function')
    })

    it('returns list of campaigns', () => {
      let result = api.getFundraising()

      expect(result).to.be.an('array');
      expect(result.length).to.be.above(0); // greater than > 0
      expect(result[0]).to.have.property('created');
      expect(result[0]).to.have.property('name');
      expect(result[0]).to.have.property('organizer');
      expect(result[0]).to.have.property('target');
    })
  })

  describe('getFundraisingAsync', () => {

    it('returns promise', () => {
      return api.getFundraisingAsync().then((result) => {
        expect(result).to.be.an('array');
        expect(result).to.have.length(2);
      })
    })
  });

})
