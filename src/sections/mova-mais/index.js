import React from 'react';

import WorkPage from '../work-page';

import WorkHead from '../../components/work-head';

// Assets
import movaMais from './media/mova-mais.png';
import posterVideo from './media/video-poster.jpg';
import video from './media/video.mp4';
import mockup from './media/mockup.jpg';
import step01 from './media/step1.png';
import step02 from './media/step2.png';
import step03 from './media/step3.png';
import dailyGoal from './media/daily-goal.png';
import engagement01 from './media/engagement01.png';
import engagement02 from './media/engagement02.png';
import engagement03 from './media/engagement03.png';
import points01 from './media/points01.png';
import points02 from './media/points02.png';
import other01 from './media/other01.png';
import other02 from './media/other02.png';
import other03 from './media/other03.png';
import other04 from './media/other04.png';
import other05 from './media/other05.png';
import guidelineColors from './media/guideline-colors.png';
import guidelineFont from './media/guideline-font.png';
import guidelineIcons from './media/guideline-icons.png';
import counter from './media/counter.png';
import googlePlay from './media/google-play.png';
import appleStore from './media/apple-store.png';

function Section() {
  return (
    <section className="mm">

      {/*
        Work Head
        Disabled for small devices
      */}
      { window.innerWidth >= 480 &&
        <WorkHead
          name="mm"
          title="Mova Mais"
          category="app"
          src={video}
          poster={posterVideo}
          type="video"
        />
      }

      {/* Intro */}
      <div className="work-intro">
        <div className="container">
          <img src={movaMais} alt="Mova Mais" />
          <h2>Concept</h2>
          <h3 className="work-intro__subtitle">Earn points for doing exercises.</h3>
          <p className="work-intro__description">The platform has how objective encourage people to go out of the sedentary lifestyle, following the routine of physical activities and rewarded with points of loyalty programs, which can be exchanged for flights, electronics and many others.</p>
        </div>
      </div>

      {/* Mockup */}
      <div className="container container--full">
        <img src={mockup} alt="" />
      </div>

      {/* Objective */}
      <div className="work-objective">
        <div className="container">
          <h2>Objective</h2>
          <p>Present clearly the value proposal, always having a consistent growing of the user’s base, linked to a friendly, concise and user-focused interface.</p>
        </div>
      </div>

      {/* Step 01 */}
      <div className="work-step">
        <div className="container">
          <h3 className="work-step__title">Flow</h3>
          <ul className="work-flow">
            <li className="work-flow__item work-flow__item--monitor">
              <p className="work-flow__item__text">Monitor<br /> physical activities</p>
            </li>
            <li className="work-flow__item work-flow__item--daily">
              <p className="work-flow__item__text">Reach the<br /> daily goal</p>
            </li>
            <li className="work-flow__item work-flow__item--convert">
              <p className="work-flow__item__text">Join points<br /> to convert</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Step 02 */}
      <div className="work-step work-step--mm02">
        <div className="container">
          <h3 className="work-step__title">Walkthroughs</h3>
          <p className="work-step__description">The onboarding experience was projected to be simple and didactic, without leaving to be attractive since the first moment, so the importance of having clear and playful language.</p>
          <ul className="chess-list chess-list-walkt">
            <li>
              <div className="chess-list__info">
                <p>“Sign up for one tracking app and connect your account.”</p>
              </div>
              <div>
                <img src={step01} alt="" />
              </div>
            </li>
            <li>
              <div className="chess-list__info">
                <p>“Monitor your activities by the app which you connected with.”</p>
              </div>
              <div>
                <img src={step02} alt="" />
              </div>
            </li>
            <li>
              <div className="chess-list__info">
                <p>“Reach your daily goal and accumulate points for conversion.”</p>
              </div>
              <div>
                <img src={step03} alt="" />
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Step 03 */}
      <div className="work-step work-step--mm03">
        <div className="container">
          <h3 className="work-step__title">Daily Goal</h3>
          <p className="work-step__description">One of the biggest goals of the app is to do with what the user feel always motivated to exercise, because of this we show incentives messages, mainly not to lose the exercise’s sequence.</p>
        </div>
        <div className="mm__daily-goal__image">
          <img src={dailyGoal} alt="" />
        </div>
      </div>

      {/* Step 04 */}
      <div className="work-step work-step--mm04">
        <div className="container">
          <h3 className="work-step__title">Engagement</h3>
          <p className="work-step__description">Retaining the user is always a big challenge being treated about physical activities, for that we elaborated a feature called “Combo”, which benefits with more points the user that reaches the daily goal more frequently.</p>
          <ul className="chess-list chess-list-engagement">
            <li>
              <div className="chess-list__info">
                <h4 className="chess-list__title">Reach the goal!</h4>
                <p>You earned <strong>20 points</strong> for achieving your goal for the first time!”</p>
              </div>
              <div>
                <img src={engagement01} alt="" />
              </div>
            </li>
            <li>
              <div className="chess-list__info">
                <h4 className="chess-list__title">Keep your Combo</h4>
                <p>“Creating a goal’s sequence reached you can earn until <strong>40 points</strong> for achievement of the goal.”</p>
              </div>
              <div>
                <img src={engagement02} alt="" />
              </div>
            </li>
            <li>
              <div className="chess-list__info">
                <h4 className="chess-list__title">Rest is important!</h4>
                <p>“You can rest for until <strong>2 followed days</strong> without breaking your Combo.”</p>
              </div>
              <div>
                <img src={engagement03} alt="" />
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Step 05 */}
      <div className="work-step work-step--mm05">
        <div className="container">
          <h3 className="work-step__title">Points</h3>
          <p className="work-step__description">Allowing easy and quick access to the point is crucial, showing it of a clearly way, because it is the finish point of our value promise. In addition, this benefit in our case, act how the “Carrot Metaphor”, being it the main motivational factor for many users.</p>
        </div>
        <div className="container container--full">
          <ul className="two-columns">
            <li className="two-columns__item">
              <img src={points01} alt="" />
            </li>
            <li className="two-columns__item">
              <img src={points02} alt="" />
            </li>
          </ul>
        </div>
      </div>

      {/* Step 06 */}
      <div className="work-step work-step--mm06">
        <div className="container">
          <h3 className="work-step__title">Other Features</h3>
          <ul className="chess-list chess-list--resources">
            <li>
              <div className="chess-list__info">
                <h4 className="chess-list__title">Ranking Of Friends</h4>
                <p>A resource very efficient of stimulus to practice of exercises, which encourages competition between friends, in addition to allowing comments in activities, likes and others social resources.</p>
              </div>
              <div>
                <img src={other01} alt="" />
              </div>
            </li>
            <li>
              <div className="chess-list__info">
                <h4 className="chess-list__title">Tracker</h4>
                <p>Aims to remove eventual obstacles of user in the onboarding flow, and shorten space between exercise’s practice and a concrete benefice. Still in the test phase.</p>
              </div>
              <div>
                <img src={other02} alt="" />
              </div>
            </li>
            <li>
              <div className="chess-list__info">
                <h4 className="chess-list__title">Member Get Member</h4>
                <p>Focused on the acquisition. The user earns points for each friend he indicates, register on the platform and do at least one activate.</p>
              </div>
              <div>
                <img src={other03} alt="" />
              </div>
            </li>
            <li>
              <div className="chess-list__info">
                <h4 className="chess-list__title">Duels</h4>
                <p>Allows users to compete with each other. The resource enables choose of attributes to incentivize competition.</p>
              </div>
              <div>
                <img src={other04} alt="" />
              </div>
            </li>
            <li>
              <div className="chess-list__info">
                <h4 className="chess-list__title">Navegation</h4>
                <p>The menu gives quick access to all resources of the app, as well as feedback about connection of tracker.</p>
              </div>
              <div>
                <img src={other05} alt="" />
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/*
        Guideline
        Disabled for small devices
      */}
      { window.innerWidth >= 480 &&
        <div className="work-step work-step--mm07 work-guideline hide-viewport--min">
          <div className="container">
            <h3 className="work-step__title">Guideline</h3>
            <img src={guidelineColors} alt="" />
            <img src={guidelineFont} alt="" />
            <img src={guidelineIcons} alt="" />
          </div>
        </div>
      }

      {/* Step 08 */}
      <div className="work-step work-step--mm08">
        <div className="container">
          <h3 className="work-step__title">Results</h3>
          <img src={counter} alt="" />
          <p>users around the world.</p>
        </div>
      </div>

      {/* Available In */}
      <div className="mm__available">
        <div className="container">
          <a href="https://play.google.com/store/apps/details?id=com.movamais.app" target="_blank" rel="noopener noreferrer">
            <img src={googlePlay} alt="" />
          </a>
          <a href="https://itunes.apple.com/br/app/mova-mais/id1096302778?l=pt&ls=1&mt=8" target="_blank" rel="noopener noreferrer">
            <img src={appleStore} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}

function MovaMais() {
  return (
    <WorkPage
      section={Section()}
      name="mm"
      position={1}
      theme="light"
    />
  );
}

export default MovaMais;
