import { Button, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react';
import type { GetStaticProps, NextPage } from 'next';
import { colorScheme, color, contentInCenter } from '../utils/constants';
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import arrow from "../assets/arrow.svg";
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
	return <>
		<Navbar />
		<Stack {...contentInCenter} className={styles.wrapper}>
			<Flex className={styles.background}></Flex>
			<Stack {...contentInCenter} className={styles.texts}>
				<Heading color={color} fontWeight={800} fontSize="50px">PXE</Heading>
				<Text fontWeight={100} fontSize="20px">A web framework for Node.js</Text>
			</Stack>
			<Flex className={styles.buttons}>
				<Link href="/begin">
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

export const getStaticProps: GetStaticProps = () => ({
	props: {
		head: {
			title: "PXE.js: A web framework",
			description: "A web framework"
		}
	}
});

export default Home;