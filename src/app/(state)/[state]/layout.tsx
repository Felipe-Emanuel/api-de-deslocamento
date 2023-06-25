"use client";
import { usePageStateContext } from "../../data/hooks/usePageStateContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { pageState } = usePageStateContext();
  return (
    <>
      <title>
        {pageState ? `Api-Deslocamento | ${pageState}` : 'Api-Deslocamento'}
      </title>
      <main>
        {children}
      </main>
    </>
  );
}
