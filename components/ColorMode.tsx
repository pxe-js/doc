import { useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";

function ColorMode({ initMode, children = <></> }: { initMode: "light" | "dark", children?: React.ReactNode }) {
    const { colorMode, setColorMode } = useColorMode();

    useEffect(() => {
        if (colorMode !== initMode)
            setColorMode(initMode);
    }, [colorMode, setColorMode, initMode]); 

    return <>{children}</>;
}

export default ColorMode;