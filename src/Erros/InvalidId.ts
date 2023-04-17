export default class InvalidId extends Error {
  constructor(message : string) {
    super(message);
    this.message = message;
    this.name = 'Invalid mongo id';
    this.stack = '422';
  }
}
