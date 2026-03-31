export default function PersonalInfo(){
    return(
  <>
    <tr>
      <td>FIRST NAME</td>
      <td>
        <input type="text" maxLength="30" placeholder="First Name"/>
      </td>
    </tr>
    <tr>
      <td>LAST NAME</td>
      <td>
        <input type="text" maxLength="30" placeholder="Last Name"/>
      </td>
    </tr>
  </>

    );
}