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
        next: "/docs/database",
        isMarkdown: true,
    },
    "/docs/database": {
        title: "@pxe/database",
        description: "A simple JSON database for PXE.js",
        prev: "/docs/cors",
        next: "/docs/utils",
        isMarkdown: true,
    },
    "/docs/utils": {
        title: "@pxe/utils",
        description: "Utilities for PXE.js",
        prev: "/docs/database",
        next: "/docs/csp",
        isMarkdown: true
    },
    "/docs/session": {
        title: "@pxe/session",
        description: "Session for PXE.js",
        prev: "/docs/utils",
        next: "/docs/csp",
        isMarkdown: true
    },
    "/docs/csp": {
        title: "@pxe/csp",
        description: "Content security policy middleware for PXE.js",
        prev: "/docs/utils",
        isMarkdown: true,
    }
};

export default pages;