import HeroImage from "../../../assets/food/food4.webp";

function Login() {
    return (
        <header className="reserve-table">
            <img
                className="header-reserve"
                src={HeroImage}
                alt="Little Lemone Ingredients"
            ></img>
            <div className="reserve-header-text">
                <h1>Login</h1>
            </div>
        </header>
    );
}

export default Login;