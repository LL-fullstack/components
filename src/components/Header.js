
function Header(props) {
    return (
        <header>
            <div className='container flex'>
                <h1>{props.title}</h1>
                <nav className='nav-bar'>
                   {props.navList.map(function(listElement) {
                    return (
                        <li>{listElement}</li>
                    )
                   })}
                </nav>
            </div>
        </header>
    );
}

export default Header;