import React from 'react';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Head from '@docusaurus/Head';


function Hero() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <header className="masthead">

	<div className="row">
	<div className="col"><object><img display="block" width="420px" src={useBaseUrl("img/developer.gif")} /></object></div>
	<div className="col">
        <h1>{siteConfig.title}</h1>
		<h3>A documentation hub for CKB developers</h3>
        <Link
          to={useBaseUrl("docs/tools")}
          className="button button--primary button--outline button--lg"
        >
          Learn More
        </Link>
      </div>
	</div>
    </header>
  );
}
       /* <h3>{siteConfig.tagline}</h3>*/
function Feature({ title, children, color = "primary" }) {
  const h2 = "text";
  return (
    <div className="col">
      <h2 className={"text--center text--" + color} style={{ color }}>
        {title}
      </h2>
      <p className="text--center">{children}</p>
    </div>
  );
}

function Body() {
  return (

    <main className="container">
	  
      <div className="row">

        <Feature>
		<img src={useBaseUrl("img/tippy.png")} />
          The <b>Lumos</b> framework with powerful modules saves you the hassle of creating code for CKB queries and transactions.<br/>

		  <a href="">Learning More</a>
        </Feature>
        <Feature color="#BA00AC">
		<img src={useBaseUrl("img/tippy.png")} />
         <b>Tippy</b> helps set up and manage CKB nodes. It can install and start running a CKB node by one simple click.
        </Feature>
        <Feature title="Easy to Use" color="#00B100">
          The <b>Lumos</b> framework is open source, and can be used on Mac, Linux and windows machines.
        </Feature>
      </div>
	  
    </main>
  );
}
export default function Home() {
  return (
    <Layout>
	<Head>
</Head>
      <Hero />
      <Body />
	  
    </Layout>
  );
}
