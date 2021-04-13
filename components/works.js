import classes from "./works.module.css";

const WORKS = [
  {
    url: "",
    title: "ポートフォリオ",
    img: "/images/cafe.png",
  },
];


export function Works() {
  return (
    <div className={classes.works}>
      <h1>WORKS</h1>
      {WORKS.map((work) => {
        return <img src={work.img} alt={work.title} />;
      })}
    </div>
  );
}
