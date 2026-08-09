import sectionDivider from "@/assets/decorations/transitions/section-divider.svg"

export default function SectionDivider() {

    return (
        <section
            className="
                relative
                h-[60px]
                w-full
                overflow-hidden
                bg-divider-light
                z-0
                -mt-16
                lg:-mt-30
                lg:h-[302px]
            "
        >
            <img
                src={sectionDivider}
                alt=""
                className="
                    absolute
                    left-1/2
                    top-0
                    h-[160px]
                    max-w-none
                    w-[100%]
                    -translate-x-1/2
                    -translate-y-[50px]

                    lg:top-22
                    lg:h-[302px]
                    lg:-translate-y-[90px]
                "
            />
        </section>
    );
}
