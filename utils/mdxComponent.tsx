import { MDXComponents } from "mdx/types";
// @ts-ignore
import Lowlight from "react-lowlight";
import "lowlight/lib/all";

const components: MDXComponents = {
    code(props) {
        const match = /language-(\w+)/.exec(props?.className || '');
        if (!match || !match[1]) 
            return <code {...props} />

        return <Lowlight language={match[1]} value={props.children?.toString() || ""} />
    }
};

export default components;