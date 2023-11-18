'use client'

import { usePathname } from "next/navigation";
import Navbar from "../../../../Component/Navbar/Navbar";
import Layout from "../../../../Component/Layout/Layout";

const Page = () => {
    const pathname = usePathname();
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