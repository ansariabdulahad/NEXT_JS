import Image from "next/image";
import Layout from "../../Component/Layout/Layout";

const Page = () => {
  const design = (
    <>
      <Layout>
        <Image src="/images/bird.jpg" width={900} height={400} />
      </Layout>
    </>
  );
  return design;
}

export default Page;