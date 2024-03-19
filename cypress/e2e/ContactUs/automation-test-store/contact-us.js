/// reference types="cypress"/>

describe("Contact us form from automation store" , ()=>{
    it("sucessful submission" , ()=>{
        cy.visit("https://www.automationteststore.com/")
       // cy.get('.info_links_footer > :nth-child(5) > a').click()
       //cy.xpath("//a[contains(@href,'contact')]").click()
       cy.get("a[href$='contact']").click();
        cy.get('#ContactUsFrm_first_name').type("Anuj")
        cy.get('#ContactUsFrm_email').type("abc@g.com")
        cy.get('#ContactUsFrm_email').should('have.attr','name','email')
        cy.get('#ContactUsFrm_enquiry').type("hi test from")
       cy.get("button[title='Submit']").click();
      // cy.get("[title='Continue']").click();
      cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')

    })
    it("Unsucessful submission" , ()=>{

    })

});