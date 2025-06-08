import { useEffect, useState } from "react"

const useStatus=()=>{
    const[status,setStatus]=useState(navigator.onLine);
    
    useEffect(() => {
        const handleOnline = () => setStatus(true);
        const handleOffline = () => setStatus(false);

        // Register event listeners
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        // Clean up listeners on unmount
        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        
}
})
    return status;
}

export default useStatus