import type { AppProps } from 'next/app';

import { MDXProvider } from '@mdx-js/react';
import { ChakraProvider } from '@chakra-ui/react';

import ConnectionCheck from '../components/ConnectionCheck';
import ColorMode from '../components/ColorMode';

// App style, markdown style
import appStyles from '../styles/App.module.scss';
import mdStyles from '../styles/Markdown.module.scss';

// Code style and global style
import "../styles/components/Code.scss";
import "../styles/globals.scss";

import { useRouter } from 'next/router';
import Head from '../components/Head';

import meta from '../utils/pagesMetadata';
import components from '../utils/mdxComponent';
import isMDX from '../utils/isMDX';

function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const headProps = meta[router.asPath] ?? {};

	// Markdown page
	if (isMDX(Component)) {
		return <>
			<Head {...headProps} />
			<MDXProvider components={components}>
				<div className={mdStyles.wrapper} >
					<div id="markdown_page" className={mdStyles.markdownWrapper}>
						<Component {...pageProps} />
					</div>
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
