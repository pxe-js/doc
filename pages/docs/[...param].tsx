import { NextPage } from "next";
import { useRouter } from "next/router";
import Error from "next/error";

import ReactMarkdown from "react-markdown";
import Navbar from "../../components/Navbar";
import { Prism } from 'react-syntax-highlighter';
import getContent from "../../utils/getContent";
import remarkGfm from 'remark-gfm';

import { useEffect, useState } from "react";

import styles from "../../styles/Docs.module.scss";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Background from "../../components/Background";
import { Box, Stack } from "@chakra-ui/react";

const Page: NextPage = () => {
    const { param } = useRouter().query;

    const [content, setContent] = useState<string | number>();

    useEffect(() => {
        getContent(param as any[]).then(setContent);
    }, [param]);

    if (!content)
        return <></>;

    return typeof content === "number"
        ? <Error statusCode={content} />
        : <>
            <Navbar />
            <Background noDefault={true} />
            <Stack className={styles.wrapper}>
                <ReactMarkdown
                    className={styles.markdown}
                    remarkPlugins={[remarkGfm]}
                    components={{
                        code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || '')
                            return !inline && match
                                ? <Prism
                                    // @ts-ignore
                                    style={vscDarkPlus}
                                    language={match[1]}
                                    PreTag="div"
                                    {...props}
                                >
                                    {String(children).replace(/\n$/, '')}
                                </Prism>
                                : <code className={className} {...props}>
                                    {children}
                                </code>;
                        }
                    }}
                >
                    {content}
                </ReactMarkdown>
            </Stack>
        </>;
}

export default Page;