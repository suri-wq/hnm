import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faBars } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({ authenticate, setAuthenticate }) => {

    let [width, setWidth] = useState(0)
    const navigate = useNavigate()
    // const handleLoginClick=()=>{
    //     navigate('/login')
    // }

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
        <div className="burger-menu hide">
            <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>
        <div className="side-menu" style={{ width: width }}>
            {/* 닫기 버튼 */}
            <button className="closebtn" onClick={() => setWidth(0)}>
                &times;
            </button>

            {/* 🔍 검색창 */}
            <div className="side-search-area">
                <FontAwesomeIcon icon={faSearch} />
                <input
                type="text"
                placeholder="검색"
                onKeyDown={(event) => {
                    if (event.key === "Enter") {
                    navigate(`/?q=${event.target.value}`);
                    setWidth(0); // 검색 후 메뉴 닫기
                    }
                }}
                />
            </div>

            {/* 메뉴 리스트 */}
            <div className="side-menu-list">
                {menu.map((menu, index) => (
                <p key={index}>{menu}</p>
                ))}
            </div>

            {/* 👤 로그인/로그아웃 */}
            <div className="side-login-button" onClick={() => {
                if (authenticate) {
                setAuthenticate(false);
                localStorage.removeItem("auth");
                } else {
                navigate("/login");
                }
                setWidth(0); // 클릭 후 메뉴 닫기
            }}>
                <FontAwesomeIcon icon={faUser} />
                <span>{authenticate ? "로그아웃" : "로그인"}</span>
            </div>
        </div>

        <div className='navbar__icon'>
            
            {authenticate?(
                <div className='login-button' onClick={()=>setAuthenticate(false)}>
                    <FontAwesomeIcon icon={faUser} />
                    <div>로그아웃</div>
                </div>
        ):(
                <div className='login-button' onClick={()=>navigate("/login")}>
                    <FontAwesomeIcon icon={faUser} />
                    <div>로그인</div>
                </div>
        )}    
            
        </div>
        <div className='logo-area'>
            <Link to='/'>
                <img width={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1024px-H%26M-Logo.svg.png"/>
            </Link>
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