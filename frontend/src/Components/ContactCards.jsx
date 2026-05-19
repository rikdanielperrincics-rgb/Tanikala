import ContactCard from "./ContactCard";

function ContactCards({ activeData }) {
    return (
        <div className="grid sm:grid-cols-2 gap-5">
            {activeData.map((item) => (
                <ContactCard key={item.name} item={item} />
            ))}
        </div>
    )
}

export default ContactCards
