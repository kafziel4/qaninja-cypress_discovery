import signup from "../pages/SignupPage";
import signupFactory from "../factories/SignupFactory";

describe("Signup", () => {
  it("User should become a delivery driver", () => {
    const deliveryDriver: DeliveryDriver = signupFactory.deliveryDriver();

    signup.go();
    signup.fillForm(deliveryDriver);
    signup.submit();
    const expectedMessage: string =
      "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.";
    signup.modalContentShouldBe(expectedMessage);
  });

  it("Incorrect CPF", () => {
    const deliveryDriver: DeliveryDriver = signupFactory.deliveryDriver();
    deliveryDriver.cpf = "000000141aa";

    signup.go();
    signup.fillForm(deliveryDriver);
    signup.submit();
    signup.alertMessageShouldBe("Oops! CPF inválido");
  });

  it("Incorrect email", () => {
    const deliveryDriver: DeliveryDriver = signupFactory.deliveryDriver();
    deliveryDriver.email = "user.com.br";

    signup.go();
    signup.fillForm(deliveryDriver);
    signup.submit();
    signup.alertMessageShouldBe("Oops! Email com formato inválido.");
  });

  describe("Required fields", () => {
    const messages: Message[] = [
      { field: "name", output: "É necessário informar o nome" },
      { field: "cpf", output: "É necessário informar o CPF" },
      { field: "email", output: "É necessário informar o email" },
      { field: "postalCode", output: "É necessário informar o CEP" },
      { field: "number", output: "É necessário informar o número do endereço" },
      { field: "deliveryMethod", output: "Selecione o método de entrega" },
      { field: "cnh", output: "Adicione uma foto da sua CNH" },
    ];

    before(() => {
      signup.go();
      signup.submit();
    });

    messages.forEach((message) => {
      it(`${message.field} is required`, () => {
        signup.alertMessageShouldBe(message.output);
      });
    });
  });
});
