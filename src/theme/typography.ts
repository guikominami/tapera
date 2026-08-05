export const typography = {
    display: {
        hero: "font-display text-3xl sm:text-4xl md:text-6xl font-medium leading-tight",

        section: "font-display text-6xl font-bold leading-[1.05]",

        subtitle: "font-display text-2xl leading-tight",

        services: "font-display text-5xl font-bold leading-[1.05]",

        card: "font-display text-4xl font-bold leading-[1.05]",

        team: "font-display text-3xl font-bold leading-[1.05]",

    },
    ui: {
        navigation: "font-ui md:text-xl font-bold",

        button: "font-ui md:text-xl font-bold",
    },
    text: {
        body: "font-body text-xl font-normal leading-8",
        highlight: "font-body text-2xl font-bold leading-relaxed",
        footer: "font-display md:text-4xl font-bold",
        team: "font-display md:text-2xl font-bold",
    }
};

export type DisplayVariant = keyof typeof typography.display;
export type UIVariant = keyof typeof typography.ui;
export type TextVariant = keyof typeof typography.text;