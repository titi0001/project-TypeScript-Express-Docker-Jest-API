export default class IdNotFound extends Error {
  constructor(message : string) {
    super(message);
    this.message = message;
    this.stack = '404';
  }
}