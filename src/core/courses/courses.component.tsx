import { FC } from "react";
import "./courses.component.sass";
import Course, { ICourse } from "../../feature/course.component";

const courses: ICourse[] = [
  {
    name: "1989 (Taylor's Version)",
    subname: "Summer Conversational Club",
    description: "Taylor Swift summer club",
    price: "20.000$",
    participantCount: 10,
    decoration: {
      color: "#79a7c3",
      textColor: "#F4F4F4",
    },
  },
];

const Courses: FC = () => (
  <section className="ceramic-background">
    {courses.map(course => (
      <Course
        name={course.name}
        subname={course.subname}
        description={course.description}
        price={course.price}
        participantCount={course.participantCount}
        decoration={course.decoration}
      ></Course>
    ))}
  </section>
);

export default Courses;
