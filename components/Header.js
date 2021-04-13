import classes from "./Header.module.css";

const LIST = [
  {
    link: "PROFILE",
    href: "",
  },
  {
    link: "WORKS",
    href: "",
  },
  {
    link: "CONTACT",
    href: "",
  },
];

export function Header() {
  return (
    <header className={classes.header}>
      <ul className={classes.container}>
        {LIST.map((list) => {
          return (
            <li key={list.link} className={classes.list}>
              <a>{list.link}</a>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
