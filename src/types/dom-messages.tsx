enum Sender {
  React,
  Content,
}
interface ChromeMessage {
  from: Sender;
  message: any;
}
export type { ChromeMessage };
export { Sender };
