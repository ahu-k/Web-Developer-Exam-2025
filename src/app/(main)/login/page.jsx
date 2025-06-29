
import Link from "next/link";
import PageHeading from "@/components/PageHeading";
import LoginForm from "@/components/Forms/LoginForm";

import "@/components/Forms/form-style.scss"

export const metadata = {
    title: 'Login',
};

export default function Login(){
    return(
        <main className="main-spacing">
            <section>
                <PageHeading text="Log in"/>
                <LoginForm />
                <p className="form-caption">Don't have an account? <Link href='/signup'>Sign up</Link></p>
            </section>
        </main>
    )
}