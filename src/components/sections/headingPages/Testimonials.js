import Carousel from './TestimonialCarousel';
import TestimonialCard from './CardInfo/TestimonialCard';

function Testimonials() {
    return (
        <section className='testimonials'>
            <article className='testimonials-topbar'>
                <h1>Testimonials</h1>
            </article>

            <section className='testimonials-cards'>
            <TestimonialCard name="Michal Nir" description="This is one of my favorite plave to have dinner."/>
            <TestimonialCard name="Oran Keret" description="The food is always fresh, I love to order in."/>
            <TestimonialCard name="Adam Lahav" description="Little Lemon is the plcace to go if you want great food."/>
            <TestimonialCard name="Ido Shachar" description="Great food, I cannot have a meal without the Lemon dessert."/>
            <TestimonialCard name="Liron Feldman" description="I love the athmosphere in the restaurant."/>
            <TestimonialCard name="Yoed Smol" description="Best place to come with friends and have a great food."/>
            <TestimonialCard name="Ron Winner" description="The shippment is fast and the food arrives fresh and hot."/>
            <TestimonialCard name="Kobi Lin" description="Service is always top nuch and the food is tasty."/>
            </section>

            <section className='testimonials-carousel'>
                <Carousel />
            </section>
        </section>
    );
}

export default Testimonials;