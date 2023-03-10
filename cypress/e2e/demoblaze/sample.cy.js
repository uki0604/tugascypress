describe('login tokoilmu scenario', () => {
    it('successfully login using correct username password', () => {
        cy.visit('https://tokoilmu.id/login')
        cy.get("//*[@id="__next"]/div/div/div/div[2]/div/form/div[2]/input").type('marzuki@prospark.co').should('have.value', 'marzuki@prospark.co')
        cy.get("//*[@id="__next"]/div/div/div/div[2]/div/form/div[3]/input").type('123456').should('have.value', '123456')
        cy.get("//button[@class='text-white text-md w-100 btn btn-primary']").click()
    })
})