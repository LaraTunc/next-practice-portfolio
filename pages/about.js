import Link from "next/link";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout title="About">
      <p>A Javascript programmer</p>
      <img src="/static/JavaScript-Logo.png" alt="Javascript" height="200px"/> 
    </Layout>
  );
};

export default About;