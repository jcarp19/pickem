import AccountDetail from "./AccountDetail";
import NavBar from "./NavBar";

export default function Header() {
    return (
        <div>
            <AccountDetail />
            <div>
                <h2>App Logo</h2>
            </div>
            <NavBar /> 
        </div>
    )
}