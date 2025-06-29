import { LuSearch } from "react-icons/lu";

import "./search-input-style.scss"

export default function SearchInput({
    searchQuery,
    setSearchQuery
}){
    return(
        <div className="search-form">
            <LuSearch 
                size={25}
            />
            <input
                type="search"
                name="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search classes"
            />
        </div>
    )
}

//Overstående kode er fra en af mine tidligere opgaver.