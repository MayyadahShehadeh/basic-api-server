'use strict';
const server = require('../src/server');
// I do not have to run it
const supertest = require('supertest');
const request = supertest(server.app);

//add the name of the module that I am testing 
describe('my API Server', ()=> {

    // add scenarios & test cases 
    it('handles not found request', async () => {
        // add test
        const response = await request.get('/asd'); // async
        expect(response.status).toEqual(404);
    });
    
    it('/ route works', async () => {
        const response = await request.get('/'); // async
        expect(response.status).toEqual(200);
        console.log(response.text);
        expect(response.text).toEqual('this is home page!!! :D :D :D');
    });


});