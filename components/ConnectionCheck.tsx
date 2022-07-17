import { useToast } from "@chakra-ui/react";
import { useCallback, useEffect } from "react";

function ConnectionCheck() {
    const toast = useToast();

    const checkStatus = useCallback((...args: any[]) => {
        if (args[0] === true && navigator.onLine) 
            return;

        toast({
            title: navigator.onLine ? "Online" : "Offline",
            description: navigator.onLine ? "You're back online!" : "You're offline! Please check your connection!",
            status: navigator.onLine ? "success" : "error",
            duration: 4000,
            isClosable: true,
        });
    }, [toast]);

    useEffect(() => {
        checkStatus(true);

        window.addEventListener("online", checkStatus);
        window.addEventListener("offline", checkStatus);

        return () => {
            window.removeEventListener("online", checkStatus);
            window.removeEventListener("offline", checkStatus);
        }
    }, [checkStatus]);

    return <></>;
}

export default ConnectionCheck;