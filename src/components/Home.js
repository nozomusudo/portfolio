import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
      <div>
        <h2>Nozomu SUDO</h2>
        <p>Architecture, U-Tokyo, M2</p>
        <div style={projectListStyles}>
          {projects.map((project, index) => (
            <Card 
              key={index} 
              title={project.title} 
              subTitle={project.subTitle} 
              tags={project.tags}
              description={project.description} 
              url={project.url} 
              externalLink={project.externalLink}
            />
          ))}
        </div>
      </div>
    );
  }
  
  export default Home;


  const projectListStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px', // Cardコンポーネント間の間隔を設定
  };

const projects = [
    {
      title: "CHIMERA, Wood NFT Project",
      subTitle: "",
      tags: ["robot-arm","nft","forestry"],
      description: "CHIMELA-CLT is a unique form clt by uneven woods.  I proposed a system involving robotic arm processing of natural wood and a value-back propagation system using NFTs, addressing wood production, distribution, construction methods, and design. Additionally, for the exhibition, I implemented a demo app for the new wood distribution and AR to connect the physical and information environments. Both the work and its process are entirely Chimera projects.",
      url: "/project1",
      externalLink: 'https://woodnft.github.io/woodnft-demo/#/',
    },
    {
      title: "NESS",
      subTitle: "SubTitle 2",
      tags: ["image-generation-ai","additional-training","bottomup-workshop"],
      description: "NESS is a project team exploring new ways of urban creation using image-generating AI. In the context of community building, local attachment, and landscape archives, how should AI be utilized? We conceptualize image-generating AI as a convivial tool, developing workshops and products that enable civic participation, data acquisition of community will, and consensus building. Our aim is to explore novel methodologies such as extracting and constructing local identity using AI and facilitating urban planning discussions based on generated images, spanning across practice, research, and art.",
      url: "/project2",
      externalLink: 'https://ness-ness.studio.site/',
    },
    {
      title: "Bind-Inflation",
      subTitle: "SubTitle 3",
      tags: ["air","inflatable","simulation"],
      description: "A proposal for a new form of inflatable structure involves restraining the expansion of a balloon (air mattress) that tends to spread out in a flat shape by attaching strings to its surface, causing it to autonomously form curved surfaces. This structural system contrasts with membrane tensegrity in that the facing material acts as a compressive element, while the strings serve as tensile elements.",
      url: "/project3",
      externalLink: "https://mtodo.myportfolio.com/bind-inflation",
    },
    {
      title: "ASIBA, architecture studio for impact based action",
      subTitle: "",
      tags: ["incubation","association","education"],
      description: "ASIBA designs and operates short-term, hands-on incubation programs (12 weeks) and one-day workshops tailored for students in architecture and urban studies. We aim to create environments where architecture students can implement their proposals with a sense of ownership, expanding the possibilities within the architecture and urban domains.",
      url: "/project4",
      externalLink: 'https://asiba.or.jp/',
    },
  ];

  const cardStyles = {
    card: {
      background: 'transparent',
      width: '100%',
      cursor: 'pointer', // クリック可能なカーソルを表示
      transition: 'transform 0.2s', // カードをクリックしたときの視覚効果
    },
    title: {
      fontFamily: 'Roboto',
      margin: '0px',
      fontSize: '30px',
      fontWeight: '500'
    },
    subTitle: {
      fontFamily: 'Roboto Mono, monospace',
      margin: '0px',
    },
    description: {
      fontFamily: 'Roboto Condensed, sans-serif',
      margin: '0px',
    },
    tagContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: '8px',
      margin: '0px',
    },
    tag: {
      fontFamily: 'Roboto',
      fontSize: '16px',
      fontWeight: '500'
    }
  };



  
export function Card({ title, subTitle, tags, description, url, externalLink }) {
  const handleClick = () => {
    if (externalLink) {
      window.open(externalLink, '_blank');
    }
  };

  const handleMouseEnter = (event) => {
    event.currentTarget.style.backgroundColor = '#433D8B'; // ホバー時の背景色
  };

  const handleMouseLeave = (event) => {
    event.currentTarget.style.backgroundColor = 'transparent'; // デフォルトの背景色に戻す
  };



    return (
      <div style={cardStyles.card} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <h3 style={cardStyles.title}>{title}</h3>
        {/*<h4 style={cardStyles.subTitle}>{subTitle}</h4>*/}
        <div style={cardStyles.tagContainer}>
        {tags.map((tag, index) => (
          <span key={index} style={cardStyles.tag} >#{tag}</span>
        ))}
        <div style={cardStyles.description}>{description}</div>
      </div>
        {/*<Link to={url}>Learn More</Link>*/}
      </div>
    );
  }