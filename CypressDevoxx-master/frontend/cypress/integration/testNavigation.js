describe("testSuite", () => {
    it("should visit the site", () => {
        console.log("hello")
        cy.visit("http://localhost:4100/")
        cy.contains("Sign In").click()
        console.log("yolo")
    })
})