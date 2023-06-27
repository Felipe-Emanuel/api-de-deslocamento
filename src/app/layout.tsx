import "./styles/globals.scss";
import { ToastContainer } from "react-toastify";
import { Providers } from "./Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
