'use client'

import { useParams, usePathname, useRouter } from "next/navigation";
import Layout from "../../../../../Component/Layout/Layout";

const Page = () => {
    const pathname = usePathname();
    const params = useParams();
    const router = useRouter();

    const path = params.syllabus;

    if (path && path.length > 3) {
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