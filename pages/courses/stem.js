import { Heading, SimpleGrid, Center, Container, Flex } from "@chakra-ui/react";
import Head from "next/head";
import ReviewerCard from "../../components/modules/ReviewerCard";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import {
  onSnapshot,
  collection,
  query,
  orderBy,
  where,
} from "@firebase/firestore";
import { db } from "../../app/firebaseApp";
import styles from "../../styles/Home.module.css";
import LayoutCourses from "../../components/layouts/LayoutCourses"

function StemPage() {
  const [reviewers, setReviewers] = useState([]);
  const [tabIndex, setTabIndex] = useState(1)

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "reviewers"), where("strand", "==", "STEM")),
        (snapshot) => {
          setReviewers(snapshot.docs);
        }
      ),
    []
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>iReviewer - Discover the Latest STEM Reviewers</title>
        <meta name="description" content="Latest Reviewers" />
        <link rel="icon" href="/iReviewer-Logo-Small.svg" />
      </Head>

      <div>
        <SimpleGrid
          // minChildWidth={["250px", "250px", "200px", "245px"]}
          // columns={[2, 4]}
          columns={{base: 1, sm: 1, md: 2, lg: 3, xl: 4}}
          spacingX={"24px"}
          spacingY={"24px"}
          // p={[12, 1, 12, 16]}
          p={[2, 12, 24, 12, 16]}
        >
          {reviewers.map((reviewer) => (
            <ReviewerCard
              key={reviewer.id}
              id={reviewer.id}
              reviewer={reviewer.data()}
            />
          ))}
        </SimpleGrid>
      </div>
    </div>
  );
}

export default StemPage;

StemPage.Layout = LayoutCourses