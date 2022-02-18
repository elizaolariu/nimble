<div align="center">
    <img src="docs/nimble-logo-icon.svg" width="100px"/>
    <p><b>ni | nimble</b></p>
</div>

# Nimble

[![Nimble Angular NPM version and repo link](https://img.shields.io/npm/v/@ni/nimble-angular.svg?label=@ni/nimble-angular)](https://www.npmjs.com/package/@ni/nimble-angular)
[![Nimble Angular Schematics NPM version and repo link](https://img.shields.io/npm/v/@ni/nimble-angular-schematics.svg?label=@ni/nimble-angular-schematics)](https://www.npmjs.com/package/@ni/nimble-angular-schematics)
[![Nimble Blazor Nuget version and repo link](https://img.shields.io/nuget/v/NimbleBlazor.svg?label=NimbleBlazor)](https://www.nuget.org/packages/NimbleBlazor)
[![Nimble Components NPM version and repo link](https://img.shields.io/npm/v/@ni/nimble-components.svg?label=@ni/nimble-components)](https://www.npmjs.com/package/@ni/nimble-components)
[![Nimble Tokens NPM version and repo link](https://img.shields.io/npm/v/@ni/nimble-tokens.svg?label=@ni/nimble-tokens)](https://www.npmjs.com/package/@ni/nimble-tokens)

The NI Nimble Design System: styled UI components for NI applications.

[![storybook page](https://img.shields.io/badge/storybook-white.svg?logo=storybook)](https://ni.github.io/nimble/storybook)
[![example angular app](https://img.shields.io/badge/example%20angular%20app-dd0031.svg?logo=angular)](https://ni.github.io/nimble/storybook/example-client-app)
[![example vanilla app](https://img.shields.io/badge/example%20vanilla%20app-gray.svg?logo=javascript)](https://ni.github.io/nimble/storybook/example-vanilla-app)

## Getting Started

This repository contains the source for the following packages:

- **[`@ni/nimble-angular`](/angular-workspace/projects/ni/nimble-angular/)** - styled Angular components for use in NI Angular applications
- **[`@ni/nimble-blazor`](/packages/nimble-blazor/)** - styled Blazor components for use in NI Blazor applications
- **[`@ni/nimble-components`](/packages/nimble-components/)** - styled web components for use in other applications (also used by `nimble-angular` and `nimble-blazor`)
- **[`@ni/nimble-tokens`](/packages/nimble-tokens/)** - design tokens used by the component packages

And some additional utility packages:
- [`@ni/beachball-lock-update`](/packages/beachball-lock-update/) - script to update `package-lock.json` files in npm workspace monorepos

Consult the `README.md` for each package to learn more, including how to use it in an application.

The above packages follow [Semantic Versioning](https://semver.org). Consult the `CHANGELOG.md` for each package to see the changes in each version, including instructions for adapting your application in response to breaking changes.

## Community

We welcome feedback and contributions!

The fastest way to ask questions is to [join the discussion on Teams](https://teams.microsoft.com/l/team/19%3awo8vmMKMsHfltKXxc0bczZo-X4JlQSV5VxpaRJdh13k1%40thread.tacv2/conversations?groupId=9ee065d7-3898-4245-82f6-76e86084b8b1&tenantId=87ba1f9a-44cd-43a6-b008-6fdb45a5204e) (accessible to NI employees only).

## Requesting New Components and Features

Is Nimble missing a component that your team needs? Search the [issues list](https://github.com/ni/nimble/issues) to see if it's on our radar. If an issue exists already, comment with your use cases. If no issue exists yet, file a new one using the **Feature request** template.

## Filing Bugs

To report a bug with an existing component, file an issue using the **Bug report** template.

## Learning

- [Architecture](/docs/Architecture.md) - Architecture of the design system packages and monorepo

## Contributing

### Quick Start

From the `nimble` directory:

1. Make sure you have npm version 7+ installed by running `npm --version`. If you have npm version 6 or earlier, upgrade by running `npm install npm@latest -g`.
2. Run `npm install`
3. Run `npm run build`
4. Run `npm run storybook -w @ni/nimble-components` to view the components in Storybook

    **Note**: You will need to refresh your browser window to see style changes made in source.

Follow the instructions in [CONTRIBUTING.md](/CONTRIBUTING.md) to modify the design system.

## Component Status

<!--
NOTE: To update the component status:
    1. Update the value in the spreadsheet: https://nio365-my.sharepoint.com/:x:/g/personal/fred_visser_ni_com/Eb1_BLjOOI1IsvUWay5VdAwB_G0a20kOZeFHWzSsvIXUBw?e=aGNMTg
    2. Create a PR to update this README with the result in the spreadsheet
-->

| Components             | Design | Web Components     | Angular Integration | Blazor Integration |
|------------------------|--------|--------------------|---------------------|--------------------|
| Text Button | [XD](https://xd.adobe.com/view/8ce280ab-1559-4961-945c-182955c7780b-d9b1/screen/42001df1-2969-438e-b353-4327d7a15102) | [:white_check_mark: - SB](https://ni.github.io/nimble/storybook/?path=/docs/button--outline-button) | :white_check_mark: | :o: |
| Text and Icon Button | [XD](https://xd.adobe.com/view/8ce280ab-1559-4961-945c-182955c7780b-d9b1/screen/a378bcdb-5c4b-4298-b3b1-28d8b1a37af2) | [:white_check_mark: - SB](https://ni.github.io/nimble/storybook/?path=/docs/button--outline-button) | :white_check_mark: | :o: |
| Icon Button | [XD](https://xd.adobe.com/view/8ce280ab-1559-4961-945c-182955c7780b-d9b1/screen/d022d8af-22f4-4bf2-981c-1dc0c61afece) | [:white_check_mark: - SB](https://ni.github.io/nimble/storybook/?path=/docs/button--icon-ghost-button) | :white_check_mark: | :o: |
| Toggle Icon Button | [XD](https://xd.adobe.com/view/8ce280ab-1559-4961-945c-182955c7780b-d9b1/screen/d022d8af-22f4-4bf2-981c-1dc0c61afece) | [:white_check_mark: - SB](https://ni.github.io/nimble/storybook/?path=/story/toggle-button--icon-button) | :white_check_mark: | :o: |
| Split Icon Button | [XD](https://xd.adobe.com/view/8ce280ab-1559-4961-945c-182955c7780b-d9b1/screen/d022d8af-22f4-4bf2-981c-1dc0c61afece) | :o: | :o: | :o: |
| Icon Menu Button | [XD](https://xd.adobe.com/view/8ce280ab-1559-4961-945c-182955c7780b-d9b1/screen/d022d8af-22f4-4bf2-981c-1dc0c61afece) | :o: | :o: | :o: |
| Checkbox | [XD](https://xd.adobe.com/view/8ce280ab-1559-4961-945c-182955c7780b-d9b1/screen/3698340b-8162-4e5d-bf7a-20194612b3a7) | [:white_check_mark: - SB](https://ni.github.io/nimble/storybook/?path=/docs/checkbox--checkbox) | :white_check_mark: | :o: |
| Radio | [XD](https://xd.adobe.com/view/8ce280ab-1559-4961-945c-182955c7780b-d9b1/screen/3698340b-8162-4e5d-bf7a-20194612b3a7) | :o: | :o: | :o: |
| Toggle Switch | [XD](https://xd.adobe.com/view/8ce280ab-1559-4961-945c-182955c7780b-d9b1/screen/3698340b-8162-4e5d-bf7a-20194612b3a7) | :o: | :o: | :o: |
| Number Field | [XD](https://xd.adobe.com/view/8ce280ab-1559-4961-945c-182955c7780b-d9b1/screen/eaa9ee19-4411-4648-b19d-41f61f9a01cf) | [:arrows_counterclockwise: - SB](https://ni.github.io/nimble/storybook/?path=/docs/number-field--number-field) | :white_check_mark: | :o: |
| Text Field | [XD](https://xd.adobe.com/view/8ce280ab-1559-4961-945c-182955c7780b-d9b1/screen/842889a5-67ba-4350-91c1-55eee48f4fa2) | [:white_check_mark: - SB](https://ni.github.io/nimble/storybook/?path=/docs/text-field--underline-text-field) | :white_check_mark: | :o: |
| Text Area (Multiline) | [XD](https://xd.adobe.com/view/8ce280ab-1559-4961-945c-182955c7780b-d9b1/screen/7c146e4b-c7c9-4975-a158-10e6093c522d/) | [:white_check_mark: - SB](https://ni.github.io/nimble/storybook/?path=/docs/text-area--outline-text-area) | :o: | :o: |
| Search Field | [XD](https://xd.adobe.com/view/8ce280ab-1559-4961-945c-182955c7780b-d9b1/screen/842889a5-67ba-4350-91c1-55eee48f4fa2) | :o: | :o: | :o: |
| Dropdown (Select) | [XD](https://xd.adobe.com/view/8ce280ab-1559-4961-945c-182955c7780b-d9b1/screen/6ec70d21-9a59-40cd-a8f4-45cfeed9e01e) | [:white_check_mark: - SB](https://ni.github.io/nimble/storybook/?path=/docs/select--select) | :white_check_mark: | :o: |
| Combo box | [XD](https://xd.adobe.com/view/8ce280ab-1559-4961-945c-182955c7780b-d9b1/screen/bd6755d9-8fd2-4b97-9709-939ea20680ae) | :o: | :o: | :o: |
| Tabs | [XD](https://xd.adobe.com/view/8ce280ab-1559-4961-945c-182955c7780b-d9b1/screen/b2aa2c0c-03b7-4571-8e0d-de88baf0814b) | [:white_check_mark: - SB](https://ni.github.io/nimble/storybook/?path=/docs/tabs--tabs) | :white_check_mark: | :o: |
| Drawer | [XD](https://xd.adobe.com/view/8ce280ab-1559-4961-945c-182955c7780b-d9b1/screen/730cdeb8-a4b5-4dcc-9fe4-718a75da7aff) | [:white_check_mark: - SB](https://ni.github.io/nimble/storybook/?path=/docs/drawer--drawer) | :white_check_mark: | :o: |
| Menu | [XD](https://xd.adobe.com/view/8ce280ab-1559-4961-945c-182955c7780b-d9b1/screen/c098395e-30f8-4bd4-b8c5-394326b59919) | [:white_check_mark: - SB](https://ni.github.io/nimble/storybook/?path=/docs/menu--custom-menu) | :white_check_mark: | :o: |
| Banners | [XD](https://xd.adobe.com/view/8ce280ab-1559-4961-945c-182955c7780b-d9b1/screen/29c405f7-08ea-48b6-973f-546970b9dbab) | :o: | :o: | :o: |
| Icons | | [:arrows_counterclockwise: - SB](https://ni.github.io/nimble/storybook/?path=/docs/icons--component-icons) | :o: | :o: |
| Tree View | | [:white_check_mark: - SB](https://ni.github.io/nimble/storybook/?path=/docs/tree-view--tree-view) | :white_check_mark: | :o: |
