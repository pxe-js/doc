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
import Link from 'next/link';
import { useEffect, useMemo } from 'react';

function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	const headProps = meta[router.asPath] ?? {};

	const isMarkdownPage = useMemo(() => isMDX(Component), [Component]);

	useEffect(() => {
		if (isMarkdownPage) 
			document.getElementById("markdown_page")?.scroll(0, 0);
	}, [isMarkdownPage, router]);

	// Markdown page render
	if (isMarkdownPage) {
		return <>
			<Head {...headProps} />
			<MDXProvider components={components}>
				<div className={mdStyles.wrapper} >
					<div id="markdown_page" className={mdStyles.markdownWrapper}>
						<Component {...pageProps} />
						<div className={mdStyles.links}>
							<div>{headProps.prev && <Link href={headProps.prev}>Previous</Link>}</div>
							<div>{headProps.next && <Link href={headProps.next}>Next</Link>}</div>
						</div>
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
