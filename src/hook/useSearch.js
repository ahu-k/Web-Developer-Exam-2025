'use client'

import { useEffect, useState } from "react";

export function useSearch( fitnessClasses ) {

    const [searchQuery, setSearchQuery] = useState(""); 
    const [searchResults, setSearchResults] = useState([]); 

    useEffect(() => {
        if (searchQuery?.length > 1) {
            const filteredClasses = fitnessClasses.filter(fitnessClass => {
                const filteredClassesByName = fitnessClass.className.toLowerCase().includes(searchQuery.toLowerCase());
                const filteredClassesByWeekday = fitnessClass.classDay.toLowerCase().includes(searchQuery.toLowerCase());
                const filteredClassesByDescription = fitnessClass.classDescription.toLowerCase().includes(searchQuery.toLowerCase());
                const filteredClassesByTrainer = fitnessClass.trainer['trainerName'].toLowerCase().includes(searchQuery.toLowerCase());
                return filteredClassesByName || filteredClassesByWeekday || filteredClassesByDescription || filteredClassesByTrainer;
            });
        setSearchResults(filteredClasses ); 
        } else {
        setSearchResults([]);
        }
    }, [searchQuery]); 

    return { searchQuery, setSearchQuery, searchResults };
}

//Overstående kode er fra en af mine tidligere opgaver.