import usePing from "@/hooks/usePing";
import { Dot } from "@geist-ui/core";

function ServerStatus() {
    // const status = usePing();
    const status = "success"

    const type = status == "success" ? "succcess" : 
                    status == "warning" ? "warning" : 
                        status == "error" ? "error" : "";

    return (
        <>
            <Dot type={"success"}>Server Status</Dot>
        </>
    )
}

export default ServerStatus;