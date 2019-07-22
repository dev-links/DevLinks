describe("should click on Step2", () => {
    it("should visit button className", () => {
      cy.get(".button").click();
      cy.scrollTo(0, 136);
    });
  });

  describe("Initial Test", () => {
    it("Go to the app", () => {
      cy.visit("/");
    });
  });
  
  describe("Step1 page test", () => {
    it("Go to the Step1 page", () => {
      cy.visit("/Step1");
    });
  });

  describe("Login Page Test", () => {
    it("Go to the login page", () => {
      cy.visit("/login");
    });
  });

  describe("Step2 page test", () => {
    it("Go to the Step2 page", () => {
      cy.visit("/Step2");
    });
  });