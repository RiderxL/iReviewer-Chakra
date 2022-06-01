import Head from "next/head";
import React from "react";
import styles from "../../styles/Home.module.css";
import { useSession, getProviders, getSession } from "next-auth/react";
import ProfileHeading from "../elements/profile/ProfileHeading"
import SubNav from "../layout/SubNav";

export default function LayoutProfile({ children }) {

  return (
    <div>
      <SubNav />
      {children}
    </div>
  );
}

