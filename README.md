### To run:

npm install 

npm test

Setting environment variables:

If I had had the code successfully querying the Chorus api, I would instruct the reader to set up a `.env` file to store their Chorus API keys and gain access to the API, however I was not able to access keys myself to verify this process


Notes:

I wasn't able to gain access to a API key for the Chorus API, so I used a random public api instead to give an idea of what I would do, but wasnt able to verify against the real API. I also couldn't establish how the API works exactly, but as I couldn't access it anyway I didn't spend too much time on this. The code sample is to convey how I have interpreted the problem, and the approach I have taken to solve it. The way I have set out the functionality is based on some assumptions about how the Chorus API works that I have not been able to verify.

Essentially, the functionality established is:

- Given an address, query the Chorus Address Lookup API to retrieve a Chorus address identifier for the area
- Using the address identifier, query the Chorus Broadband Checker Business API to retrieve a list of services available in that area
- Return the list of services available in the area of the given address

Testing

- Submit an address for a non-covered area, a partially covered area and a fully covered area
- Assert that for each area in question, the correct services have been returned