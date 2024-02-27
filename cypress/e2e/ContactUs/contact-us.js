/// <reference types="cypress" />
describe('Test case for contact us form', () => {
    it('should submit the form', () => {
        
       cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html') 
       //cy.get('#contact-us').click({force:true}) 
       cy.get('[name="first_name"]').type("Anuj")
       cy.get('[name="last_name"]').type("Sharma")
       cy.get('[name="email"]').type("test@gmail.com")
       cy.get('textarea.feedback-input').type("Sample text entered")
       cy.get ('[type="Submit"]').click({force:true})
    });
    it('should not submit the form', () => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html') 
        cy.get('[name="first_name"]').type("Anuj")
        cy.get ('[type="Submit"]').click()
        
    });
}); 

describe('Test case for contact us' ,() => {
    it ("Open contact us" ,() =>  {

    })

});