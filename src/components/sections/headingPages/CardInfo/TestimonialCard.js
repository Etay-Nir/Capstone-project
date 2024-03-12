import Star from '../../../../assets/star.png';

function TestimonialCard(props) {
    return (
        <article>
            <img src={Star} alt='delivery Icon'></img>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </article>
    );
}

export default TestimonialCard;