/// reference types="cypress"/>

describe("Contact us form from automation store" , ()=>{
    it("sucessful submission" , ()=>{
        cy.visit("https://www.automationteststore.com/")
        cy.get('.info_links_footer > :nth-child(5) > a').click()

    })

});