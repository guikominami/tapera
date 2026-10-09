export const typography = {
    display: {
        hero: "font-display text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium leading-tight",

        section: "font-display text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-[1.05]",

        subtitle: "font-display text-2xl leading-tight",

        services: "font-display text-5xl font-bold leading-[1.05]",

        card: "font-display text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl font-bold leading-[1.05]",

        orgs: "font-display text-lg lg:text-4xl font-bold leading-[1.05]",

        team: "font-display text-3xl font-bold leading-[1.05]",

    },
    ui: {
        navigation: "font-ui md:text-xl font-bold",

        button: "font-ui md:text-xl font-bold",
    },
    text: {
        body: "font-body text-base xl:text-xl font-normal leading-relaxed md:leading-6.5",
        minicard: "font-body text-base lg:text-[0.9rem] xl:text-lg 2xl:text-xl font-normal leading-relaxed lg:leading-4.5 xl:leading-5.5 2xl:leading-7",
        highlight: "font-body text-base sm:text-md md:text-lg xl:text-xl font-bold leading-relaxed",
        footer: "font-display text-md md:text-lg xl:text-2xl 2xl:text-3xl font-bold",
        team: "font-body text-lg lg:text-xl xl:text-2xl md:font-bold",
    }
};

export type DisplayVariant = keyof typeof typography.display;
export type UIVariant = keyof typeof typography.ui;
export type TextVariant = keyof typeof typography.text;