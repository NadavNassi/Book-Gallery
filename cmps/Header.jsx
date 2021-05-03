const { NavLink, withRouter } = ReactRouterDOM

export function AppHeader() {
    return(
        <header>
            <div className="header-contant">
                <div className="logo">Book Gallery</div>
                <ul className='clean-list'>
                    <li className="nav-item"><NavLink exact to='/'>Home</NavLink></li>
                    <li className="nav-item"><NavLink exact to='/book'>Books Gallery</NavLink></li>
                </ul>
            </div>
        </header>
    )
}