import Container from "@/components/ui/Container/Container";
import Quote from "./Quote";
import ContactInfo from "./ContactInfo";
import { contactSection } from "@/data/contact";

export default function Contact() {
    return (
        <section
            id="contact"
            className="bg-primary-light"
        >
            <Container className="py-20">
                <Quote
                    quotation={contactSection.quotation}
                    name={contactSection.name}
                />
                <ContactInfo
                    phrase={contactSection.phrase}
                    text={contactSection.text}
                />
            </Container >
        </section >
    )
}

