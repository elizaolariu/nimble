import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';
import { Button as NimbleButton } from '@ni/nimble-components/dist/esm/button';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Button = provideReactWrapper(React).wrap(NimbleButton);
