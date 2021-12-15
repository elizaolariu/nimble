# Button & Anchor

## Overview

The menu-button represents a logical connection between a button and an openable menu.  This allows for stronger ARIA semantics than using a normal button to open a menu.

### Use Cases
- Creating an optional or hidden menu for application interaction 

### Non-goals
- Creating a static menu
- Creating a navigation menu of links
  
### Features
- Sets appropriate ARIA properties on the associated button and menu, such as aria-haspopup and aria-expanded
- Manages focus and keyboard navigation between the button and menu
- Manages menu visibility state and dismiss behavior 

### Risks and Challenges



One major driver for requesting this component is the dismiss behavior, closing a menu when the user clicks elsewhere in the page.  However, this may not be the most natural place to implement that.  It could potentially be in its own component, i.e. [MUI ClickAwayListener](https://mui.com/api/click-away-listener/).  It could also be included in the menu component itself.

### Prior Art/Examples

- [Angular Material - menu](https://material.angular.io/components/menu/overview)
- [Material Design - dropdown menu](https://material.io/components/menus#dropdown-menu)
- [ReachUI - menu-button](https://reach.tech/menu-button/)
- [Atlassian - dropdown menu](https://atlaskit.atlassian.com/packages/core/dropdown-menu)
- [Inclusive Components - menu buttons]()https://inclusive-components.design/menus-menu-buttons/
- [MUI - ClickAwayListener](https://mui.com/api/click-away-listener/).

---

## Design

### API

### Accessibility

The menu-button should align to the interaction model provided by the [W3C](https://w3c.github.io/aria-practices/#menubutton)

