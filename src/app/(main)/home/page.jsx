import { serverFetchAPI } from "@/lib/server-fetch";
import FeaturedClass from "@/components/Class/FeaturedClass";
import ClassCard from "@/components/Class/ClassCard";

export const metadata = {
    title: 'Home'
};

export default async function Home(){
    const fitnessClasses = await serverFetchAPI(`classes`);
    
    const randomClass = Math.floor( Math.random() * ( fitnessClasses?.length ) + 1)
    // console.log(randomClass)
    const fitnessClass = await serverFetchAPI(`classes/${ randomClass }`);

    return(
        <main className="main-spacing">
            <section >
                <FeaturedClass classInfo={ fitnessClass } key={ fitnessClass?.id } />
            </section>

            <section className="class-card-section">
                <h2>Classes for you</h2>
                <div className="class-card-container">
                    {
                        fitnessClasses?.map( ( fitnessClass ) => {
                            return (                   
                                <ClassCard classInfo={ fitnessClass } key={ fitnessClass?.id } />
                            )
                        } )
                    }
                </div>
            </section>
        </main>
    )
}