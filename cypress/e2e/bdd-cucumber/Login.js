import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const CuraPage = require("../../pages/curaHealthPageXpath").default;

Given("the CURA Healthcare Service home page is displayed", () => {
    cy.visit("/");
});

When(
    "user login with valid credential username {string} and password {string}",
    (username, password) => {
        CuraPage.clickMakeAppointment();
        CuraPage.typeUsername(username);
        CuraPage.typePassword(password);
        CuraPage.clickLoginBtn();
    }
);

Then("dashboard page will be displayed", () => {
    cy.xpath("//*[@class='col-sm-12 text-center']")
        .should("be.visible")
        .invoke("text")
        .should("include", "Make Appointment");
});
