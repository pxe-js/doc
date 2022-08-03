export interface PagesMetadata { 
    [path: string]: { 
        title: string, 
        description: string,
        next?: string,
        prev?: string,
    }; 
}

const pages: PagesMetadata = {
    "/": {
        title: "PXE.js: A web framework",
        description: "A web framework"
    },
    "/docs": {
        title: "About the docs",
        description: "Contents and changelogs"
    },
    "/docs/getting-started": {
        title: "Getting started",
        description: "Starting writing web applications with PXE.js",
        next: "/docs",
    },
    "/docs/basic-concepts": {
        title: "Basic concepts",
        description: "PXE.js basic concepts",
        next: "/docs/server",
    },
    "/docs/server": {
        title: "@pxe/server",
        description: "The server module of PXE.js",
        prev: "/docs",
        next: "/docs/router"
    },
    "/docs/router": {
        title: "@pxe/router",
        description: "The router module of PXE.js",
        prev: "/docs/server",
        next: "/docs/cors"
    },
    "/docs/cors": {
        title: "@pxe/cors",
        description: "PXE.js module to handle Cross-origin resource sharing",
        prev: "/docs/router"
    }
};

export default pages;