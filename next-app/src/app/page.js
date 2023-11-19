'use client';

import Image from "next/image";
import Layout from "../../Component/Layout/Layout";
import useSWR from "swr";
import axios from "axios";
import Loader from "../../Component/Loader/Loader";

const Page = () => {

  const getData = async (url) => {
    try {
      const response = await axios({
        method: 'GET',
        url: url,
      });
      return response.data;
    } catch (error) {
      throw error.response;
    }
  }

  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', getData);

  if (!data && !error) {
    return <Loader />
  }
  if (error) {
    return <h1>Error occured</h1>
  }

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