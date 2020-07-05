
require('dotenv').config()
const v4 = require('uuid').v4
const request = require('https').request
const express = require('express')
const static = express.static
const bodyParser = require('body-parser')

const clientID = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET
const app = express()

app.use(static('public'))
app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )
app.use(bodyParser.json())

module.exports = getAvailableServices

function getAvailableServices(address) {
    // get chorus specific identifier for given address
    var addressIdentifier = getAddressIdentifier(address)

    // retrieve list of available services in area of given address
    var availableServices = queryChorus(addressIdentifier)
    if (availableServices.length > 0) {
        var services = availableServices.join(', ')
        return 'Services available in your area: ' + services
    }

    return 'There are no chorus services available in your area.'
}

function getAddressIdentifier(address) {
    const transactionID = v4()
    let data = []
    // dummy api
    var options = {
        host: 'random-word-api.herokuapp.com',
        path: '/word?number=10',
        // host: 'api.chorus.co.nz',
        // path: '/addresslookup/v1/addresses?q=' + address,
        method: 'GET',
        headers: {
            'X-Chorus-Client-Id': clientID,
            'X-Chorus-Client-Secret': clientSecret,
            'X-Transaction-Id': transactionID
        }
    }
    var req = request(options, function(res) {
        res.setEncoding('utf8')
        res.on('data', function (chunk) {
            console.log('chunk identifier: ' + chunk)
            data.push(chunk)
        })
    })
    
    req.on('error', function(e) {
        console.error('problem with request: ' + e.message)
    })
    
    req.end()

    return "12345"
}

function queryChorus(addressIdentifier) {
    const transactionID = v4()
    let data = []
    // dummy api
    var options = {
        host: 'random-word-api.herokuapp.com',
        path: '/word?number=10',
        // host: 'api.chorus.co.nz',
        // // query service availability by the unique address identifier
        // path: '/broadbandcheckerbusiness/v1/services/{id}?address=' + addressIdentifier,
        method: 'GET',
        headers: {
            'X-Chorus-Client-Id': clientID,
            'X-Chorus-Client-Secret': clientSecret,
            'X-Transaction-Id': transactionID
        }
    }
    var req = request(options, function(res) {
        res.setEncoding('utf8')
        res.on('data', function (chunk) {
            console.log('chunk services: ' + chunk)
            data.push(chunk)
        })
    })
    req.end()
      
    req.on('error', function(e) {
        console.error('problem with request: ' + e.message)
    })

    return ['Broadband > 20 Mbps (with the right modem and plan)', 'Broadband > 10 Mbps']
}

