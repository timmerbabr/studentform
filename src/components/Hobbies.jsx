export default function Hobbies(){
    return(
        <>
        <tr>
    <td>HOBBIES</td>
    <td>
      Drawing <input type="checkbox" name="hobbies" value="Drawing" />
      Singing <input type="checkbox" name="hobbies" value="Singing" />
      Dancing <input type="checkbox" name="hobbies" value="Dancing" />
      Sketching <input type="checkbox" name="hobbies" value="Sketching" /><br />
      Others <input type="checkbox" name="hobbies" value="Others" /> <input type="text" placeholder="Other Hobbies"/>
    </td>
  </tr>
        </>
    );
}