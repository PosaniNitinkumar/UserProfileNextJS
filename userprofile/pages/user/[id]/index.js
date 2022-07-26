import React from "react";
import HomeStyles from "../../../styles/Home.module.css";

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const users = await res.json();
  const paths = users.map((user) => ({ params: { id: user.id.toString() } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  );
  const user = await res.json();

  return { props: { user } };
}

export default function Post({ user }) {
  return (
    <div>
      {user && (
        <main className={HomeStyles.main}>
          <div className={HomeStyles.grid}>
            <div className={HomeStyles.card}>
              <p>Name:{user.name}</p>
              <p>Email:{user.email}</p>
              <p>Company:{user.company.name}</p>
              <p>Phone:{user.phone}</p>
              <p>Website:{user.website}</p>
              <p>
                Address:{user.address.street},{user.address.city},
                {user.address.zipcode}
              </p>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
