import { Card, Text, Grid, Link, Image } from '@geist-ui/core';
import Layout from '@/components/Layout';
import useMyTheme from '@/hooks/useTheme';

export default function BrokersPage() {
    // const [theme, setTheme] = useMyTheme();

    const brokers = [
        {
            name: "Kina Securities Limited",
            link: "https://www.kinabank.com.pg/investing-in-the-stock-market/",
            logo: "/kina_securities_png_logo.png"
        },
        {
            name: "JMP Securities Ltd",
            link: "https://www.jmpmarkets.com/",
            logo: "/jmp_securities_png_logo.jpeg"
        }
    ]

    return (
        <Layout title={"Brokers"}>
            <Text h1>Brokers</Text>

            <Text>
                All stocks listed on the PNGX Market can only be bought and sold through a broker. The Stockbroker acts on your behalf to buy and sell shares, for which a fee is charged.
            </Text>
            <Text>Currently there are only two licensed stockbrokers in Papua New Guinea (PNG), and they are:</Text>
            <Grid.Container gap={1.5}>
                {brokers.map(broker => (
                    <Grid xs={8} key={broker}>
                        <Card>
                            <Image src={broker.logo} draggable={false} width="280px" height="160px" />
                            <Card.Content>
                                <Text h4>{broker.name}</Text>
                                <Text></Text>
                            </Card.Content>
                            <Card.Footer>
                                <Link color target="_blank" href={broker.link}>Visit link.</Link>
                            </Card.Footer>
                        </Card>
                    </Grid>
                ))}
            </Grid.Container>

        </Layout>
    );
}
