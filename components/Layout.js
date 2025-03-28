import MainNav from "./MainNav";
import Footer from "./Footer";

export default function Layout(props) {
    return (
        <>
            <MainNav/>
                {props.children}
        </>
    );
    
}