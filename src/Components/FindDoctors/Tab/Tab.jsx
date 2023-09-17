import classes from "./Tab.module.css";
import group from "../../../assets/Tabs/Group.svg";
import general from "../../../assets/Tabs/General.svg";
import specialist from "../../../assets/Tabs/Specialist.svg";
import venereologist from "../../../assets/Tabs/Venereologist.svg";
import gynecologist from "../../../assets/Tabs/Gynecologist.svg";
import psychiatrist from "../../../assets/Tabs/Psychiatrist.svg";
import { useEffect, useState } from "react";

export default function Tab() {
  let apiV1 = "https://ec.healthxbd.com/api/v1";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjM2ODEsImV4cCI6MTcyNjM5ODE3NH0.JY0vWoxGBa4imj0-lBY86CRs4M64LHakAhPwp13LqSQ";
  const [search, setSearch] = useState("medicine");
  // console.log(search);
  //  Get
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${apiV1}/admin/doctors/active?speciality=${search}&end_date=023-09-17T23%3A59%3A59&skip=0&limit=8/`,
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
          console.log(data);
        }
      } catch {
        console.log("Please check your internet connection!");
      }
    };
    fetchData();
  }, [search]);

  return (
    <div className={classes.container}>
      <div className={classes.alltabs}>
        {/* ---------------------- */}
        <div className={`${classes.singleTabs} ${classes.clicktab}`}>
          <img src={group} alt="" />
          <p onClick={() => setSearch("")}>All Doctors</p>
        </div>
        {/* ------------------------------- */}
        <div className={classes.singleTabs}>
          <img src={general} alt="" />
          <p href="#" onClick={() => setSearch(" General Physician")}>
            General Physician
          </p>
        </div>
        {/* ---------------------- */}
        <div className={classes.singleTabs}>
          <img src={specialist} alt="" />
          <p href="#" onClick={(e) => setSearch("Medicine Specialist")}>
            Medicine Specialist
          </p>
        </div>
        {/* ------------------------------- */}
        <div className={classes.singleTabs}>
          <img src={venereologist} alt="" />
          <p href="#" onClick={(e) => setSearch("Venereologist")}>
            Venereologist
          </p>
        </div>
        {/* ---------------------- */}
        <div className={classes.singleTabs}>
          <img src={gynecologist} alt="" />
          <p href="#" onClick={(e) => setSearch(" Gynecologist")}>
            Gynecologist
          </p>
        </div>
        {/* ------------------------------- */}
        <div className={classes.singleTabs}>
          <img src={psychiatrist} alt="" />
          <p href="#" onClick={(e) => setSearch("Psychiatrist")}>
            Psychiatrist/Psychologist
          </p>
        </div>
      </div>
    </div>
  );
}
