import Image from "next/image";
import SignUpForm from "../../components/organisms/SignUpForm";
import Link from "next/link";

export default function SignUp() {
    return (
        <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
            <div className="container mx-auto">
                <form action="">
                    <div className="pb-50">
                        <Link className="navbar-brand" href="/">
                            <Image src="/icon/logo.svg" height={60} width={60} alt="logo" />
                        </Link>
                    </div>
                    <SignUpForm />
                </form>
            </div>
        </section>
    )
}
