import React, { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    description: (
      <>
        The Volumetric SDK was designed to be easily installed and
        used to get your application up and running quickly.
      </>
    ),
  },
  {
    title: 'Multiple Language Support',
    description: (
      <>
        Available in Python, C++, and C#, choose the language
        that best fits your development needs.
      </>
    ),
  },
  {
    title: 'Powerful Features',
    description: (
      <>
        Process volumetric data efficiently with our comprehensive
        set of tools and utilities.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
} 