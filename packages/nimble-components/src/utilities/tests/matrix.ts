import { html, repeat, ViewTemplate } from '@microsoft/fast-element';
import { NimbleTheme } from '../../theme-provider/themes';

export type BackgroundStateName = 'background';
export interface BackgroundState {
    name: string;
    value: string;
    theme: NimbleTheme;
}

export const backgroundStates: BackgroundState[] = [
    {
        name: `"${NimbleTheme.Light}" theme on white`,
        value: '#F4F4F4',
        theme: NimbleTheme.Light
    },
    {
        name: `"${NimbleTheme.Color}" theme on green`,
        value: '#03B585',
        theme: NimbleTheme.Color
    },
    {
        name: `"${NimbleTheme.Color}" theme on dark green`,
        value: '#044123',
        theme: NimbleTheme.Color
    },
    {
        name: `"${NimbleTheme.Dark}" theme on black`,
        value: '#252526',
        theme: NimbleTheme.Dark
    },
    {
        name: `"${NimbleTheme.LegacyBlue}" theme on white`,
        value: '#FFFFFF',
        theme: NimbleTheme.LegacyBlue
    }
];

export type DisabledStateName = 'disabled';
export interface DisabledState {
    name: string;
    value: boolean;
}
export const disabledStates: DisabledState[] = [
    { name: '', value: false },
    { name: 'Disabled', value: true }
];

export type InvalidStateName = 'invalid';
export type InvalidState = [string, string];
export const invalidStates: InvalidState[] = [
    ['', ''],
    ['Invalid', 'invalid']
];

export type ReadOnlyState = [string, boolean];
export const readOnlyStates: ReadOnlyState[] = [
    ['', false],
    ['Read-Only', true]
];

export type IconVisibleState = boolean;
export const iconVisibleStates: IconVisibleState[] = [false, true];

export type ExpandedState = [string, boolean];
export const expandedStates: ExpandedState[] = [
    ['Collapsed', false],
    ['Expanded', true]
];

export type SelectedState = [string, boolean];
export const selectedStates: SelectedState[] = [
    ['Unselected', false],
    ['Selected', true]
];

/**
 * Takes an array of state values that can be used with the template to match the permutations of the provided states.
 */

export function createMatrix<State1Name extends string, State1>(
    dimensions: {
        [state1 in State1Name]: State1[];
    }
): [
    {
        [state1 in State1Name]: State1;
    }
];

export function createMatrix<
    State1Name extends string,
    State1,
    State2Name extends string,
    State2
>(
    dimensions:
    { [state1 in State1Name]: State1[] }
    & { [state2 in State2Name]: State2[] }
): [{ [state1 in State1Name]: State1 } & { [state2 in State2Name]: State2 }];

export function createMatrix<
    State1Name extends string,
    State1,
    State2Name extends string,
    State2,
    State3Name extends string,
    State3
>(
    dimensions:
    { [state1 in State1Name]: State1[] }
    & { [state2 in State2Name]: State2[] }
    & { [state3 in State3Name]: State3[] }
): [
    { [state1 in State1Name]: State1 } &
    { [state2 in State2Name]: State2 } &
    { [state3 in State3Name]: State3 }
];

export function createMatrix<
    State1Name extends string,
    State1,
    State2Name extends string,
    State2,
    State3Name extends string,
    State3,
    State4Name extends string,
    State4
>(
    dimensions:
    { [state1 in State1Name]: State1[] }
    & { [state2 in State2Name]: State2[] }
    & { [state3 in State3Name]: State3[] }
    & { [state4 in State4Name]: State4[] }
): [
    { [state1 in State1Name]: State1 } &
    { [state2 in State2Name]: State2 } &
    { [state3 in State3Name]: State3 } &
    { [state4 in State4Name]: State4 }
];

export function createMatrix<
    State1Name extends string,
    State1,
    State2Name extends string,
    State2,
    State3Name extends string,
    State3,
    State4Name extends string,
    State4,
    State5Name extends string,
    State5
>(
    dimensions:
    { [state1 in State1Name]: State1[] }
    & { [state2 in State2Name]: State2[] }
    & { [state3 in State3Name]: State3[] }
    & { [state4 in State4Name]: State4[] }
    & { [state5 in State5Name]: State5[] }
): [
    { [state1 in State1Name]: State1 } &
    { [state2 in State2Name]: State2 } &
    { [state3 in State3Name]: State3 } &
    { [state4 in State4Name]: State4 } &
    { [state5 in State5Name]: State5 }
];

export function createMatrix(
    dimensions: {
        [stateName: string]: unknown[]
    }
): { [stateName: string]: unknown }[] {
    const allDimensions = Object.values(dimensions);
    const dimensionNames = Object.keys(dimensions);
    const matrix: { [stateName: string]: unknown }[] = [];
    const recurseDimensions = (
        currentDimensions?: unknown[][],
        ...states: unknown[]
    ): void => {
        if (currentDimensions && currentDimensions.length >= 1) {
            const [currentDimension, ...remainingDimensions] = currentDimensions;
            for (const currentState of currentDimension) {
                recurseDimensions(remainingDimensions, ...states, currentState);
            }
        } else {
            const stateInstanceEntries = dimensionNames.map((key, i) => [key, states[i]]);
            const stateInstance = Object.fromEntries(stateInstanceEntries) as { [stateName: string]: unknown };
            matrix.push(stateInstance);
        }
    };
    recurseDimensions(allDimensions);
    // prettier-ignore
    return matrix;
}

/**
 * Wraps a given component template with a region for each of the available themes.
 */

export const themeWrapper = <TSource>(template: ViewTemplate<TSource>): ViewTemplate => html`
    ${repeat(() => backgroundStates, html<BackgroundState>`
        <nimble-theme-provider theme="${x => x.theme}">
            <div style="background-color: ${x => x.value}; padding:20px;">
                ${template}
            </div>
        </nimble-theme-provider>
    `)}
`;
