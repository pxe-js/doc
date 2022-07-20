import { MDXComponents } from "mdx/types";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const components: MDXComponents = {
    code(props) {
        const match = /language-(\w+)/.exec(props?.className || '');
        if (!match || !match[1]) 
            return <code {...props} />

        return <SyntaxHighlighter language={match[1]} style={vs2015}>
            {props.children?.toString() ?? ""}
        </SyntaxHighlighter>
    }
};

export default components;