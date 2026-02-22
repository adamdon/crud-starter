import { Container, Paper, Stack } from '@mantine/core';
import { type ReactNode } from 'react';

export const ContentContainer = ({ children }: { children: ReactNode }) => {
    return (
        <Container size="sm" mt="xl">
            <Paper shadow="md" p="xl" radius="md" withBorder>
                <Stack gap="md">
                    {children}
                </Stack>
            </Paper>
        </Container>
    );
}

export default ContentContainer;