import classes from "./works.module.css";

const WORKS = [
  {
    url: "",
    title: "ポートフォリオ",
    img: "/images/cafe.png",
  },
  {
    url: "",
    title: "ポートフォリオ",
    img: "/images/cafe.png",
  },
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
      <div className={classes.container}>
        {WORKS.map((work) => {
          return (
            <div className={classes.work}>
              <img src={work.img} alt={work.title} className={classes.img} />
              <p>
                説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
