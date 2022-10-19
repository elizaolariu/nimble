// https://github.com/testing-library/dom-testing-library/issues/1180
// @ts-ignore
// window.process = {
//     env: {
//         NODE_ENV: 'production'
//     }
// };

// Import all the test files to run in browser
function importAll(r: __WebpackModuleApi.RequireContext): void {
    r.keys().forEach(r);
}

// Explicitly add to browser test
importAll(require.context('../../', true, /\.spec\.js$/));
