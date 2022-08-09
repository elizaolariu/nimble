export const DrawerLocation = {
    left: 'left',
    right: 'right'
} as const;
export type DrawerLocation = typeof DrawerLocation[keyof typeof DrawerLocation];

export const DrawerDismissBehavior = {
    default: 'default',
    prevent: 'prevent',
    allow: 'allow'
} as const;
export type DrawerDismissBehavior = typeof DrawerDismissBehavior[keyof typeof DrawerDismissBehavior];
