import './navbar.css'

export function NavBar() {
    return(       
        <>

       <header  className='navegacao'>
        <div className='nav-log'>
        <img src="./src/img/logo.png" alt="" />
        </div>

       <div className='nav-home'>
            <a href="">Home</a>
        </div>

        <div className='nav-link'>
            <ul>
                <li><a href="">Esportes</a></li>
                <li><a href="">Masculino</a></li>
                <li><a href="">Feminino</a></li>
                <li><a href="">Acessórios</a></li>
                <li><a href="">Equipamentos</a></li>               
            </ul>
        </div>

        <div className='nav-conta'>
            <a href="">Minha Conta</a>
        </div>
       </header>

        </>
    )
}