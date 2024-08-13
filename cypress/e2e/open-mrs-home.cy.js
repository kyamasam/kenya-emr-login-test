describe("test that login fails with incorrect credentials", () => {
  beforeEach(() => {
    cy.visit("https://qa.kenyahmis.org/openmrs/spa/login");
  });
  it("test login with incorrect username", () => {
    cy.get("#username").type("1231312");
    cy.get('button[type="submit"].cds--btn--primary').click();
    cy.get("#password").type("Admin123");
    cy.get('button[type="submit"].cds--btn--primary').click();
    cy.get(".cds--inline-notification").should("exist");
    cy.get(".cds--inline-notification__subtitle")
      .should("exist")
      .and("contain", "Invalid username or password");
  });
  it("test login with incorrect password", () => {
    cy.get("#username").type("admin");
    cy.get('button[type="submit"].cds--btn--primary').click();
    cy.get("#password").type("asfadas");
    cy.get('button[type="submit"].cds--btn--primary').click();
    cy.get(".cds--inline-notification").should("exist");
    cy.get(".cds--inline-notification__subtitle")
      .should("exist")
      .and("contain", "Invalid username or password");
  });
});

describe("test that users can login to the open mrs portal successfully", () => {
  beforeEach(() => {
    cy.visit("https://qa.kenyahmis.org/openmrs/spa/login");
  });
  it("test login with correct credentials", () => {
    cy.get("#username").type("admin");
    cy.get('button[type="submit"].cds--btn--primary').click();
    cy.get("#password").type("Admin123");
    cy.get('button[type="submit"].cds--btn--primary').click();
    cy.url().should("include", "spa/login/location");
    // check if an element exists
    cy.get(
      "#single-spa-application\\:\\@kenyaemr\\/esm-login-app-page-0"
    ).should("exist");
  });
});
