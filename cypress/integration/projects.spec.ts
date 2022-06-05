/// <reference types="cypress" />

context("Projects Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/projects");
  });

  it("should find the projects page", () => {
    cy.get("h2").contains("Projects");
  });

  it("should find the projects in the home projects page", () => {
    cy.get("#projects").find(".cursor-pointer").should("have.length", 4);
  });
});

export {};
