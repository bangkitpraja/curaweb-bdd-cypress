Feature: Login to CURA Healthcare Service

    Feature Description
    Scenario: As a user I want to login to CURA Healthcare Service

        Given the CURA Healthcare Service home page is displayed
        When user login with valid credential username '<username>' and password '<password>'
        Then dashboard page will be displayed

    Examples:
    |username|password|
    |John Doe|ThisIsNotAPassword|