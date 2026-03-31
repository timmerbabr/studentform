export default function Education(){
    return(
        <>
        <tr>
      <th>QUALIFICATION</th>
      <th>Sl.No.</th>
      <th>Examination</th>
      <th>Board</th>
      <th>Percentage</th>
      <th>Year of Passing</th>
    </tr>
    {["Class X", "Class XII", "Graduation", "Masters"].map((exam, idx) => (
      <tr key={idx}>
        <td></td>
        <td>{idx+1}</td>
        <td>{exam}</td>
        <td><input type="text" /></td>
        <td><input type="text" /></td>
        <td><input type="text" /></td>
      </tr>
    ))}
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <th>(10 char max)</th>
      <th>(upto 2 decimal)</th>
    </tr>
 </>
    );
}

