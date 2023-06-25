'use client';
import './styles/globals.scss'
import { Header } from './components/Header';
import { ToastContainer } from 'react-toastify';
import { StateContextProvider } from './data/contexts/StateContext';
import { PageStateContextProvider } from './data/contexts/PageStateContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pt-br">
       <title>Api-Deslocamento</title>
      <body>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="dark"
      />
        <StateContextProvider>
          <PageStateContextProvider>
            <Header />
            {children}
          </PageStateContextProvider>
        </StateContextProvider>
      </body>
    </html>
  )
}
