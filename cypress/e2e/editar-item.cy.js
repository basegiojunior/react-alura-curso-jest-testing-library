it("editar-item", function () {
  cy.visit("http://192.168.18.62:5173");

  cy.contains("Minha tarefa", { timeout: 6000 }).parent().find("[aria-label='edit']").click();

  cy.get("input[name='description']").clear().type("Outra tarefa");
  cy.get("button[type='submit']").click();

  cy.contains("Outra tarefa");
});
