import MyNfcModule from "./NativeMyNfcModule";

export function hello(): string {
  return MyNfcModule.hello();
}

export function sayHello(name: string): string {
  return MyNfcModule.sayHello();
}
