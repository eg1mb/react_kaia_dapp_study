import { registerWebModule, NativeModule } from 'expo';

import { MyNfcModuleEvents } from './MyNfcModule.types';

class MyNfcModule extends NativeModule<MyNfcModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(MyNfcModule, 'MyNfcModule');
