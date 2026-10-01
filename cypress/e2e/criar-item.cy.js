describe("deveria criar um item", () => {
  it("criar item", () => {
    cy.visit("http://192.168.18.62:5173/");
    cy.get(".fab").click();
    cy.get("input[name='description']").type("Minha tarefa");
    cy.get("button[type='submit']").click();
    cy.contains("Minha tarefa", { timeout: 5000 });
  });
});
