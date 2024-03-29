import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

const fetcher = async (url) => {

  const response = await fetch(url)

  if (!response.ok) {
    const error = new Error('An error occurred while fetching the data.')
    // Attach extra info to the error object.
    error.info = await response.json()
    error.status = response.status
    throw error
  } else {
    return response.json()
  }
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
