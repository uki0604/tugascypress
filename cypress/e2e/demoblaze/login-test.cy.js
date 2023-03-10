describe('Demoblaze app login scenario', () => {
    it('successfully login add to cart and logout', () => {
        cy.visit('http://www.demoblaze.com/index.html')
        cy.screenshot();
        cy.get("[data-target='#logInModal']").click()
        cy.get("[onclick='logIn()']").should('be.visible')
        cy.wait(1000)
        cy.screenshot();
        cy.get('#loginusername').type('wibowo.bullseye').should('have.value', 'wibowo.bullseye')
        cy.get('#loginpassword').type('bullseye').should('have.value', 'bullseye')
        cy.screenshot();
        cy.get("[onclick='logIn()']").click()
        cy.screenshot();
        cy.get('#nameofuser').should('contain', 'wibowo.bullseye')
        cy.screenshot();
        cy.get('#tbodyid > div:nth-of-type(2) .hrefch').click()
        cy.screenshot();
        cy.get('.btn-success').click()
        cy.wait(2000)
        cy.screenshot();
        cy.on('window:confirm', (txt) => {
            expect(txt).to.equal('Product added.');
            cy.screenshot();
        })
        cy.get("#cartur").click()
        cy.wait(1000)
        cy.screenshot();

        // click button logout
        cy.get("[onclick='logOut()']").click()
        cy.screenshot();

        // assert homescreen
        cy.get('#nameofuser').should('contain', '')
        cy.screenshot();
    })
})