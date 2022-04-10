import { faker } from "@faker-js/faker";
import { generate } from "gerador-validador-cpf";

/**
 * Factory for the signup page.
 */
export default {
  /**
   * Creates a DeliveryDriver object with random properties.
   * @returns The DeliveryDriver object
   */
  deliveryDriver(): DeliveryDriver {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();

    const data: DeliveryDriver = {
      name: `${firstName} ${lastName}`,
      cpf: generate(),
      email: faker.internet.email(firstName, lastName),
      whatsapp: "11999999999",
      address: {
        postalCode: "04534011",
        street: "Rua Joaquim Floriano",
        number: "1000",
        details: "Ap 142",
        district: "Itaim Bibi",
        city_state: "São Paulo/SP",
      },
      deliveryMethod: "Moto",
      cnh: "cnh-digital.jpg",
    };

    return data;
  },
};
