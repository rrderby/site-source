import React from "react"
import Layout from "../components/layout"
import '../vendor/bootstrap/css/bootstrap.css'
import '../css/rrderby.css'
import SEO from "../components/seo"
import DuesForm from '../components/duesform'
import SuggestionBox from '../components/suggestionBox'



const Payments = () => (

  <Layout>
    <SEO title="Members" keywords={[`roller derby`, `sonoma county`, `rohnert park`, 'north bay', 'resurrection', 'sports']} />
    <meta name="robots" content="noindex, nofollow" />
    <section id="payments" className="secondSection">
  <div className="content-block">
    <div className="row">
      <div className="col-sm-auto mx-auto text-center">
        <h1 className="section-heading text-white">Payments and Forms</h1> </div>
        <div className="col-sm-auto mx-auto text-left">
        <hr className="light my-4" />
        <p className="text-main mb-4">
        Use the form below to pay dues and other fees. If you need to pay other amounts or have questions, send us an email.
        </p>
        </div>
        <br /><br /><br />
        
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <div style={{margine: "0 auto"}}>
            <DuesForm />
            </div>
          </div>
      </div>
      <div className="row" style={{display: "none"}}>
          <div className="col-lg-12 text-center">
            <SuggestionBox />
          </div>
      </div>
      <br />
      <div className="row" style={{display: "none"}}>
        <div className="col-lg-12-text-center">
        <h3><a href="https://docs.google.com/forms/d/e/1FAIpQLScQaFNUfZjEjISN8Xbs_dg-_5u2LKWYejfO74sOPAXK4UL0Dg/viewform?usp=sf_link" target="_new">Email Account Request Form</a></h3>
        <br />
        <h3><a href="https://docs.google.com/forms/d/e/1FAIpQLSd0IlsHpZlLZdm939sItUaWd0Fg1v12aEPmN47LqlLNTs7Msw/viewform?usp=sf_link" target="_new">Software and File Access Request Form</a></h3>
        
       </div>
      </div>
      <br />
    </div>
</section>

  </Layout>

)

export default Payments
