import Header from "next/head";

function Head(props: { title: string, description: string }) {
    return <Header>
        <meta name="viewport" content="width=device-width" />
        <title>{props?.title || "Document"}</title>
        <meta name="description" content={props?.description || "A page"} />
        <link rel="icon" href="/favicon.svg" />
    </Header>
};

export default Head;