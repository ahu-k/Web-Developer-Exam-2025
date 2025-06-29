import { serverFetchAPI } from "@/lib/server-fetch";
import PageHeading from "@/components/PageHeading";
import Search from "@/components/Search";

export const metadata = {
    title: 'Search',
};

export default async function SearchPage(){
    const fitnessClasses = await serverFetchAPI(`classes`);
    
    return(
        <main className="main-spacing">
            <PageHeading text = "Search"/>
            <Search fitnessClasses={fitnessClasses}/>
        </main>
    )
}