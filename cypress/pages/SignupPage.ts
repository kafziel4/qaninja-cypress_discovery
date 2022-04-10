/**
 * Class representing the signup page.
 */
class SignupPage {
  /**
   * Go to the signup page.
   */
  go(): void {
    cy.visit("/");

    cy.get("a[href='/deliver']").click();
    cy.get("#page-deliver form h1").should(
      "have.text",
      "Cadastre-se para  fazer entregas"
    );
  }

  /**
   * Fill the signup form with the delivery driver details.
   * @param deliveryDriver The delivery driver details.
   */
  fillForm(deliveryDriver: DeliveryDriver): void {
    cy.get("input[name='fullName']").type(deliveryDriver.name);
    cy.get("input[name='cpf']").type(deliveryDriver.cpf);
    cy.get("input[name='email']").type(deliveryDriver.email);
    cy.get("input[name='whatsapp']").type(deliveryDriver.whatsapp);

    cy.get("input[name='postalcode']").type(deliveryDriver.address.postalCode);
    cy.get("input[type=button][value='Buscar CEP']").click();

    cy.get("input[name='address-number']").type(deliveryDriver.address.number);
    cy.get("input[name='address-details']").type(
      deliveryDriver.address.details
    );

    cy.get("input[name='address']").should(
      "have.value",
      deliveryDriver.address.street
    );
    cy.get("input[name='district']").should(
      "have.value",
      deliveryDriver.address.district
    );
    cy.get("input[name='city-uf']").should(
      "have.value",
      deliveryDriver.address.city_state
    );

    cy.contains(".delivery-method li", deliveryDriver.deliveryMethod).click();

    cy.get("input[accept^='image']")
      .invoke("show")
      .selectFile(`cypress/fixtures/images/${deliveryDriver.cnh}`);
  }

  /**
   * Submit the signup form
   */
  submit(): void {
    cy.get("form button[type='submit']").click();
  }

  /**
   * Validate that the modal component displays the correct message.
   * @param expectedMessage The expected message to be displayed.
   */
  modalContentShouldBe(expectedMessage: string): void {
    cy.get(".swal2-container .swal2-html-container").should(
      "have.text",
      expectedMessage
    );
  }

  /**
   * Validate that the alert message is correct.
   * @param expectedMessage The expected message to be displayed.
   */
  alertMessageShouldBe(expectedMessage: string): void {
    cy.contains(".alert-error", expectedMessage).should("be.visible");
  }
}

/**
 * Signup page.
 */
export default new SignupPage();
