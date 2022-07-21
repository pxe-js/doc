import { MDXComponents } from "mdx/types";
import { toH } from "hast-to-hyperscript";
// Import all languages
import "lowlight/lib/all";
import { createElement } from "react";
import { lowlight } from "lowlight/lib/all";

const components: MDXComponents = {
    code(props) {
        const match = /language-(\w+)/.exec(props?.className || '');
        if (!match || !match[1]) 
            return <code {...props} />

        return toH(
            createElement, 
            lowlight.highlight(
                match[1], 
                props.children?.toString() || "",
            )
        );
    }
};

export default components;