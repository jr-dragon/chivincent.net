import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type Image = {
  png: string;
  webp: string;
  avif: string;
}

type FeatureItem = {
  title: string;
  image: Image;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'SWE, Web Backend - 後端工程師',
    image: {
      png: require('@site/static/img/avatar.png').default,
      webp: require('@site/static/img/avatar.webp').default,
      avif: require('@site/static/img/avatar.avif').default,
    },
    description: (
      <div>
        <blockquote>PHP 是世界上最好的語言</blockquote>
        <p>精通 PHP 與 Laravel，Laravel Ecosystem 貢獻者。</p>
        <p>熟悉 Python, Go 與 C，因為跟前端緣份不夠所以只略懂 Javascript / Typescript。</p>
      </div>
    ),
  },
  {
    title: 'Furry - 獸控',
    image: {
      png: require('@site/static/img/furry.png').default,
      webp: require('@site/static/img/furry.webp').default,
      avif: require('@site/static/img/furry.avif').default,
    },
    description: (
      <div>
        <blockquote>對，我就不獸控制</blockquote>
        <p>2023 年初因加入 VRChat 而成為獸控，喜歡毛裝，或許哪天會考慮購入毛裝或電子毛裝？</p>
        <small>有其它方面的興趣，但如果你有幸找到我也不會承認 :3</small>
      </div>
    ),
  },
  {
    title: 'Gamer - 玩家',
    image: {
      png: require('@site/static/img/vrchat.png').default,
      webp: require('@site/static/img/vrchat.webp').default,
      avif: require('@site/static/img/vrchat.avif').default,
    },
    description: (
      <div>
        <blockquote>很喜歡薩爾達玩家的一句話：啊？</blockquote>
        <p>從《薩爾達傳說：曠野之息》成為薩爾達系列粉絲，與《薩爾達傳說：王國之淚》遊戲時數合計破千小時並持續增加中。</p>
        <p>經常在 VRChat 上出沒，上圖為主要使用的 Avatar，以 <a href="https://timal.booth.pm/items/4473466">Zeffie</a> 為基礎改製，同時也是第二獸設。</p>
      </div>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <img className={styles.featureSvg} src={image} role="img" /> */}
        <picture>
          <source srcSet={image.avif} type="image/avif"/>
          <source srcSet={image.webp} type="image/webp"/>
          <img src={image.png}/>
        </picture>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
