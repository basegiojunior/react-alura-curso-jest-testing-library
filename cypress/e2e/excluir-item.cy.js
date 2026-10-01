it("excluir-item", function () {
  cy.visit("http://192.168.18.62:5173");

  cy.contains("Minha tarefa", { timeout: 6000 }).parent().find("[aria-label='delete']").click();

  cy.contains("Minha tarefa").should("not.exist");
});
