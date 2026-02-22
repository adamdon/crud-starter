import { useState } from 'react';
import { Button, Table, Collapse, Paper } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import ContentContainer from '../../../layout/ContentContainer';
import { useData } from '../../../../utilities/DataContextProvider';

type Item = {
  _id: string;
  ref: string;
  name: string;
};

export const Read = () => {
  const [data, setData] = useData();
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState<Item[]>([]);

  const fetchReadAll = async () => {
    try {
      const requestUrl = `${data.backendUrl}/api/readAll`;
      const response = await fetch(requestUrl, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });
      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  const readOnClick = async () => {
    setData({ isDisabled: true });
    setIsLoading(true);
    setItems([]);

    const notificationId = notifications.show({
      loading: true,
      title: 'Reading Items',
      message: 'Please wait...',
      autoClose: false,
      withCloseButton: false,
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      const returnedItems: Item[] = await fetchReadAll();

      notifications.update({
        id: notificationId,
        color: 'green',
        title: 'Success',
        message: 'Read total Items: ' + returnedItems.length,
        loading: false,
        autoClose: 2000,
      });

      console.info("Read - returnedItems", returnedItems);
      setItems(returnedItems);

    } catch (error: any) {
      console.error(error);
      notifications.update({
        id: notificationId,
        color: 'red',
        title: 'Error',
        message: error.message || 'Failed to fetch',
        loading: false,
        autoClose: 3000,
      });
    }

    setIsLoading(false);
    setData({ isDisabled: false });
  }

  const rows = items.map((item) => (
    <Table.Tr key={item._id}>
      <Table.Th>{item.ref}</Table.Th>
      <Table.Td>{item.name}</Table.Td>
      <Table.Th>{item._id}</Table.Th>
    </Table.Tr>
  ));

  return (
    <ContentContainer>
      <Button
        variant="outline"
        color="cyan"
        fullWidth
        onClick={readOnClick}
        loading={isLoading}
        disabled={data.isDisabled}
        mb={items.length > 0 ? "md" : 0}
      >
        Read all
      </Button>

      <Collapse in={items.length > 0}>
        <Paper withBorder p={0} radius="sm" style={{ overflow: 'hidden' }}>
          <Table highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Ref</Table.Th>
                <Table.Th>Text</Table.Th>
                <Table.Th>_id</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {rows}
            </Table.Tbody>
          </Table>
        </Paper>
      </Collapse>
    </ContentContainer>
  );
};

export default Read;