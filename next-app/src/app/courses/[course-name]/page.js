'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Navbar from "../../../../Component/Navbar/Navbar";
import Layout from "../../../../Component/Layout/Layout";

const Page = () => {
    const pathname = usePathname();
    const router = useRouter();
    // const searchParams = useSearchParams();

    // const name = searchParams.get('name');
    // const price = searchParams.get('price');
    // const desc = searchParams.get('desc');

    if (pathname === '/courses/test') {
        router.push('/not-found');
        return false;
    }

    const design = (
        <>
            <Layout>
                {pathname}
                <h1>Welcome to the Syllabus !</h1>
            </Layout>
        </>
    );
    return design;
}

export default Page;