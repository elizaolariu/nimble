# Button & Anchor

## Overview

The menu-button represents a logical connection between a button and an openable menu, for the common use-case of an interaction menu in an application.  This allows for stronger ARIA semantics than using a normal button to open a menu.

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

Some of these features may be more appropriately implemented in other places.

For example, one major driver for requesting this component is the dismiss behavior, closing a menu when the user clicks elsewhere in the page.  This could potentially be in its own component, i.e. [MUI ClickAwayListener](https://mui.com/api/click-away-listener/).  It could also reasonably be included in the menu component itself.

This component also potentially duplicates a lot of the work done on the [select](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/select/select.spec.md) component.

### Prior Art/Examples

- [Angular Material - menu](https://material.angular.io/components/menu/overview)
- [Material Design - dropdown menu](https://material.io/components/menus#dropdown-menu)
- [ReachUI - menu button](https://reach.tech/menu-button/)
- [Atlassian - dropdown menu](https://atlaskit.atlassian.com/packages/core/dropdown-menu)
- [Ant Design - dropdown](https://ant.design/components/dropdown/)
- [Inclusive Components - menu buttons]()https://inclusive-components.design/menus-menu-buttons/
- [MUI - ClickAwayListener](https://mui.com/api/click-away-listener/).

---

## Design

### API

Potential ideas:

```
<menu-button menu="id">Button Content</menu-button>

<menu id="id">…</menu>
```

This option would essentially just introduce a new attribute on a button to associate it with a menu.
 
```
<menu-button>

    <div>Button Content</div>

    <menu slot="menu">…</menu>

</menu-button>
```
 
This option would add a new slot to a button to contain a menu to display when the button is clicked.  Default slot content would be displayed on the button.

```
<menu-button>

    <button>Button Content</button>

    <menu>…</menu>

</menu-button>
```

This option would simply create a container that would group the button and menu together.

### Accessibility

The menu-button should align to the interaction model provided by the [W3C](https://w3c.github.io/aria-practices/#menubutton)

