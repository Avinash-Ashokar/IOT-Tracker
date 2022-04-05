import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export default function MyTable({ chosen_one }) {
  if (chosen_one === "") {
    return (
      <div>
        <p></p>
      </div>
    );
  } else {
    const loc = Object.keys(chosen_one);

    var child = [];

    Object.keys(chosen_one).map((data, i) => {
      child.push(loc[i]);
    });

    return (
      <TableContainer maxWidth="100%">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Previous Locations</Th>
              <Th>Visited Places</Th>
              <Th>Time</Th>
              <Th>Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {child.map((data) => (
              <Tr key={data}>
                <Td>{data}</Td>
                <Td>{chosen_one[data]["Place"]}</Td>
                <Td>{chosen_one[data]["Date"]}</Td>
                <Td>{chosen_one[data]["Time"]}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    );
  }
}
