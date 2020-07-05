const chai = require('chai')
const expect = chai.expect

const getAvailableServices = require('../chorus')

describe('getAvailableServices()', function () {
  it('should inform the user if there are no available services in their area', function () {
    const address = '341 Cape Reinga Road, Cape Reinga, Far North District'
    const expectedResponse = 'There are no chorus services available in your area.'
    var availableServices = getAvailableServices(address)

    expect(availableServices).to.be.equal(expectedResponse)
  })

  it('should inform the user if there are some services available in their area', function () {
    const address = '1 Newlyn Place, Welbourn, New Plymouth'
    const expectedResponse = 'Services available in your area: Broadband > 20 Mbps (with the right modem and plan), Broadband > 10 Mbps'
    var availableServices = getAvailableServices(address)

    expect(availableServices).to.be.equal(expectedResponse)
  })

  it('should inform the user if there are all services available in their area', function () {
    const address = '3 Vardon Road, Green Bay, Waitakere, Auckland'
    const expectedResponse = 'Services available in your area: UFB fibre up to 1 Gbps, Broadband > 20 Mbps (with the right modem and plan), Broadband > 10 Mbps'
    var availableServices = getAvailableServices(address)

    expect(availableServices).to.be.equal(expectedResponse)
  })
})
