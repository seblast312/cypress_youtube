describe("testSuite", () => {
    it("should visit the site", () => {
        console.log("hello")
        //cy.visit("/")
        cy.contains("Sign In").click()
        console.log("yolo")
    })
})