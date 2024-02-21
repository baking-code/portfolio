"use client";
import React from "react";
import {
  Page,
  Text,
  Link,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import { each, keyBy } from "lodash";
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
    marginVertical: 50,
  },
  header: {
    backgroundColor: primaryColor,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 30,
    marginBottom: 10,
    marginTop: -50,
  },
  title: {
    textAlign: "left",
    color: whiteTextColor,
    fontSize: 40,
    fontWeight: "bold",
    flex: 3,
  },
  subHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    flex: 2,
  },
  subtitle: {
    textAlign: "right",
    color: whiteTextColor,
    fontSize: 10,
    fontWeight: "bold",
    display: "flex",
    flexDirection: "row",
  },
  sectionTitle: {
    color: primaryColor,
    textTransform: "capitalize",
    fontSize: 18,
    marginHorizontal: 20,
  },
  jobTitle: {
    color: textColor,
    fontSize: 12,
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
      margin: 20,
    },
    row: {
      display: "flex",
      flexDirection: "row",
    },
    bullet: {
      height: "100%",
    },
  },
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
          <Text style={styles.subtitle}>07855535254</Text>
        </View>
      </View>
      <View style={styles.layout.container}>
        <Text>{data.home[1].description.join(" ")}</Text>
      </View>
      <Text style={styles.sectionTitle}>Experience</Text>
      {getExperience()}
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
  const expByKey = keyBy(data.experience, "company");
  const toReturn = [];
  each(expByKey, (items, key) => {
    debugger;
    if (data.jobs[key]) {
      toReturn.push(
        <View style={{ marginTop: 10 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 20,
              marginBottom: -18,
            }}
            break={index === 3}
          >
            <Text style={styles.jobTitle}>{job.company}</Text>
            <Text style={styles.jobTitle}>{data.jobs[key]}</Text>
          </View>
          {items.map((job) => (
            <View>
              <Text style={styles.jobTitle}>{job.role}</Text>
              <Text style={styles.jobTitle}>{job.date}</Text>
              <View style={styles.layout.container}>
                {job.description.map((d) => (
                  <ListItem>{d}</ListItem>
                ))}
                <Text
                  style={{ fontSize: 10, fontStyle: "italic", paddingTop: 10 }}
                >
                  {"Keywords: "}
                  {job.words.map((w) => w.text).join(" ")}
                </Text>
              </View>
            </View>
          ))}
        </View>
      );
    } else {
      toReturn.push(
        ...items.map((job) => (
          <View style={{ marginTop: 10 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 20,
                marginBottom: -18,
              }}
              break={index === 3}
            >
              <Text style={styles.jobTitle}>
                {job.company}
                {job.role && " - "}
                {job.role}
              </Text>
              <Text style={styles.jobTitle}>{job.role && job.date}</Text>
            </View>
            <View style={styles.layout.container}>
              {job.description.map((d) => (
                <ListItem>{d}</ListItem>
              ))}
              <Text
                style={{ fontSize: 10, fontStyle: "italic", paddingTop: 10 }}
              >
                {"Keywords: "}
                {job.words.map((w) => w.text).join(" ")}
              </Text>
            </View>
          </View>
        ))
      );
    }
  });
  return toReturn;
}
