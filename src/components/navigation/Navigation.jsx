import './Navigation.css';

export default function () {
    return (
        <nav id="my-nav" className="d-flex justify-content-center py-3">
            <ul className="nav nav-underline">
                <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
                <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
                <li className="nav-item"><a href="#" className="nav-link">About</a></li>
            </ul>
        </nav>
    )
}