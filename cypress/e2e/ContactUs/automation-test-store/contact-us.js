/// reference types="cypress"/>

describe("Contact us form from automation store" , ()=>{
    it("sucessful submission" , ()=>{
        cy.visit("https://www.automationteststore.com/")
       // cy.get('.info_links_footer > :nth-child(5) > a').click()
       cy.xpath("//a[contains(@href,'contact')]").click()
        cy.get('#ContactUsFrm_first_name').type("Anuj")
        cy.get('#ContactUsFrm_email').type("abc@g.com")
        cy.get('#ContactUsFrm_enquiry').type("hi")
        cy.get('.col-md-1 > .btn').click()
        cy.get('.col-md-6 > .btn').click()

    })

});