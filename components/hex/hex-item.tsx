import animation from '../../public/animation-calculator.png';
import nglMarketing from '../../public/ngl-marketing.png';
import bigIdeas from '../../public/big-ideas-campaign.png';
import digitalAccess from '../../public/digital-campaign.png';
import expressAnimations from '../../public/express-animations.png';
import galsBestPals from "../../public/gals_best_pal.png"
import Image from 'next/image';

import styles from './hex-item.module.css';

const HexProjects = () => {
    return (
        <ul className="clear" id="projects">
            <li className='pusher'></li>
            <li>
                <div>
                    <Image src={animation} alt="Creative Studios animation calculator tool wordpress page" />
                    <h1>Cengage Group - Creative Studios </h1>
                    <p>Animation Calculator Tool</p>
                    <br/>
                    <a style={{fontSize: '20px'}} href='https://cs.cengage.com/animation-calculator' target='_blank' rel='noreferrer'>Go</a>
                </div>
            </li>
            <li>
                <div>
                    <Image src={nglMarketing} alt="National Geographic Learning Marketing site for Secondary Education" />
                    <h1>NGL Secondary Marketing</h1>
                    <p>National Geographic Learning Marketing site for Secondary education</p>
                    <br/>
                    <a style={{fontSize: '20px'}} href='https://ngl.cengage.com' target='_blank' rel='noreferrer'>Go</a>
                </div>
            </li>
            <li>
                <div>
                    <Image src={bigIdeas} alt="Big Ideas Mathematics Marketing campaign for National Geographic Learning" />
                    <h1>NGL Big Ideas Mathematics</h1>
                    <p>Big Ideas 7 page Marketing Campaign</p>
                    <br/>
                    <a style={{fontSize: '20px'}} href='https://ngl.cengage.com/assets/html/bigIdeas' target='_blank' rel='noreferrer'>Go</a>
                </div>
            </li>
            <li>
                <div>
                    <Image src={digitalAccess} alt="National Geographic Learning Digital Access Campaign for secondary education" />
                    <h1>NGL Digital Access</h1>
                    <p>Digital Access 6 Page Campaign</p>
                    <br/>
                    <a style={{fontSize: '20px'}} href='https://ngl.cengage.com/assets/html/digitalAccess' target='_blank' rel='noreferrer'>Go</a>
                </div>
            </li>
            <li className="pusher"></li>
            <li className="pusher"></li>
            <li>
                <div>
                    <Image src={expressAnimations} alt="Creative Studios Wordpress site" />
                    <h1>Cengage Group - Creative Studios</h1>
                    <p>Creative Studios wordpress site</p>
                    <br/>
                    <a style={{fontSize: '20px'}} href='https://cs.cengage.com' target='_blank' rel='noreferrer'>Go</a>
                </div>
            </li>
            <li>
                <div>
                    <Image src={galsBestPals} alt="Gals Best Pal Wordpress site" />
                    <h1>Gals Best Pal - Non Profit Dog Rescue</h1>
                    <p>{`Gals' Best Pal Dog Foster site`}</p>
                    <br/>
                    <a style={{fontSize: '20px'}} href='https://galsbestpal.com' target='_blank' rel='noreferrer'>Go</a>
                </div>
            </li>
        </ul>
    );
}

export default HexProjects;