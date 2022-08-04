function HLink({ content, type }: { content: string, type: string }) {
    const id = content.toLowerCase().replaceAll(" ", "-");

    if (type.length === 1)
        return <h1 id={id}>{content}</h1>;

    if (type.length === 2)
        return <h2 id={id}>{content}</h2>;

    if (type.length === 3)
        return <h3 id={id}>{content}</h3>;

    if (type.length === 4)
        return <h4 id={id}>{content}</h4>;

    if (type.length === 5)
        return <h5 id={id}>{content}</h5>;

    return <h6 id={id}>{content}</h6>;
}

export default HLink;