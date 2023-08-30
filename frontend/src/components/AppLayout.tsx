import React from 'react'
import Link from 'next/link'

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        <header className='app-header'>
            <div className='inner'>
                <div className='logo-area'>
                
                </div>
                <nav className='menu'>
                    <ul className='horizontal'>
                        <li>
                            <Link href='/home'>홈</Link>
                        </li>
                    </ul>
                </nav>
                <ul className='horizontal'>
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