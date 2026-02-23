import { Group, Button, Text, Paper } from '@mantine/core';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <Paper shadow="xs" p="md" mb="xl" withBorder>
            <Group justify="space-between">
                <Text
                    component={Link}
                    to="/"
                    fw={700}
                    size="xl"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    crud-starter
                </Text>

                <Group>
                    <Button component={Link} to="/about" variant="subtle">About</Button>
                </Group>
            </Group>
        </Paper>
    )
}

export default Navbar;