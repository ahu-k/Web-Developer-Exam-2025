
import Link from "next/link";
import PageHeading from "@/components/PageHeading";
import SignupForm from "@/components/Forms/SignupForm";

import "@/components/Forms/form-style.scss"

export const metadata = {
    title: 'Signup',
};

export default function Signup(){
    return(
        <main className="main-spacing">
            <section>
                <PageHeading text = "Sign up"/>
                <SignupForm />
                <p className="form-caption">Already have an account? <Link href='/login'>Log In</Link></p>
            </section>
        </main>
    )
}