import { Home } from "@geist-ui/icons"

export const Breadcrumbs = () => {

    return (
        <>
            <Spacer h={1}/>
            <Breadcrumbs>
                <NextLink href="/">
                    <Link>
                        <Breadcrumbs.Item nextLink><Home /></Breadcrumbs.Item>
                    </Link>
                </NextLink>
                <Breadcrumbs.Item>Watchlist</Breadcrumbs.Item>
            </Breadcrumbs>
        </>
    )
}