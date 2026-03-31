import Header from "./components/Header";
import PersonalInfo from "./components/PersonalInfo";
import DateOfBirth from "./components/DateOfBirth";
import ContactInfo from "./components/ContactInfo";
import AddressInfo from "./components/AddressInfo";
import Hobbies from "./components/Hobbies";
import Education from "./components/Education";
import CourseApplied from "./components/CourseApplied";
import SubmitButtons from "./components/SubmitButtons";

export default function App() {
  return (
    <>
    <div className="App">
      <Header />
      <form>
        <table>
          <tbody>
            <PersonalInfo />
            <DateOfBirth />
            <ContactInfo />
            <AddressInfo />
            <Hobbies />
          </tbody>
        </table>

        <table>
          <tbody>
            <Education/>
          </tbody>
        </table>

        <table>
          <tbody>
            <CourseApplied />
            <SubmitButtons />
          </tbody>
        </table>
      </form>
    </div>
    </>
  );
}

