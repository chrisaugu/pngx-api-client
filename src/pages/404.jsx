import React from "react";
import Head from 'next/head';
import NextLink from 'next/link';
import {
    Page,
    Button,
    Text,
    Link,
    Image,
    Display,
    Divider
} from '@geist-ui/core'

export default function Custom404() {
    return (
        <>
            <Head>
                <title>Page Not Found</title>
            </Head>

            <Page width={"800px"} dotBackdrop>
                <Page.Content>
                    <Text h2>404</Text>
                    <Text h2>Page Not Found</Text>

                    <Text>
                        Oopsie! It seems the page you&apos;re looking for isn&apos;t here. Please return home.
                    </Text>

                    <Button><NextLink href="/"><Link>Return home</Link></NextLink></Button>

                </Page.Content>

                <Page.Footer>

                    <Text><b>Disclaimer:</b> PNGX-API-Client is not an affiliate of PNGX.com. PNGX-API-Client is part of PNGX-API.</Text>

                    <Text>&copy; {new Date().getFullYear()}. Christian Augustyn</Text>

                </Page.Footer>
            </Page>
        </>
    )
}