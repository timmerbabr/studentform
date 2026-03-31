export default function AddressInfo() {
    return(
         <>
    <tr>
      <td>ADDRESS</td>
      <td><textarea rows="4" cols="30" placeholder="Address"></textarea></td>
    </tr>
    <tr>
      <td>CITY</td>
      <td><input type="text" maxLength="30" placeholder="City"/></td>
    </tr>
    <tr>
      <td>PIN CODE</td>
      <td><input type="text" maxLength="6" placeholder="Pin Code"/></td>
    </tr>
    <tr>
      <td>STATE</td>
      <td><input type="text" maxLength="30" placeholder="State"/></td>
    </tr>
    <tr>
      <td>COUNTRY</td>
      <td><input type="text" placeholder="Country"/></td>
    </tr>
  </>
    );
}
 
