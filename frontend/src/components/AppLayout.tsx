import React from 'react'
import Link from 'next/link'

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        <header className='app-header'>
            <div className='inner'>
                <div className='header-left header-item'>
                    <h1>
                        <Link href="/">LOGO</Link>
                    </h1>
                </div>
                <ul className='header-center header-item'>
                    <li>
                        <Link href='/home'>고민 상담 게시판</Link>
                    </li>
                </ul>
                <ul className='header-right header-item'>
                    <li>
                        <Link href='/signin'>로그인</Link>
                    </li>
                    <li>
                        <Link href='/signup'>회원가입</Link>
                    </li>
                </ul>
            </div>
        </header>
        <div>
            {children}
        </div>
        <footer>
            
        </footer>
    </>
  )
}

export default AppLayout