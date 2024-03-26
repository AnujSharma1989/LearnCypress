/// reference types="cypress"/>
describe("Insepect items using chaining commands",()=>{
    it("click on first item using header", ()=>{
        cy.visit("https://automationteststore.com/")
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();

    })

    it("click on first item using item text", ()=>{
        cy.visit("https://automationteststore.com/")
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click();
    })

    it.only("click on first item using index", ()=>{
        cy.visit("https://automationteststore.com/")
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();
        
    })
})