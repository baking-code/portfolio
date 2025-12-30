"use client";
import React from "react";
import {
  Page,
  Text,
  Link,
  View,
  Document,
  StyleSheet
} from "@react-pdf/renderer";
import { each, groupBy } from "lodash";
import { theme } from "../../tailwind.config";
import data from "../../public/data";

const primaryColor = theme.extend.colors.primary[500];
const textColor = theme.extend.colors.grey[600];
const whiteTextColor = theme.extend.colors.white;

const BORDER = { borderColor: "red", borderWidth: "1" };

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    // backgroundColor: "#E4E4E4",
    marginVertical: 50
  },
  header: {
    backgroundColor: primaryColor,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 30,
    marginBottom: 10,
    marginTop: -50
  },
  title: {
    textAlign: "left",
    color: whiteTextColor,
    fontSize: 40,
    fontWeight: "bold",
    flex: 3
  },
  subHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    flex: 2
  },
  subtitle: {
    textAlign: "right",
    color: whiteTextColor,
    fontSize: 10,
    fontWeight: "bold",
    display: "flex",
    flexDirection: "row"
  },
  sectionTitle: {
    color: primaryColor,
    textTransform: "capitalize",
    fontSize: 18,
    marginHorizontal: 20
  },
  jobTitle: {
    color: textColor,
    fontSize: 12
  },
  roleTitle: {
    color: textColor,
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 5,
    marginRight: 5
  },
  layout: {
    container: {
      color: textColor,
      fontSize: 12,
      borderColor: primaryColor,
      borderWidth: "2",
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
      borderBottomLeftRadius: 5,
      padding: 20,
      margin: 20
    },
    subContainer: {
      fontSize: 12,
      padding: 5,
      margin: 5
    },
    row: {
      display: "flex",
      flexDirection: "row"
    },
    bullet: {
      height: "100%"
    }
  }
});

const ListItem = ({ children }) => {
  return (
    <View style={styles.layout.row}>
      <View style={styles.layout.bullet}>
        <Text>{"\u2022" + " "}</Text>
      </View>
      <Text>{children}</Text>
    </View>
  );
};

// Create Document Component
const PDFDocument = () => (
  <Document>
    <Page size="A4" style={styles.page} pageLayout={"twoColumnLeft"}>
      <View style={styles.header}>
        <Text style={styles.title}>Benjamin King</Text>
        <View style={styles.subHeader}>
          <Link
            src="mailto:benjamin.allan.king@gmail.com"
            style={styles.subtitle}
          >
            benjamin.allan.king@gmail.com
          </Link>
          <Link src="http://benjaminallanking.com" style={styles.subtitle}>
            benjaminallanking.com
          </Link>
          <Link src="https://github.com/baking-code" style={styles.subtitle}>
            GitHub
          </Link>
          <Text style={styles.subtitle}>07855535254</Text>
        </View>
      </View>
      <View style={styles.layout.container}>
        {data.home[1].description.map((para, i) => (
          <Text
            key={i}
            style={{
              marginBottom: i < data.home[1].description.length - 1 ? 10 : 0
            }}
          >
            {para}
          </Text>
        ))}
      </View>
      <Text style={styles.sectionTitle}>Experience</Text>
      {getExperience()}
      <View style={{ marginTop: 10 }} break={true}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.layout.container}>
          <Text>{getSkills()}</Text>
        </View>
      </View>
      <Text style={styles.sectionTitle}>Education</Text>
      <View style={styles.layout.container}>
        <Text>{data.education[0].description.join(" ")}</Text>
      </View>
      <Text style={styles.sectionTitle}>Interests</Text>
      <View style={styles.layout.container}>
        <Text>{data.about[1].description.join(". ")}</Text>
      </View>
    </Page>
  </Document>
);
export default PDFDocument;

function getExperience() {
  const expByKey = groupBy(data.experience, "company");
  const toReturn = [];

  each(expByKey, (items, key) => {
    items.forEach((job, jobIndex) => {
      const companyDateRange = data.jobs[key] || job.date;
      const displayCompany = key;
      const displayRole = job.role || "";

      toReturn.push(
        <View
          style={{ marginTop: 10 }}
          key={`${key}-${jobIndex}`}
          break={job.pdfBreak}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 20,
              marginBottom: -18
            }}
          >
            <Text style={styles.jobTitle}>
              {displayCompany}
              {displayRole && " - "}
              {displayRole}
            </Text>
            <Text style={styles.jobTitle}>{job.date || companyDateRange}</Text>
          </View>
          <View style={styles.layout.container}>
            {job.description.map((d, i) => (
              <ListItem key={i}>{d}</ListItem>
            ))}
          </View>
        </View>
      );
    });
  });

  return toReturn;
}

function getSkills() {
  const skillsMap = new Map();

  data.experience.forEach((job) => {
    if (job.words) {
      job.words.forEach((word) => {
        if (word.weight >= 10) {
          if (!skillsMap.has(word.text)) {
            skillsMap.set(word.text, word.weight);
          } else {
            skillsMap.set(
              word.text,
              Math.max(skillsMap.get(word.text), word.weight)
            );
          }
        }
      });
    }
  });

  const skills = Array.from(skillsMap.entries())
    .sort((a, b) => {
      if (b[1] !== a[1]) {
        return b[1] - a[1];
      }
      return a[0].localeCompare(b[0]);
    })
    .map(([text]) => text.charAt(0).toUpperCase() + text.slice(1));

  return skills.join(", ");
}
