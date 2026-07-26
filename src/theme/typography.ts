export const typography = {
    display: {
        hero: "font-display text-3xl sm:text-4xl md:text-6xl font-medium leading-tight",

        section: "font-display text-[64px] font-bold leading-tight",

        subtitle: "font-display md:text-2xl leading-tight",
    },

    body: {
        regular: "font-body md:text-2xl leading-relaxed",
    },

    ui: {
        navigation: "font-ui md:text-xl font-bold",

        button: "font-ui md:text-xl font-bold",
    },
    text: {
        body: "font-body text-[20px] font-normal leading-relaxed text-primary",
        highlight: "font-body text-[20px] font-bold leading-relaxed text-primary",

    }
};

export type DisplayVariant = keyof typeof typography.display;
export type BodyVariant = keyof typeof typography.body;
export type UIVariant = keyof typeof typography.ui;
export type TextVariant = keyof typeof typography.text;