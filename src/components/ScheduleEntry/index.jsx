import Link from "next/link";

import "./schedule-entry-style.scss"

export default function ScheduleEntry({ classInfo }){

    return(
        <Link href={"/class/" + classInfo.id} >
            <article className="schedule-entry-container">
                <div>
                    <p>{ classInfo?.classDay }</p> 
                    <p>{ classInfo?.classTime }</p>
                </div>
                <h2>{ classInfo?.className }</h2>
            </article>
        </Link>
    )
}