import { Card, Text } from '@geist-ui/core';
import Layout from '@/components/Layout';
import useMyTheme from '@/hooks/useTheme';

export default function LinksPage() {
    // const [theme, setTheme] = useMyTheme();

    return (
        <Layout title={"Links"}>
            <Text h1>Usefull Links</Text>

            <Text>Some usefull links:</Text>
            <Card >
                <Card.Content>
                    <ul>
                        <li>https://www.scpng.gov.pg/</li>
                        <li>https://www.kaml.com.pg/dividend-reinvestment-plan/</li>
                        <li>https://www.pngx.com.pg/</li>
                        <li>https://investors.kinabank.com.pg/Investors/?page=share-price-graph</li>
                    </ul>
                </Card.Content>
            </Card>

        </Layout>
    );
}
