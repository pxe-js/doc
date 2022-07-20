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
    "/docs/getting-started": {
        title: "Getting Started",
        description: "Start creating Node.js web servers with PXE.js"
    }
};

export default pages;