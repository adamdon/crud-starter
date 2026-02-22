import { useState, useEffect } from 'react';
import { TextInput, Button, Group, Indicator, Text, Stack } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import ContentContainer from '../../../layout/ContentContainer';
import { useData } from '../../../../utilities/DataContextProvider';

type CreateProps = {
  enableDefault: boolean;
};

export const Create = ({ enableDefault }: CreateProps) => {
  const [data, setData] = useData();
  const [ref, setRef] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    if (enableDefault) {
      setRef("01");
      setText("test text");
    } else {
      setRef("");
      setText("");
    }
  }, [enableDefault]);

  const fetchCreate = async (newRef: string, newText: string) => {
    try {
      const newItem = {
        "ref": newRef,
        "name": newText
      };

      const requestUrl = `${data.backendUrl}/api/create`;
      const response = await fetch(requestUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem)
      });

      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  const createOnClick = async () => {
    setData({ isDisabled: true });
    const notificationId = notifications.show({
      loading: true,
      title: 'Creating Item',
      message: 'Please wait...',
      autoClose: false,
      withCloseButton: false,
    });

    if ((ref !== "") && (text !== "")) {
      try {
        // small sleep for ux drama
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const returnedItem = await fetchCreate(ref, text);

        notifications.update({
          id: notificationId,
          color: 'green',
          title: 'Success',
          message: 'New Item created with ref: ' + returnedItem.ref,
          loading: false,
          autoClose: 2000,
        });

        console.info("create - returnedItem", returnedItem);
        setRef("");
        setText("");
      } catch (error: any) {
        console.error(error);
        notifications.update({
          id: notificationId,
          color: 'red',
          title: 'Error',
          message: error.message || 'Failed to create',
          loading: false,
          autoClose: 3000,
        });
      }
    } else {
      notifications.update({
        id: notificationId,
        color: 'yellow',
        title: 'Warning',
        message: 'Both ref and text must be filled',
        loading: false,
        autoClose: 3000,
      });
    }

    setData({ isDisabled: false });
  }

  return (
    <ContentContainer>
      <Stack gap="xs">
        <Text size="sm" fw={500}>
          Enter a reference and some text (e.g "01", "test")
        </Text>

        {/* We use Group with gap={0} to simulate the "Join" look */}
        <Group gap={0} align="flex-end">
          <TextInput
            placeholder="Reference"
            value={ref}
            onChange={(e) => setRef(e.target.value)}
            disabled={data.isDisabled}
            style={{ flex: 1 }}
            radius="md"
            styles={{ input: { borderTopRightRadius: 0, borderBottomRightRadius: 0, borderRight: 0 } }}
          />
          <TextInput
            placeholder="Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={data.isDisabled}
            style={{ flex: 1 }}
            radius="0"
            styles={{ input: { borderRadius: 0 } }}
          />

          <Indicator label="Click" color="pink" size={12} offset={7} position="top-end" disabled={data.isDisabled}>
            <Button
              onClick={createOnClick}
              disabled={data.isDisabled}
              radius="md"
              style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            >
              Create
            </Button>
          </Indicator>
        </Group>
      </Stack>
    </ContentContainer>
  );
};

export default Create;