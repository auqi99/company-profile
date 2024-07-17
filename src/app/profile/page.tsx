import { useEffect, useState } from "react";

const Profile = async () => {
    // by default caching data dari api
    // const response = await fetch("https://randomuser.me/api/");

    // menghilangkan fitur caching
//   const response = await fetch("https://randomuser.me/api/", {
//      cache: "no-store",
    //   });
    
    // revalidate setiap berapa detik
    const response = await fetch("https://randomuser.me/api/", {
        next: { revalidate: 60},
    });
    const user = await response.json();

  // const { data } = await axios.get("https://randomuser.me/api/");

//   console.log(data);

  console.log(user);

  return <div>Profile</div>;
};

export default Profile;
