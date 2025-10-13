import { requireNativeView } from 'expo';
import * as React from 'react';

import { MyNfcModuleViewProps } from './MyNfcModule.types';

const NativeView: React.ComponentType<MyNfcModuleViewProps> =
  requireNativeView('MyNfcModule');

export default function MyNfcModuleView(props: MyNfcModuleViewProps) {
  return <NativeView {...props} />;
}
