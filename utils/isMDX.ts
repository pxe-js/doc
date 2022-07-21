import type { NextComponentType, NextPageContext } from "next";

function isMDX(Component: NextComponentType<NextPageContext, any, {}>) {
    return Component
        && (
            Component.toString() === "function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},b=Object.assign({},(0,e.ah)(),a.components).wrapper;return b?(0,d.jsx)(b,Object.assign({},a,{children:(0,d.jsx)(f,a)})):f(a)}"
            || Component.name === "MDXContent"
        );
}

export default isMDX;