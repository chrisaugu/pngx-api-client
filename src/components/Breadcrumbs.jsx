import NextLink from 'next/link';
import { Link, Spacer, Breadcrumbs as GBreadcrumbs } from '@geist-ui/core';
import { Home } from "@geist-ui/icons"

export const Breadcrumbs = () => {

    return (
        <>
            <Spacer h={1}/>
            <GBreadcrumbs>
                <NextLink href="/">
                    <Link>
                        <GBreadcrumbs.Item nextLink><Home /></GBreadcrumbs.Item>
                    </Link>
                </NextLink>
                <GBreadcrumbs.Item>Watchlist</GBreadcrumbs.Item>
            </GBreadcrumbs>
        </>
    )
}