import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@ni/nimble-react/src/button/index';

// eslint-disable-next-line @typescript-eslint/naming-convention
const App = (): JSX.Element => {
    return <h1>Hello world!<Button>Hello!</Button></h1>;
};

const app = document.getElementById('app');
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
ReactDOM.render(<App />, app);
