export interface PagesMetadata { 
    [path: string]: { 
        title: string, 
        description: string 
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
    },
    "/docs/server": {
        title: "@pxe/server",
        description: "The server module of PXE.js",
    }
};

export default pages;