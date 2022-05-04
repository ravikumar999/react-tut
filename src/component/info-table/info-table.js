const InfoTable = (props) => {
  const info = props.data;
  return (
    <tr>
      <td>{info.name}</td>
      <td>{info.roll}</td>
      <td>{info.subject}</td>
    </tr>
  )
}

export default InfoTable;