import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Search } from 'react-bootstrap-icons';


const Navbar = () => {
    const navigate = useNavigate()
    const handleLoginClick=()=>{
        navigate('/login')
    }

    const search =(event)=>{
        if(event.key==="Enter"){
            let keyword = event.target.value
            navigate(`/?q=${keyword}`)
        }
    }

    const menu =[
        'Women',
        'Men',
        'Baby',
        'Kids',
        'Home'
    ]
  return (
    <nav className='navbar'>
        <div className='navbar__icon'>
            <div className='login-button' onClick={handleLoginClick}>
                <FontAwesomeIcon icon={faUser} />
                <div>로그인</div>
            </div>
        </div>
        <div className='logo-area'>
            <a href='/'>
                <img width={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1024px-H%26M-Logo.svg.png"/>
            </a>
        </div>
        <div className='menu-area'>
            <ul>
                {menu.map((menu,index)=>(
                    <li key={index}>{menu}</li>
                ))}
            </ul>
            <div className='search-area'>
                <FontAwesomeIcon icon={faSearch}/>
                <input type="text" onKeyDown={(event)=>search(event)}/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar