import { Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import type { GetStaticProps, NextPage } from 'next';
import { colorScheme, color, contentInCenter } from '../utils/constants';
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import arrow from "../assets/arrow.svg";
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
	return <>
		<Navbar />
		<Stack {...contentInCenter} className={styles.wrapper} direction="column">
			<Stack {...contentInCenter} className={styles.texts}>
				<Heading color={color}>PXE</Heading>
				<Text fontWeight={200}>A web framework for Node.js</Text>
			</Stack>
			<Flex className={styles.buttons}>
				<Button colorScheme={colorScheme}>Get Started</Button>
				<Button colorScheme={colorScheme} variant="ghost" className={styles.goToDocs}>
					<Text>Go to Docs</Text>
					<Image src={arrow} alt="arrow" />
				</Button>
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