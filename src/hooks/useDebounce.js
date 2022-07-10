import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        console.log('handler 0');
        const handler = setTimeout(() => setDebouncedValue(value), delay);
        console.log('handler 1');
        return () => {
            console.log('handler 2');
            return clearTimeout(handler);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return debouncedValue;
}

export default useDebounce;
