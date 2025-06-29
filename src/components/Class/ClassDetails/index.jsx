import Image from "next/image";
import { cookies } from 'next/headers';
import ClassSignupButton from "@/components/Buttons/ClassSignupButton";
import ClassLeaveButton from "@/components/Buttons/ClassLeaveButton";

import "./carddetails-style.scss"

export default async function ClassDetails({ classInfo }){
    
    const cookieStore = await cookies();
    const userId = (cookieStore.get("trainer_uid"))?.value
    const userToken = (cookieStore.get("trainer_token"))?.value

    const isSignedUp = (await classInfo?.users)?.filter( ( item ) => {
        return String(item.id) === String(userId) 
    })?.length > 0;
    // console.log( userId)

    return(
        <>
            <header className="class-header">
                <Image
                    alt= { classInfo?.className }
                    src={ classInfo?.asset?.url }
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                        zIndex: "-2",
                    }}
                />
                <h1>{ classInfo?.className }</h1>
                {
                    userId !== undefined || null ? (
                        isSignedUp === false ? (
                            <ClassSignupButton text={'Sign Up'} userId={userId} userToken={userToken} classId={classInfo?.id} />
                        ) : (
                            <ClassLeaveButton text={'Leave'} userId={userId} userToken={userToken} classId={classInfo?.id} />
                        )
                    ) : (
                        null
                    )
                } 
            </header>

            <section className="class-details">
                <h2>Schedule</h2>
                <div>
                    <p>{ classInfo?.classDay }</p>
                    <p>{ classInfo?.classTime }</p>
                </div>
                <p>{ classInfo?.classDescription }</p> 
            </section>
        </>
    )
}