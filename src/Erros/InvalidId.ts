export default class InvalidId extends Error {
  constructor(message : string) {
    super(message);
    this.message = message;
    this.stack = '422';
  }
}