export default function ContactInfo(){
    return(
        <>
    <tr>
      <td>EMAIL ID</td>
      <td><input type="email" placeholder="Email"/></td>
    </tr>
    <tr>
      <td>MOBILE NUMBER</td>
      <td><input type="text" maxLength="10" placeholder="10-digit mobile"/></td>
    </tr>
    <tr>
      <td>GENDER</td>
      <td>
        Male <input type="radio" name="gender" value="Male" />
        Female <input type="radio" name="gender" value="Female" />
      </td>
    </tr>
  </>
    );
}
  