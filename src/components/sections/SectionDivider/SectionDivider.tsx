import sectionDivider from "@/assets/decorations/transitions/section-divider.svg"

export default function SectionDivider() {

    return (
        <section
            className="
                relative
                h-[302px]
                overflow-hidden
                bg-divider-light
                z-0
                -mt-60
            "
        >
            <img
                src={sectionDivider}
                alt=""
                className="
                    absolute
                    left-1/2
                    top-22
                    h-[302px]
                    max-w-none
                    -translate-x-1/2
                    -translate-y-[90px]
                "
            />
        </section>
    );
}
