import Button from 'react-bootstrap/Button';

/* eslint-disable react/prop-types */
const Mission = (props) => {
  const { mission } = props;

  return (
    <tr>
      <td className="fw-bold">
        <p>{mission.name}</p>
      </td>
      <td>
        <p>{mission.description}</p>
      </td>
      <td className="align-middle">
        <p className="badge bg-secondary text-nowrap">NOT A MEMBER</p>
      </td>
      <td className="align-middle">
        <Button className="text-nowrap" variant="outline-secondary">Join Mission</Button>
      </td>
    </tr>
  );
};

export default Mission;
