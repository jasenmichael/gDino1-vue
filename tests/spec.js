describe("Form submission", () => {
    it("submits a job", () => {
        cy.visit("/");

        cy.get("#job-listings li").should("have.length.gte", 4);

        const formFields = [
            "input[name=title]",
            "input[name=pay]",
            "textarea[name=description]"
        ];

        formFields.forEach(formField => {
            cy.get(formField).should("be.empty");
        });

        cy.get("input[name=title]").type("The Boss");
        cy.get("input[name=pay]").type("$1 Million");
        cy.get("textarea[name=description]").type("Check mailbox and cash checks");

        cy.get("input[type=submit]").click();

        formFields.forEach(formField => {
            cy.get(formField).should("be.empty");
        });

        cy.get("#job-listings li").eq(0).find("h4").should("have.text", "The Boss");
        cy.get("#job-listings li").eq(0).find("small").eq(0).should("have.text", "$1 Million");
        cy.get("#job-listings li").eq(0).find("p").should("have.text", "Check mailbox and cash checks");
        cy.get("#job-listings li").eq(0).find("small").eq(1).should("have.text", "0 dinos are interested in this job");
    });
});
