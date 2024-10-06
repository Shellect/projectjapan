
import Header from '../components/header/Header.jsx';
import Gallery from "../components/gallery/Gallery.jsx";
import About_us from "../components/About_us/About_us.jsx";
import Contacts from "../components/Contacts/contacts.jsx";

export default function Page() {
    return (
        <div>
            <Header></Header>
            <Gallery/>
            <About_us></About_us>
            <Contacts />
        </div>
    )
}