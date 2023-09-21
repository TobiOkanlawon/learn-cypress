const URL = "http://localhost:9000/home.html"
describe('template spec', () => {
    beforeEach(() => {cy.visit(URL)})

    it("contains the heading 'Sign In' ", () => {
	cy.contains("Sign In")
    })

    it("contains the email input", () => {
	cy.get("input[data-test-id='email']")
    })

    it("allows us to enter information into the email input", () => {
	cy.get("input[data-test-id='email']").type("someemail@gmail.com")
    })

    it("enters information into the password input", () => {
	cy.get("input[data-test-id='email']").type("someemail@gmail.com")	
	cy.get("input[data-test-id='password']").type("somerandompassword")
    })

    it("clicks the button", () => {
	cy.get("button[data-test-id='submit']").click()
    })
})
