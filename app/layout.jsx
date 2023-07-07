import Nav from '@components/Nav'
import Provider from '@components/Provider'
import '@styles/global.css'

export const metadata = {
  title: 'Duy next app',
  description: 'This is my first next app',
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body className="div">
        <Provider>
          <div className='main'>
            <div className='gradient'/>
          </div>

          <main className='app'>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout