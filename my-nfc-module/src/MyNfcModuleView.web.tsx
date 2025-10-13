import * as React from 'react';

import { MyNfcModuleViewProps } from './MyNfcModule.types';

export default function MyNfcModuleView(props: MyNfcModuleViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
