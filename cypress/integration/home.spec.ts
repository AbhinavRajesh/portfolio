/// <reference types="cypress" />

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should find the home page", () => {
    cy.get("h1").contains("Abhinav Rajesh");
  });
});

export {};
