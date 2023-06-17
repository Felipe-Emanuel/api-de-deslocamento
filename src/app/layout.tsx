'use client';
import './globals.scss'
import { StateContextProvider } from '../data/contexts/StateContext'
import { Header } from '../components/Header'
import { PageStateContextProvider } from '../data/contexts/PageStateContext';
import { ToastContainer } from 'react-toastify';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
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
        pauseOnHover
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
