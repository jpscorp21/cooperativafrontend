import { useDebounce } from "ahooks";
import React, { useState } from "react";

const useSearchText = (wait = 350) => {
    const [searchText, setSearchText] = useState<string>('');
    const searchQuery = useDebounce(searchText, { wait });

    return [searchQuery, setSearchText] as [string, React.SetStateAction<any>];
}

export default useSearchText;