import classes from "./Top.module.css";

const IMAGES = [
  {
    alt: "画像",
    img: "/images/DSC05308.jpg",
  },
  {
    alt: "画像",
    img: "/images/DSC06530-2.jpg",
  },
  {
    alt: "画像",
    img: "/images/DSC05347.JPG",
  },
  {
    alt: "画像",
    img: "/images/DSC06556-2.jpg",
  },
  {
    alt: "画像",
    img: "/images/cafe.png",
  },
];

export function Top() {
  return (
    <div className={classes.top}>
      <h1 className={classes.title}>HIROKA's PORTFOLIO</h1>
      <figure className={classes.figure}>
        {IMAGES.map((images) => {
          return (
            <img
              key={images.img}
              src={images.img}
              alt={images.alt}
              className={classes.img}
            />
          );
        })}
      </figure>
    </div>
  );
}
