
var calc=require("../app/calculator.js")
var chai = require("chai");
var expect = chai.expect

var i=8, j=2

describe("Testing the calculator module", function(){
it("Testing add method PASS ", function (){   
    expect(calc.add(i,j)).to.be.equal(10)
})
it("Testing add method FAIL", function (){   
   expect(calc.add(i,j)).to.be.equal(5, "Fails the test")
})

it("Testing mul method PASS", function (){
    expect(calc.mul(i,j)).to.be.equal(16)
    
})
it("Testing mul method FAIL ", function (){
    expect(calc.mul(i,j)).to.be.equal(15, "Fails the test")
})
it("Testing div method PASS", function (){
    expect(calc.div(i,j)).to.be.equal(4)
    
})
it("Testing div method FAIL ", function (){
  expect(calc.div(i,j)).to.be.equal(2, "Fails the test")
})
it("Testing sub method PASS ", function (){
    expect(calc.sub(i,j)).to.be.equal(6)
    
})
it("Testing sub method FAIL ", function (){
       expect(calc.sub(i,j)).to.be.equal(4, "Fails the test")
})

})