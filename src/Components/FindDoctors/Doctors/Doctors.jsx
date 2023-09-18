import classes from "./Doctors.module.css";

export default function Doctors({ doctor }) {
  return (
    <div className={classes.doctor}>
      <p>Name: {doctor.User.name}</p>
      <p>Phone: {doctor.User.phone}</p>
      <p> Speciality: {doctor.DoctorSpeciality.speciality}</p>
    </div>
  );
}
