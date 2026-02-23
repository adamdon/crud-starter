import { Anchor, Button, Text, Stack } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';
import ContentContainer from '../../layout/ContentContainer';

export const AboutPage = () => {
    return (
        <>
            <ContentContainer>
                <Button
                    component="a"
                    href="https://github.com/adamdon/crud-starter"
                    target="_blank"
                    fullWidth
                    leftSection={<IconBrandGithub size={20} />}
                    variant="default"
                >
                    Click here for GitHub source code
                </Button>
            </ContentContainer>

            <ContentContainer>
                <Stack gap="xs">
                    <Anchor href="https://en.wikipedia.org/wiki/MIT_License" target="_blank" fw={700} size="xl">
                        MIT License
                    </Anchor>

                    <Text>Copyright (c) 2026 Adam Don</Text>

                    <Text size="sm" ta="justify">
                        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                    </Text>

                    <Text size="sm" ta="justify">
                        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                    </Text>

                    <Text size="sm" ta="justify">
                        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                    </Text>
                </Stack>
            </ContentContainer>
        </>
    )
}

export default AboutPage;