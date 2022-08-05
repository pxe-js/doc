export interface PagesMetadata { 
    [path: string]: { 
        title: string, 
        description: string,
        next?: string,
        prev?: string,
        isMarkdown: boolean;
    }; 
}

const pages: PagesMetadata = {
    "/": {
        title: "PXE.js: A web framework",
        description: "A web framework",
        isMarkdown: false,
    },
    "/docs": {
        title: "About the docs",
        description: "Contents and changelogs",
        isMarkdown: true,
    },
    "/docs/getting-started": {
        title: "Getting started",
        description: "Starting writing web applications with PXE.js",
        next: "/docs",
        isMarkdown: true,
    },
    "/docs/basic-concepts": {
        title: "Basic concepts",
        description: "PXE.js basic concepts",
        next: "/docs/server",
        isMarkdown: true,
    },
    "/docs/server": {
        title: "@pxe/server",
        description: "The server module of PXE.js",
        prev: "/docs",
        next: "/docs/router",
        isMarkdown: true,
    },
    "/docs/router": {
        title: "@pxe/router",
        description: "The router module of PXE.js",
        prev: "/docs/server",
        next: "/docs/cors",
        isMarkdown: true,
    },
    "/docs/cors": {
        title: "@pxe/cors",
        description: "PXE.js module to handle Cross-origin resource sharing",
        prev: "/docs/router",
        isMarkdown: true,
    }
};

export default pages;