import classes from "./Tab.module.css";
import group from "../../../assets/Tabs/Group.svg";
import general from "../../../assets/Tabs/General.svg";
import specialist from "../../../assets/Tabs/Specialist.svg";
import venereologist from "../../../assets/Tabs/Venereologist.svg";
import gynecologist from "../../../assets/Tabs/Gynecologist.svg";
import psychiatrist from "../../../assets/Tabs/Psychiatrist.svg";

export default function Tab({ search, setSearch }) {
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
            search === "general" ? classes.clicktab : classes.singleTabs
          }
        >
          <img src={general} alt="" />
          <p onClick={() => setSearch("general")}>General Physician</p>
        </div>
        {/* ---------------------- */}
        <div
          className={
            search === "medicine" ? classes.clicktab : classes.singleTabs
          }
        >
          <img src={specialist} alt="" />
          <p onClick={() => setSearch("medicine")}>Medicine Specialist</p>
        </div>
        {/* ------------------------------- */}
        <div
          className={search === "vd" ? classes.clicktab : classes.singleTabs}
        >
          <img src={venereologist} alt="" />
          <p onClick={() => setSearch("vd")}>Venereologist</p>
        </div>
        {/* ---------------------- */}
        <div
          className={search === "gyn" ? classes.clicktab : classes.singleTabs}
        >
          <img src={gynecologist} alt="" />
          <p onClick={() => setSearch("gyn")}>Gynecologist</p>
        </div>
        {/* ------------------------------- */}
        <div
          className={search === "psych" ? classes.clicktab : classes.singleTabs}
        >
          <img src={psychiatrist} alt="" />
          <p onClick={() => setSearch("psych")}>Psychiatrist/Psychologist</p>
        </div>
      </div>
    </div>
  );
}
