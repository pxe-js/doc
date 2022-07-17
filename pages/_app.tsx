import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import ConnectionCheck from '../components/ConnectionCheck';
import ColorMode from '../components/ColorMode';

function App({ Component, pageProps }: AppProps) {
	return <ChakraProvider>
		<Head>
			<meta name="viewport" content="width=device-width" />
			<title>{pageProps?.head?.title || "Document"}</title>
			<meta name="description" content={pageProps?.head?.description || "A page"} />
			<link rel="icon" href="/favicon.svg" />
		</Head>
		<ConnectionCheck />
		<ColorMode initMode="dark">
			<Component {...pageProps} />
		</ColorMode>
	</ChakraProvider>;
};

export default App;
