export const typography = {
    display: {
        hero: "font-display text-3xl sm:text-4xl md:text-6xl font-medium leading-tight",

        section: "font-display text-[64px] font-bold leading-tight",

        subtitle: "font-display text-[40px] font-bold leading-tight",
    },

    body: {
        regular: "font-body text-base md:text-2xl leading-relaxed",
    },

    ui: {
        navigation: "font-ui text-[32px] font-bold",

        button: "font-ui text-[32px] font-bold",
    },
};

export type DisplayVariant = keyof typeof typography.display;
export type BodyVariant = keyof typeof typography.body;
export type UIVariant = keyof typeof typography.ui;