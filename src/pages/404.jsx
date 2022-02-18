import React from "react";

import Head from 'next/head'

import {
    Page,
    Button,
    Text,
    Link,
    Image,
    Display,
    Divider
} from '@geist-ui/react'

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
                        Oopsie! It seems the page you're looking for isn't here. Please return home.
                    </Text>

                    <Button><a href="/">Return home</a></Button>

                </Page.Content>

                <Page.Footer>

                    <Text><b>Disclaimer:</b> PNGX-API-Client is not an affiliate of PNGX.com. PNGX-API-Client is part of PNGX-API.</Text>

                    <Text>&copy; {new Date().getFullYear()}. Christian Augustyn</Text>

                </Page.Footer>
            </Page>
        </>
    )
}