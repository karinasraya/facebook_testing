describe('Login Facebook Testing', () => {
    it('Navigate to Facebook site', () => {
        cy.visit("https://facebook.com/")
    })
    it('Login to Facebook', () => {
        cy.get('input[data-testid=royal_email]').type("") //masukkan email anda di dalam tanda "" di bagian type
        cy.get('input[data-testid=royal_pass]').type("") //masukkan password anda di dalam tanda "" di bagian type
        cy.get('input[data-testid=royal_login_button]').click()
    })
});