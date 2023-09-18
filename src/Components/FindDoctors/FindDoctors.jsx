import { useEffect, useState } from "react";
import Searchbar from "./Searchbar/Searchbar";
import Tab from "./Tab/Tab";
import Doctors from "./Doctors/Doctors";
import classes from "./FindDoctors.module.css";

export default function FindDoctors() {
  const [search, setSearch] = useState("");
  const [doctor, setDoctor] = useState([]);

  const apiV1 = "https://ec.healthxbd.com/api/v1";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjM2ODEsImV4cCI6MTcyNjM5ODE3NH0.JY0vWoxGBa4imj0-lBY86CRs4M64LHakAhPwp13LqSQ";

  //  Get
  const fetchData = async () => {
    try {
      const response = await fetch(
        `${apiV1}/admin/doctors/active?speciality=${search}&end_date=23-09-17T23%3A59%3A59&skip=0&limit=10`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("success");
        console.log(data[1]);
        setDoctor(data[1]);
      }
    } catch {
      console.log("Please check your internet connection!");
    }
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <div>
      <Searchbar search={search} />
      <Tab search={search} setSearch={setSearch} />

      <div className={classes.doctor}>
        {doctor.map((doctor) => (
          <Doctors doctor={doctor} />
        ))}
      </div>
    </div>
  );
}
