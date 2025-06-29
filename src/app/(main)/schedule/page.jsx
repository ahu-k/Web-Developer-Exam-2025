import { cookies } from "next/headers";
import PageHeading from "@/components/PageHeading";
import ScheduleEntry from "@/components/ScheduleEntry";

export const metadata = {
    title: 'Schedule',
};

export default async function Schedule(){

    const cookieStore = await cookies();
    const uid = await cookieStore.get('trainer_uid')?.value
    const token = await cookieStore.get('trainer_token')?.value

    const userClasses = (await gerUserClasses())
    
    async function gerUserClasses(){
        try {
            const response = await fetch(`http://localhost:4000/api/v1/users/${ uid }`, {
                "method": "GET",
                "headers": {
                    "content-type": "application/json",
                    "Authorization": `Bearer ${ token }`
                }
            })

            if (!response.ok) {
                const error = await response.text();
                throw new Error(`Server error: ${response.status} ${response.statusText}\n${error}`);
            }

            const user = await response.json()
            const userClasses = await user?.classes
            // console.log("user classes", userClasses) //logging only the classes
            return await  userClasses
        } catch (error) {
            throw new Error(`Error while fetching user classes:\n${ error }`)
        }
    }

    return(
        <main className="main-spacing">
            <PageHeading text = "My Schedule"/>
            {userClasses?.className}
            {
                userClasses && userClasses.length > 0 ? (
                    userClasses.map((fitnessClass) => (
                        <ScheduleEntry classInfo={fitnessClass} key={fitnessClass?.id} />
                    ))
                ) : (
                    <p>Nothing is on the schedule</p>
                )
            }
        </main>
    )
}