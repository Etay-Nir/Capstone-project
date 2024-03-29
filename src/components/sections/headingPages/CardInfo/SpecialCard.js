import {Link} from 'react-router-dom';

function SpecialCard({ className = '', ...props }) {
    return (
        <article className={`menu-card ${className}`}>
            <img src={props.image} alt="Special Menu"></img>
            <section className="menu-card-content">
                <h1>{props.name}</h1>
                <h3>{props.price}</h3>
                <p>{props.description}</p>
                <Link className="special-button" to="/order">Order for Delivery</Link>
            </section>
        </article>
    );
}

export default SpecialCard;