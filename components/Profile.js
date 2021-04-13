import classes from "./Profile.module.css";

export function Profile() {
  return (
    <section className={classes.profile}>
      <h2 className={classes.title}>PROFILE</h2>
      <div className={classes.container}>
        <img
          src="/images/profile.jpg"
          alt="プロフィール画像"
          className={classes.img}
        />
        <div className={classes.text}>
          <h3>末信　紘果</h3>
          <p>よろしくお願いします。よろしくお願いします。よろしくお願いします。よろしくお願いします。よろしくお願いします。</p>
        </div>
      </div>
    </section>
  );
}
