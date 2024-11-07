import { Card, Text } from '@geist-ui/core';
import Layout from '@/components/Layout';
import useMyTheme from '@/hooks/useTheme';

export default function UsesPage() {
    // const [theme, setTheme] = useMyTheme();

    return (
        <Layout title={"Uses"}>
            <Text h1>Uses</Text>

            <Text>This web application was built using:</Text>
            <Card >
                <Card.Content>
                    <ul>
                        <li>Nextjs</li>
                        <li>Geist UI</li>
                        <li>Styled-Components</li>
                        <li>PNGX-API</li>
                        <li>PNGX data</li>
                        <li>Redux Store</li>
                        <li>Axios</li>
                        <li>Nuku - PNGX RESTful API</li>
                    </ul>
                </Card.Content>
            </Card>

        </Layout>
    );
}
