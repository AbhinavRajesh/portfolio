/// <reference types="cypress" />

context("About Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/about");
  });

  it("should find the about page", () => {
    cy.get("h1").contains("Under Work :(");
    cy.get("p").contains("Meanwhile you can checkout my spotify stats :)");
  });

  it("should display currently playing", () => {
    cy.get("h2").contains("Currently Playing");
  });

  it("should display my playlists", () => {
    cy.get("h2").contains("My Playlists");
  });

  it("should display my top tracks", () => {
    cy.get("h2").contains("Favourite songs");
  });
});

export {};
