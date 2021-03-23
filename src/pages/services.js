import * as React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import Infoblock from "../components/Reuseable/Infoblock"
import Contact from '../components/Contact/contact'

const ContactPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
    img={data.img.childImageSharp.fluid}
    title="we provide online courses"
    subtitle=""
    heroclass="about-background"
    />
    <p>Some students don’t have a college where they live. Others do, but can’t quit their full-time jobs or leave their family to study at a university. So we emphasise on online learning and provide the best courses available in field of web development and mobile development you will have 24*7 hour access and downlodable resources you will get the best courses at affordable price. Since everything is available online, accessing class materials and submitting work is very convenient. Exactly when and where this takes place is up to student, as long as assignment due dates are met.
    Many students in classroom environments aren’t comfortable speaking in public. In an online environment, it can be much easier to share thoughts with others. With 74 percent of people suffering from speech anxiety, according to the National Institute of Mental Health, online education tends to foster better class participation.
    These course will help you improve your skill set and also help in building your proffesional carrier in the field of web and mobile app. development 
    </p>
    <Infoblock heading="About our CEO"/>
    <Contact/>
  </Layout>
)
export const query = graphql`
{
  img:file(relativePath:{eq: "contact.png"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
export default ContactPage
