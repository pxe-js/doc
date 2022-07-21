import type { AppProps } from 'next/app';

import { MDXProvider } from '@mdx-js/react';
import { ChakraProvider } from '@chakra-ui/react';

import ConnectionCheck from '../components/ConnectionCheck';
import ColorMode from '../components/ColorMode';

// App style, markdown style
import appStyles from '../styles/App.module.scss';
import mdStyles from '../styles/Markdown.module.scss';

// Code style
import "../styles/components/Code.scss";

import { useRouter } from 'next/router';
import Head from '../components/Head';

import meta from '../utils/pagesMetadata';

import components from '../utils/mdxComponent';

function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const headProps = meta[router.asPath] ?? {};

	// Markdown page
	if (Component.name === "MDXContent") {
		return <>
			<Head {...headProps} />
			<MDXProvider components={components}>
				<div className={mdStyles.wrapper} id="markdown">
					<Component {...pageProps} />
				</div>
			</MDXProvider>
		</>;
	}

	// Normal page
	return <ChakraProvider>
		<Head {...headProps} />
		<ConnectionCheck />
		<ColorMode initMode="dark">
			<div className={appStyles.wrapper}>
				<Component {...pageProps} router={router} />
			</div>
		</ColorMode>
	</ChakraProvider>;
};

export default App;
