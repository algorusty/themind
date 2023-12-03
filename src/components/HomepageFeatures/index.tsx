import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Import images at the top of your file
import comprehensiveGuideImage from '@site/static/img/mental_health_comprehensive_guide.png';
import personalizedJourneyImage from '@site/static/img/mental_health_personalized_journey.png';
import empatheticSupportImage from '@site/static/img/mental_health_empathetic_support.png';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Comprehensive Mental Health Guide',
    image: comprehensiveGuideImage, // Use the imported image
    description: (
      <>
        "The Mind" offers a detailed, step-by-step approach to understanding various mental health issues, from anxiety to depression and beyond.
      </>
    ),
  },
  {
    title: 'Personalized Journey',
    image: personalizedJourneyImage, // Use the imported image
    description: (
      <>
        Tailor your path through our extensive list of topics, selecting what resonates most with your needs and interests in mental health.
      </>
    ),
  },
  {
    title: 'Empathetic Support',
    image: empatheticSupportImage, // Use the imported image
    description: (
      <>
        Navigate your mental health journey with empathetic guidance and support, fostering an environment of understanding and growth.
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
