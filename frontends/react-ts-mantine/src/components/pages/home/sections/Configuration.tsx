import { Title, Text, Switch, Center, Stack } from '@mantine/core';
import ContentContainer from '../../../layout/ContentContainer';

type ConfigurationProps = {
    enableDefault: boolean;
    setEnableDefault: (value: boolean) => void;
};

export const Configuration = ({ enableDefault, setEnableDefault }: ConfigurationProps) => {
    return (
        <ContentContainer>
            <Stack align="center" gap="lg" py="xl">
                <Title order={1} size={48} fw={700}>What is this?</Title>

                <Text ta="center" size="lg">
                    This starter project a full stack web application using a React frontend, Node.js backend and MongoDB database. It provides Create, Read, Update and Delete functionality to enable quick development of new ideas.
                </Text>

                <Center>
                    <Switch
                        label="Pre-populate inputs"
                        size="md"
                        checked={enableDefault}
                        onChange={(event) => setEnableDefault(event.currentTarget.checked)}
                    />
                </Center>
            </Stack>
        </ContentContainer>
    );
};

export default Configuration;