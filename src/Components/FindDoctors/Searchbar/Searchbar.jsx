import classes from "./Searchbar.module.css";
import specialty from "../../../assets/Searchbar/Specialty.png";
import area from "../../../assets/Searchbar/Area.png";
import name from "../../../assets/Searchbar/Name.png";
import search from "../../../assets/Searchbar/search.png";

export default function Searchbar() {
  return (
    <div className={classes.container}>
      <p>Find The Best Doctors</p>
      <div className={classes.searchbar}>
        <form className={classes.searchDoctor}>
          {/* ......................... */}
          <div className={classes.singleSearchbar}>
            <img src={specialty} alt="" />
            <input type="text" placeholder="Search by specialty" />
          </div>
          <div className={classes.space}></div>
          {/* ......................... */}
          <div className={classes.singleSearchbar}>
            <img src={area} alt="" />
            <input type="text" placeholder="Search by area" />
          </div>
          <div className={classes.space}></div>
          {/* ......................... */}
          <div className={classes.singleSearchbar}>
            <img src={name} alt="" />
            <input type="text" placeholder="Search by name" />
          </div>
          <div className={classes.iconButton}>
            <img src={search} alt="" />
          </div>
        </form>
      </div>
    </div>
  );
}
