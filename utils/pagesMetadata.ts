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
        title: "Introduction",
        description: "PXE.js introduction",
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
};

export default pages;