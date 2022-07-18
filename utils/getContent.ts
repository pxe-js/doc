async function getContent(page: any[]) {
    if (!page)
        return 404;

    const url = page.join("/");

    try {
        return fetch(`/templates/${url}.md`).then(v => v.text());
    } catch (e) {
        return 404;
    } 
}

export default getContent;