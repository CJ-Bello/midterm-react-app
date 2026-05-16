import './types/booking.ts'
import './StatusContainer.tsx'

function Card({title}) {
    return (
        <main>
            <section> {title}
                <article>Available Assets</article>
            </section>
            <section> {title}
                <article>Booking Engine</article>
            </section>
        </main>
    )
}



export default Card;