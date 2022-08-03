# Nimble drawer re-work HDL
There are a number of issues that have come up related to the nimble-drawer:

- [Change drawer to use dialog element](https://github.com/ni/nimble/issues/592)
- [Drawer should not dismiss when clicking outside](https://github.com/ni/nimble/issues/636)
- [nimble-drawer with modal=false: Always consumes Escape key on webpage if drawer is open](https://github.com/ni/nimble/issues/234)
- [Drawer unexpected modal attribute boolean behavior](https://github.com/ni/nimble/issues/190)
- [Nimble Drawer should trap focus when opened modal](https://github.com/ni/nimble/issues/186)
- [Slide-outs have inconsistent dismiss behavior when clicking outside](https://dev.azure.com/ni/DevCentral/_queries/edit/2015838/)
- [Pressing ESC when two slide-outs are open closes the wrong one](https://dev.azure.com/ni/DevCentral/_queries/edit/2051165/)


Proposed behavior:
- Remove concept of [trapFocus](https://github.com/microsoft/fast/blob/8327524eaf8175c89c435275974243ab09f3afed/packages/web-components/fast-foundation/src/dialog/dialog.ts#L50). The drawer and the elements contained within it will be the only thing focusable if `modal` is set to `true`. The whole page will be focusable if `modal` is set to `false`.
- Closes when click off = `!modal && !prevent-dismiss`
- Closes with ESC = `!prevent-dismiss`
- Can interact with the page outside of the drawer = `!modal`

Example scenarios:
- SystemLink drawer
    - `modal`: true
    - `prevent-dismiss`: false
    - resulting behavior:
        - Does not close when you click off
        - Closes when you press ESC
        - Cannot interact with other items on the page
- xxxxSystemLink navigation pane (not pinned)
    - `modal`: false
    - `prevent-dismiss`: false
    - resulting behavior:
        - Closes when you click off
        - Closes when you press ESC
        - Can interact with other items on the page (but this cause the drawer to close)
- SystemLink navigation panel (pinned)
    - `modal`: false
    - `prevent-dismiss`: true
    - resulting behavior:
        - Does not close when you click off
        - Does not close when you press ESC
        - Can interact with other items on the page