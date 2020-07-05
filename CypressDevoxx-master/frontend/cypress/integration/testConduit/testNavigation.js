describe("test Navigation", () => {

    context('In an authenticated context', function () {
        beforeEach(function () {

            cy.login('cypress@devoxx.fr', 'cypressdevoxx')

            cy.server()
            cy.route('/sockjs-node/**').as('getJs');
         // wait XLS request
        cy.wait('@getJs')
        })


    it("should visit the site", () => {

        cy.visit("/user")
        cy.contains("Sign in").click()
        cy.log("end")
    })

})
})