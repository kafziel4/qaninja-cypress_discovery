/**
 * Delivery driver's address details
 */
type Address = {
  /**
   * Postal code
   */
  postalCode: string;

  /**
   * Street address
   */
  street: string;

  /**
   * Street number
   */
  number: string;

  /**
   * Apartment/suite/other
   */
  details: string;

  /**
   * District
   */
  district: string;

  /**
   * City/State
   */
  city_state: string;
};
