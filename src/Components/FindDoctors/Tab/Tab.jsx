import classes from "./Tab.module.css";
import group from "../../../assets/Tabs/Group.svg";
import general from "../../../assets/Tabs/General.svg";
import specialist from "../../../assets/Tabs/Specialist.svg";
import venereologist from "../../../assets/Tabs/Venereologist.svg";
import gynecologist from "../../../assets/Tabs/Gynecologist.svg";
import psychiatrist from "../../../assets/Tabs/Psychiatrist.svg";

export default function Tab() {
  return (
    <div className={classes.container}>
      {/* ---------------------- */}
      <div className={`${classes.singleTabs} ${classes.clicktab}`}>
        <img src={group} alt="" />
        <a href="#">All Doctors</a>
      </div>
      {/* ------------------------------- */}
      <div className={classes.singleTabs}>
        <img src={general} alt="" />
        <a href="#">General Physician</a>
      </div>
      {/* ---------------------- */}
      <div className={classes.singleTabs}>
        <img src={specialist} alt="" />
        <a href="#">Medicine Specialist</a>
      </div>
      {/* ------------------------------- */}
      <div className={classes.singleTabs}>
        <img src={venereologist} alt="" />
        <a href="#">Venereologist</a>
      </div>
      {/* ---------------------- */}
      <div className={classes.singleTabs}>
        <img src={gynecologist} alt="" />
        <a href="#">Gynecologist</a>
      </div>
      {/* ------------------------------- */}
      <div className={classes.singleTabs}>
        <img src={psychiatrist} alt="" />
        <a href="#">Psychiatrist/Psychologist</a>
      </div>
    </div>
  );
}
