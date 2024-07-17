"use client";

import { FC, useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Text } from "@chakra-ui/react";
import { oswald } from "../../../utils/fonts";

interface ProfileDetail {
  params: { id: string };
}
const ProfileDetail: FC<ProfileDetail> = ({ params }) => {
  const [user, setUser] = useState(null);

  const getData = async () => {
    try {
      const { data } = await axios.get("https://randomuser.me/api/");
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  });

  return (
    <div>
      ProfileDetail {params.id}
      <div style={{ position: "relative", width: "300px", height: "300px" }}>
        <Image
          src="https://plus.unsplash.com/premium_photo-1668902219322-08c0b1f3c12b?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="swiss"
          objectFit="cover"
          fill
        ></Image>
      </div>
      <h1 className={oswald.className}>Test Font Oswald</h1>
      <Text css={{ fontFamily: oswald.style.fontFamily }}>
        Test Font Oswald Chakra
      </Text>
    </div>
  );
};

export default ProfileDetail;
