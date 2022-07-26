import Head from "next/head";
import Image from "next/image";
import Navbar from "../component/Navbar";
import UserList from "../component/UserList";
import styles from "../styles/Home.module.css";

export default function Home({ users }) {
  console.log(users);
  return (
    <div>
      <Head>
        <title>User Profiles</title>
        <meta name="keywords" content="user profile, profile details" />
        <meta
          name="description"
          content="user profile application using Next JS"
        />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>
          User Profile <a href="/">Application</a>
        </h1>
      </div>
      <UserList users={users} />
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return {
    props: {
      users,
    },
  };
}
