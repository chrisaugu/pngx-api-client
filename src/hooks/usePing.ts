import { useRect } from "@geist-ui/core"
import { useEffect, useRef } from "react"

const usePing = () => {
    const status = useRef("success");
    // "success" ? 
    //                 "succcess" : status == "warning" ? 
    //                 "warning" : status == "error" ? "error" : ""

    useEffect(() => {
        fetch('https://pngx-api.onrender.com/api')
        .then(res => status.current = "success")
        .catch(err => status.current = "error")

        return () => {
            status.current = "error";
        }
    });

    return status;
}

export default usePing;