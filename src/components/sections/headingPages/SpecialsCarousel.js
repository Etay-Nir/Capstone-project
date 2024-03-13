import React from "react";
import { Carousel } from 'react-responsive-carousel';
import GreekSalad from '../../../assets/food/greek-salad.jpg';
import Bruschetta from '../../../assets/food/bruschetta.jpeg';
import LemonDessert from '../../../assets/food//lemon-dessert.jpg';
import SpecialCard from './CardInfo/SpecialCard';

function CaruselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} interval={5000} showStatus={false}>
            <SpecialCard image={GreekSalad} name="Greek Salad" price="$12.99" description="Feta cheese, tomato, lettuce"/>
            <SpecialCard image={Bruschetta} name="Bruschetta" price="$9.99" description="Bread, mango, green onions"/>
            <SpecialCard image={LemonDessert} name="Lemon Dessert" price="$7.99" description="Lemon tart, vanilla icing"/>
        </Carousel>
    );
}

export default CaruselPage;