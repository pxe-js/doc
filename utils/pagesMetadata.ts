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
    }
};

export default pages;