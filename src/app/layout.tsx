import './globals.scss'
import { StateContextProvider } from '../data/contexts/StateContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <StateContextProvider>
          {children}
        </StateContextProvider>
      </body>
    </html>
  )
}
