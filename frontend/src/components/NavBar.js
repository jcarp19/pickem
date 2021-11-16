import { Routes, Route, Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <ul>
                <li><Link to="/">Picks</Link></li>
                <li><Link to="/weekly">Weekly</Link></li>
                <li><Link to="/overall">Overall</Link></li>
            </ul>
        </div>

    )
}