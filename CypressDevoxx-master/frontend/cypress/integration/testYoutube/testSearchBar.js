describe("test Search Bar", () => {

    context('In an authenticated context', function () {
        beforeEach(function () {

            cy.visit("https://www.youtube.com?gl=GB&hl=en-GB")
            cy.server()
            cy.route("https://www.gstatic.com/*").as("@GetGstatic")
            cy.route("https://i.ytimg.com/*").as("@Getytimg")
            cy.route("https://yt3.ggpht.com/*").as("@Gety3")
            cy.wait(["GetGstatic", "Getytimg", "Gety3"]);
           //login
        })


    it("should see the home page", () => {
        cy.get("a[id=logo] .ytd-topbar-logo-renderer")
    })

})
})