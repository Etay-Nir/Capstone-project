import Carousel from './SpecialsCarousel';
import GreekSalad from '../../../assets/food/greek-salad.jpg';
import Bruschetta from '../../../assets/food/bruschetta.jpeg';
import LemonDessert from '../../../assets/food/lemon-dessert.jpg';
import SpecialCard from './CardInfo/SpecialCard';

function Specials() {
    return (
        <section className='specials'>
            <article className='special-topbar'>
                <h1>This week's specials</h1>
                <a className='action-buttom' href={require('../../../assets/menu.webp')} target='_blank' rel='noreferrer'>Online Menu</a>
            </article>

            <section className='special-cards'>
                <SpecialCard image={GreekSalad} name="Greek Salad" price="$12.99" description="Refreshing salad, made with tomato, lettuce, feta cheese and olives."/>
                <SpecialCard image={Bruschetta} name="Bruschetta" price="$9.99" description="Toast bread, tomato, prosciutto and cheese."/>
                <SpecialCard image={LemonDessert} name="Lemon Dessert" price="$7.99" description="Our special take on lemon cheese cake."/>
            </section>

            <section className='special-carousel'>
                <Carousel />
            </section>
        </section>
    );
}

export default Specials;