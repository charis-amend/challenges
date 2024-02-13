import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
// import { useSWRConfig } from "swr"

const fetcher = async (url) => {
  const response = await fetch(url)
  if (!response.ok) {
    const error = new Error("There was an error whilst fetching. see _app.js")
    error.info = await response.json()
    error.status = response.status
    throw error
  } else {
    return response.json()
  }
}

// Global Mutate
// The recommended way to get the global mutator is to use the useSWRConfig hook:
// ✅ import { useSWRConfig } from "swr"

// ✅ function App() {
//   const { mutate } = useSWRConfig()
//   mutate(key, data, options)
// }

export default function App({ Component, pageProps }) {

  // const { mutate } = useSWRConfig()
  // mutate(key, data, options)

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
