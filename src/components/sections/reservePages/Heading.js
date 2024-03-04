import HeroImage from  "../../../assets/food/food4.webp";

function Heading() {
    return (
        <header className="reserve-table">
            <img className="header-reserve" src={HeroImage} alt="Little Lemon Ingredients"></img>
            <div>
                <h1>Reserve a table</h1>
            </div>
        </header>
    );
}

export default Heading;