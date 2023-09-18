import classes from "./Tab.module.css";
import group from "../../../assets/Tabs/Group.svg";
import general from "../../../assets/Tabs/General.svg";
import specialist from "../../../assets/Tabs/Specialist.svg";
import venereologist from "../../../assets/Tabs/Venereologist.svg";
import gynecologist from "../../../assets/Tabs/Gynecologist.svg";
import psychiatrist from "../../../assets/Tabs/Psychiatrist.svg";
import { useEffect, useState } from "react";

export default function Tab({ search, setSearch }) {
  const [search, setSearch] = useState("");
  const [doctor, setDoctor] = useState([]);

  const apiV1 = "https://ec.healthxbd.com/api/v1";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjM2ODEsImV4cCI6MTcyNjM5ODE3NH0.JY0vWoxGBa4imj0-lBY86CRs4M64LHakAhPwp13LqSQ";

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
    <div className={classes.container}>
      <div className={classes.alltabs}>
        {/* ---------------------- */}
        <div className={search === "" ? classes.clicktab : classes.singleTabs}>
          <img src={group} alt="" />
          <p onClick={() => setSearch("")}>All Doctors</p>
        </div>
        {/* ------------------------------- */}
        <div
          className={
            search === "General Physician"
              ? classes.clicktab
              : classes.singleTabs
          }
        >
          <img src={general} alt="" />
          <p onClick={() => setSearch("general")}>General Physician</p>
        </div>
        {/* ---------------------- */}
        <div className={classes.singleTabs}>
          <img src={specialist} alt="" />
          <p onClick={() => setSearch("medicine")}>Medicine Specialist</p>
        </div>
        {/* ------------------------------- */}
        <div className={classes.singleTabs}>
          <img src={venereologist} alt="" />
          <p onClick={() => setSearch("Venereologist")}>Venereologist</p>
        </div>
        {/* ---------------------- */}
        <div className={classes.singleTabs}>
          <img src={gynecologist} alt="" />
          <p onClick={() => setSearch("Gynecologist")}>Gynecologist</p>
        </div>
        {/* ------------------------------- */}
        <div className={classes.singleTabs}>
          <img src={psychiatrist} alt="" />
          <p onClick={() => setSearch("Psychiatrist")}>
            Psychiatrist/Psychologist
          </p>
        </div>
      </div>
    </div>
  );
}
