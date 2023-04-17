export default class IdNotFoundMotorcycle extends Error {
  constructor(message : string) {
    super(message);
    this.message = message;
    this.name = 'Motorcycle not Found';
    this.stack = '404';
  }
}