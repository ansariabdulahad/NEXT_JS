import Navbar from "../../../Component/Navbar/Navbar";
import Courses from "../../../Component/Courses/Courses";
import Layout from "../../../Component/Layout/Layout";

const Page = () => {
    const design = (
        <>
            <Layout>
                <Courses />
            </Layout>
        </>
    );
    return design;
}

export default Page;