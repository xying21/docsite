import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Core Concepts</>,
    //imageUrl: 'img/getting-started.svg',
    description: (
      <>
        The core concepts of Nervos CKB are the prerequisite knowledge for the development on Nervos CKB.
      </>
    ),
    pageUrl: "docs/learn/ckb"
  },
  {
    title: <>Development Stacks</>,
    //imageUrl: 'img/sdks-samples.svg',
    description: (
      <>
      The documentation includes the guides of the framework, SDKs, tools developed by Cryptape for developing applications on Nervos CKB.
      </>
    ),
    pageUrl: "docs/tools"
  },
];

function Feature({imageUrl, title, description, pageUrl}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--6 flx-gray', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h2>{title}</h2>
      <p>{description}</p>
      <p className="learn-more"><a href={pageUrl}>Learn more →</a></p>
    </div>
    
  );
}

const iframe = '<iframe src="https://d3metalab.substack.com/embed" width="480" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>'

function Iframe(props) {
  return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
}



function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title="Home"
      description="Add strong authentication, fine-grained authorization in your apps, devices, and APIs.">
      <header className={classnames('hero hero--secondary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}> 
            <Link
              className={classnames(
                'button cta-btn button--outline button--primary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/basics/intro')}>
              <i className="feather icon-arrow-right"></i> Get started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
