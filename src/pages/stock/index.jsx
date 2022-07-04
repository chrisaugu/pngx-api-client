import React from "react";
import { GetStaticProps } from 'next'
import Link from 'next/link'
import {Spacer, Button} from "@geist-ui/core";

import { sampleUserData } from '../../utils/sample-data'
import Layout from '../../components/Layout'

const WithStaticProps = ({ items }) => (
    <Layout title="Users List | Next.js + TypeScript Example">
        <Spacer h={5.3}/>
        <h1>Users List</h1>
        <p>
            Example fetching data from inside <code>getStaticProps()</code>.
        </p>
        <p>You are currently on: /stock</p>
        <ul>
            {
                items.map((item, i) => (
                    <li key={i}>{item.name}</li>
                ))
            }
        </ul>
        <p>
            <Button>
                <Link href="/">
                    <a>Go home</a>
                </Link>
            </Button>
        </p>
    </Layout>
)

export const getStaticProps = async () => {
    // Example for including static props in a Next.js function component page.
    // Don't forget to include the respective types for any props passed into
    // the component.
    const items = sampleUserData;
    return { props: { items } }
}

export default WithStaticProps;

// export async function getServerSideProps({ query }) {
//     const { username } = query;
//     const userDoc = await getUserWithUsername(username);
  
//     // If no user, short circuit to 404 page
//     if (!userDoc) {
//       return {
//         notFound: true,
//       };
//     }
//   }