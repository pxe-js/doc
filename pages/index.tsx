import { Button, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react';
import type { GetStaticProps, NextPage } from 'next';
import { colorScheme, color, contentInCenter } from '../utils/constants';
import Image from "next/image";
import styles from "../styles/pages/Home.module.scss";
import arrow from "../assets/arrow.svg";
import Navbar from '../components/Navbar';
import Background from '../components/Background';

const Home: NextPage = () => {
	return <>
		<Navbar />
		<Stack {...contentInCenter} className={styles.wrapper}>
			<Background />
			<Stack {...contentInCenter} className={styles.texts}>
				<Heading color={color}>PXE</Heading>
				<Text>A web framework for Node.js</Text>
			</Stack>
			<Flex className={styles.buttons}>
				<Link href="/docs/getting-started">
					<Button colorScheme={colorScheme} size="lg">Get Started</Button>
				</Link>
				<Link href="/docs">
					<Button 
						colorScheme={colorScheme} 
						size="lg" 
						variant="ghost" 
						className={styles.goToDocs}
					>
						<Text>Go to Docs</Text>
						<Image src={arrow} alt="arrow" />
					</Button>
				</Link>
			</Flex>
		</Stack>
	</>;
};

export default Home;