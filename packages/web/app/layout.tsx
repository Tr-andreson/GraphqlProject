"use client"
import { client } from "lib/urql.config"
import "styles/tailwind.css"
import { Provider } from "urql"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider value={client}>
          {children}
        </Provider>
      </body>
    </html>
  )
}
