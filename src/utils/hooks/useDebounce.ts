import { useEffect, useState } from "react";

// Hook
const useDebounce = (value: any, delay = 250) => {
    
    const [debouncedValue, setDebouncedValue] = useState<any>(value);
    useEffect(
      () => {
        // Update debounced value after delay
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);
        
        return () => {
          clearTimeout(handler);
        };
      },
      [value, delay]
    );
    return debouncedValue;
}

export default useDebounce;