import { useState, useEffect } from 'react';
import { TextInput, Button, Group, Indicator, Text, Stack } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import ContentContainer from '../../../layout/ContentContainer';
import { useData } from '../../../../utilities/DataContextProvider';

type DeleteProps = {
  enableDefault: boolean;
};

export const Delete = ({ enableDefault }: DeleteProps) => {
  const [data, setData] = useData();
  const [ref, setRef] = useState("");

  useEffect(() => {
    if (enableDefault) {
      setRef("01");
    } else {
      setRef("");
    }
  }, [enableDefault]);

  const fetchDelete = async (toDeleteRef: string) => {
    try {
      const toDeleteItem = {
        "ref": toDeleteRef,
        "name": ""
      };

      const requestUrl = `${data.backendUrl}/api/delete`;
      const response = await fetch(requestUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(toDeleteItem)
      });

      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  const deleteOnClick = async () => {
    setData({ isDisabled: true });

    const notificationId = notifications.show({
      loading: true,
      title: 'Deleting Item',
      message: 'Please wait...',
      autoClose: false,
      withCloseButton: false,
    });

    if (ref !== "") {
      try {
        // small sleep for ux drama
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const returnedObject = await fetchDelete(ref);

        notifications.update({
          id: notificationId,
          color: 'green',
          title: 'Success',
          message: 'Items deleted: ' + returnedObject.deletedCount,
          loading: false,
          autoClose: 2000,
        });

        console.info("delete - returnedObject", returnedObject);
        setRef("");
      } catch (error: any) {
        console.error(error);
        notifications.update({
          id: notificationId,
          color: 'red',
          title: 'Error',
          message: error.message || 'Failed to delete',
          loading: false,
          autoClose: 3000,
        });
      }
    } else {
      notifications.update({
        id: notificationId,
        color: 'yellow',
        title: 'Warning',
        message: 'Ref must be filled',
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
          Enter a reference you want delete (will delete all items with same ref)
        </Text>

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

          <Indicator label="Click" color="pink" size={12} offset={7} position="top-end" disabled={data.isDisabled}>
            <Button
              onClick={deleteOnClick}
              disabled={data.isDisabled}
              radius="md"
              style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            >
              Delete
            </Button>
          </Indicator>
        </Group>
      </Stack>
    </ContentContainer>
  );
};

export default Delete;