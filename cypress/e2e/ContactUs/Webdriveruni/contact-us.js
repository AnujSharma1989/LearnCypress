/// <reference types="cypress" />

//import { get } from "cypress/types/lodash";

describe('Test case for contact us form', () => {
    it.only('should submit the form', () => {
        
       cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html') 
       //cy.get('#contact-us').click({force:true}) 
       cy.document().should('have.attr','charset').and('eq','UTF-8')
       cy.title().should('include','Contact Us')
       cy.url().should('include','contactus')
       cy.get('[name="first_name"]').type("Anuj")
       cy.get('[name="first_name"]').should('have.attr','name','first_name')
       cy.get('[name="last_name"]').type("Sharma")
      cy.get('[name="last_name"]').should('have.attr','name','last_name')
       cy.get('[name="email"]').type("test@gmail.com")
       cy.get('[name="email"]').should('have.attr','name','email')
       cy.get('textarea.feedback-input').type("Sample text entered")
       cy.get ('[type="Submit"]').click()
       cy.get('h1').should('have.text','Thank You for your Message!')

    });
    it("unsuccessfull submission" , ()=>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get('[name="first_name"]').type("Anuj")
        cy.get('[name="last_name"]').type("Sharma")
        cy.get('textarea.feedback-input').type("Sample text entered")
        cy.get('body').contains('Error: all fields are required')
        cy.get ('[type="Submit"]').click()
    });
  
}); 

