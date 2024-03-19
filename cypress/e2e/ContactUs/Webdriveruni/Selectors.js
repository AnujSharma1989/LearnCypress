/// reference types="Cypress" />
describe("Selector example", ()=>{
    it("Example of selectors on webdriver page", () =>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html') 

        //by tag name
        cy.get("input")

        //by attribute name and value
        cy.get("input[name='first_name']")

        //by id
        cy.get("#contact_me")

        //by class
        cy.get(".feedback-input")

        //by multiple classes
        cy.get("[class='']")

        //by different attributes
        cy.get("[name='email'][placeholder='Email Address']")

        //by xpath
        cy.xpath("//input[@name='first_name']")
    })
})