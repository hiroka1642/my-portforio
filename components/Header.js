import classes from './Header.module.css'

export  function Header() {
  const LIST=[{
    link: "PROFILE",
    href:""
  },
  {
    link: "WORKS",
    href:""
  },
  {
    link: "CONTACT",
    href:""
  },

]
  return (
    <header className={classes.header}>
      <ul className={classes.container}>
        {LIST.map((list)=>{
          return(
            <li className={classes.list}><a>{list.link}</a></li>
          )
        })}
      </ul>
    </header>
  )
}
