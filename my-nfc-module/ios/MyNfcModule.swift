import ExpoModulesCore

// 네이티브 모듈 선언
public class MyNfcModule: Module {
  // 모듈 구조 선언
  public func definition() -> ModuleDefinition {
    Name("MyNfcModule")

    // JS/TS 에서 호출할 수 있는 함수
    Function("hello") {
      return "Hello from Swift"
    }

    //JS/TS 에서 입력받은 이름을 포함한 문장을 반환하는 함수
    Function("sayHello") {(name: String) -> String in return "Hello, \(name)!"}
  }
}
