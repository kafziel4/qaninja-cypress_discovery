/**
 * Delivery driver details.
 */
type DeliveryDriver = {
  /**
   * Name of the delivery driver.
   */
  name: string;

  /**
   * CPF of the delivery driver.
   */
  cpf: string;

  /**
   * Email of the delivery driver.
   */
  email: string;

  /**
   * Whatsapp number of the delivery driver
   */
  whatsapp: string;

  /**
   * Address of the delivery driver
   */
  address: Address;

  /**
   * Delivery method used by the delivery driver
   */
  deliveryMethod: string;

  /**
   * CNH of the delivery driver
   */
  cnh: string;
};
