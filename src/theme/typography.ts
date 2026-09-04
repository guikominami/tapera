export const typography = {
    display: {
        hero: "font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight",

        section: "font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]",

        subtitle: "font-display text-2xl leading-tight",

        services: "font-display text-5xl font-bold leading-[1.05]",

        card: "font-display text-2xl lg:text-4xl font-bold leading-[1.05]",

        orgs: "font-display text-lg lg:text-4xl font-bold leading-[1.05]",

        team: "font-display text-3xl font-bold leading-[1.05]",

    },
    ui: {
        navigation: "font-ui md:text-xl font-bold",

        button: "font-ui md:text-xl font-bold",
    },
    text: {
        body: "font-body text-base sm:text-lg md:text-2xl font-normal leading-relaxed md:leading-6.5",
        highlight: "font-body text-base sm:text-lg md:text-xl font-bold leading-relaxed",
        footer: "font-display text-md md:text-2xl font-bold",
        team: "font-body text-lg md:text-2xl md:font-bold",
    }
};

export type DisplayVariant = keyof typeof typography.display;
export type UIVariant = keyof typeof typography.ui;
export type TextVariant = keyof typeof typography.text;