'use client'

import { useSearch } from "@/hook/useSearch";
import ClassCard from "../Class/ClassCard";
import SearchInput from "@/components/Search/SearchInput";

export default function Search({fitnessClasses}){

    const { searchQuery, setSearchQuery, searchResults } = useSearch(fitnessClasses)

    const noResultsMessage = searchQuery.length >= 1 && searchResults.length === 0 ? (
        <div>Your search did not give any results. <br /> Try to search for something else.</div>
    ) : null;
    
    const searchResultsList = searchResults.length > 0 ? (
        searchResults.map((fitnessClass) => (
            <ClassCard classInfo={fitnessClass} key={fitnessClass?.id} />
        ))
    ) : null;
    
    return (
        <>
            <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            {noResultsMessage || searchResultsList}
        </>
    )
}

//Overstående kode er fra en af mine tidligere opgaver.