export default function DateOfBirth (){
    return(
        <>
        <tr>
    <td>DATE OF BIRTH</td>
    <td>
      <select>
        <option>Day</option>
        {[...Array(31)].map((_, i) => <option key={i}>{i + 1}</option>)}
      </select>

      <select>
        <option>Month</option>
        {["January","February","March","April","May","June","July","August","September","October","November","December"].map((m, i) => <option key={i}>{m}</option>)}
      </select>

      <select>
        <option>Year</option>
        {[...Array(12)].map((_, i) => <option key={i}>{2015 + i}</option>)}
      </select>
    </td>
  </tr>
        </>
    );
}
  
