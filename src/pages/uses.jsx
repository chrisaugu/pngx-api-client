import { useState } from 'react';
import { Button, Card, Drawer, Stack, Text } from '@geist-ui/core';
import Layout from '@/components/Layout';

export default function UsesPage() {
  const [open, setOpen] = useState(false);

  return (
    <Layout title={"Uses"}>

        <Text>This web application is built using:</Text>

        <Card>
            <Card.Content>
                Nextjs
                Geist UI
                Shared Components
                PNGX-API
                PNGX data
                Redux
                Axios
                Fetch
            </Card.Content>
            <Card.Footer>Hello</Card.Footer>
        </Card>

    </Layout>
  );
}
