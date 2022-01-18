import { NavLink } from "react-router-dom";


export function AppHeader() {
    return (
        <header className='app-header'>
            <section className='container'>
                <h1 className='logo'>Mister-Bitcoin</h1>
                <nav>
                    <NavLink exact to='/'>Home</NavLink>
                    <NavLink to='/contact'>Contacts</NavLink>
                    <NavLink to='/charts'>Charts</NavLink>
                </nav>
            </section>
        </header>
    )
}
