import { Table } from '@nextui-org/react';
import { MdClear } from 'react-icons/md';
export default function CartTable({ products }) {
  return (
    <Table compact aria-label="Example table with static content">
      <Table.Header  >
        <Table.Column>Product Title</Table.Column>
        <Table.Column>Quantity</Table.Column>
        <Table.Column>Price</Table.Column>
        <Table.Column></Table.Column>
      </Table.Header>
      <Table.Body>
        {products.map((e, i) => (
          <Table.Row
            key={i}
            css={{
              textGradient: '45deg, $yellow600 -20%, $red600 100%',
            }}
            weight="semibold"
            className="text-white"
          >
            <Table.Cell>{e.title}</Table.Cell>
            <Table.Cell>{e.cartQuantity}</Table.Cell>
            <Table.Cell>${e.price}</Table.Cell>
            <Table.Cell>
              <MdClear className="w-5 h-5 text-white bg-red-500 rounded-full " />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
