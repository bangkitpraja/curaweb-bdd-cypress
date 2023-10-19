class CuraPage {
    elements = {
        clickMakeAppointmentBtn: () =>
            cy.xpath("//a[@id='btn-make-appointment']"),
        inputUsername: () => cy.xpath("//input[@id='txt-username']"),
        inputPassword: () => cy.xpath("//input[@id='txt-password']"),
        loginBtn: () => cy.xpath("//button[@id='btn-login']"),
    };

    clickMakeAppointment() {
        this.elements.clickMakeAppointmentBtn().click();
    }

    clickLoginBtn() {
        this.elements.loginBtn().click();
    }

    typeUsername(username) {
        this.elements.inputUsername().type(username);
    }

    typePassword(password) {
        this.elements.inputPassword().type(password);
    }
}

export default new CuraPage();
