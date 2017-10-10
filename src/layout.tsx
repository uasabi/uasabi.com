import * as React from 'react';
import {cat} from 'shelljs';
import * as marked from 'marked';

const tachyons = cat('./node_modules/tachyons/css/tachyons.min.css');

function NavigationFooter() {
  return <ul className="list tc pa0 mt0 pt4">
    <li className="dib"><a href="/" className="link dib sans-serif f5 b white ph2">Home</a></li>
    <li className="dib"><a href="/careers" className="link dib sans-serif f5 b white ph2">Careers</a></li>
  </ul>
}

export function Layout({Content}: {Content: () => JSX.Element}) {
  return <html lang="en" className="bg-light-blue">
  <head>
    <meta charSet="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
    <link rel="manifest" href="/manifest.json"/>
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
    <meta name="theme-color" content="#ffffff"/>
    <style dangerouslySetInnerHTML={{__html: tachyons}}></style>
    <title>Uasabi</title>
  </head>
  <body className="bg-near-white ba b--light-blue bw3">
  <Content />
  <footer className="bg-dark-gray">
    <NavigationFooter />
    <ul className="list tc pa0 mt0 pt4">
      <li className="dib">
        <a href="https://github.com/uasabi" className="link dib w2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.4 43.4">
            <style>
              {`.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}`}
            </style>
            <path className="st0" d="M21.6 6.1c-9 0-16.3 7.3-16.3 16.3 0 7.2 4.7 13.3 11.1 15.5.8.1 1.1-.4 1.1-.8v-2.8c-4.5 1-5.5-2.2-5.5-2.2-.7-1.9-1.8-2.4-1.8-2.4-1.5-1 .1-1 .1-1 1.6.1 2.5 1.7 2.5 1.7 1.5 2.5 3.8 1.8 4.7 1.4.1-1.1.6-1.8 1-2.2-3.6-.4-7.4-1.8-7.4-8.1 0-1.8.6-3.2 1.7-4.4-.2-.4-.7-2.1.2-4.3 0 0 1.4-.4 4.5 1.7 1.3-.4 2.7-.5 4.1-.5 1.4 0 2.8.2 4.1.5 3.1-2.1 4.5-1.7 4.5-1.7.9 2.2.3 3.9.2 4.3 1 1.1 1.7 2.6 1.7 4.4 0 6.3-3.8 7.6-7.4 8 .6.5 1.1 1.5 1.1 3V37c0 .4.3.9 1.1.8C33.4 35.6 38 29.5 38 22.3c-.1-8.9-7.4-16.2-16.4-16.2z"/>
          </svg>
        </a>
      </li>
    </ul>
    <p className="tc f6 lh-copy serif mb0 pb3 light-silver">&copy;Copyright 2017</p>
  </footer>
</body>
</html>
}

function Container(Content: () => JSX.Element) {
  return <div className="container">
  <div className="logo w3 fl-l center pa2 mn-l">
    <Logo />
  </div>
  <div className="container w-80-m w-60-l center"><Content /></div>
  </div>
}

function Navigation({name}: {name: string}) {
  return <ul className="list tc pa0 pt5-l">
    <li className="dib"><a href="/" className="link dib sans-serif f5 b dark-gray bb b--light-blue bw2 pb1">{name}</a></li>
  </ul>;
}

function Logo() {
  return <a href="/">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110.4 110.4">
      <path fill="#48A4D7" d="M89.7 85.1l-6.1-10.6-2-3.6-17.7-31.1-6.2 10.6 11.7 20.5 2.1 3.6 6 10.6 2 3.6h.3-58l-6.2 10.5 30.2.1h52l-8.1-14.2z"/>
      <path fill="#89EBEB" d="M37.6 85.1h35.8l-6.1-10.6H23.2l1.5-2.6.6-1 22.3-39 5.7-10.1-5.7-9.9-.4-.7-34.1 59.7L5 85.1h12.1z"/>
      <path fill="#00CACC" d="M47.5 39.8L29.4 70.9h12.3l5.9-10.1 6-10.4 2.1-3.6 6.1-10.6 2.1-3.5.1-.3 22.3 38.5L94.5 85h12.2l-8.1-14.1L64 11.3 57.8 22 47.6 39.7z"/>
    </svg>
  </a>
}

export function Home() {
  return <div className="container">
    <div className="logo w3 fl-l center pa2 mn-l">
    <Logo />
    </div>
    <div className="container w-80-m w-60-l center">
      <header>
        <Navigation name="Home"/>
        <h2 className="sans-serif f2 f1-ns lh-title measure-narrow dark-gray pa3 pt4">Uasabi is a software consultancy delivering testable and predictable code from London, UK</h2>
        <p className="serif f4 lh-copy measure-wide pa3 pt0">In the past decade Uasabi has been practising software development with a focus on testing and automation. Our expertise has been recognised through our work with companies in the financial and public sector.</p>
        <div className="more w3 center pt5-l">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67 67">
            <path fill="#96CCFF" d="M33.5 57.038l-1.9-1.7-21-18 3.9-4.5 16 13.8v-41.5h6v41.5l16.1-13.8 3.9 4.5-21 18-2 1.7z"/>
          </svg>
        </div>
      </header>
      <section className="pt2">
        <h3 className="f2 tc sans-serif dark-gray ph3 pb4 pb5-ns">Uasabi believes in creating meaningful work through values</h3>
        <ul className="list cf ph3">
          <Block
            index={1}
            title={'People-first engineering'}
            description={'People don\'t wish for software, they seek usable solutions that improve their lives. Software is simply a means to an end, a tool that we use to give people the freedom to create, communicate, and save time. We believe that during the design process we should never lose sight of what the user *really* wants.'}/>
          <Block
            index={2}
            title={'Predictable code'}
            description={'Every line of code should have a dedicated purpose and clear function. What we do is not about boundless artistic expression, it is about providing people with a reliable and trustworthy tool. We keep our work simple and open so that we can give the world something powerful. Something that people can use, adapt, and rely on.'}/>
        </ul>
        <ul className="list cf ph3">
          <Block
            index={3}
            title={'Pragmatism always'}
            description={'The world changes constantly, ebbing and flowing as it goes. Our solutions must accept this reality and be fluid and simple to change. They must be able to react to the world around them. Delivering software is not a one and done journey. We do it. We do it right. Then we do it even better. That is our journey.'}/>
          <Block
            index={4}
            title={'Clear communication'}
            description={'Communication is the life-blood of every creative journey. We work tirelessly to understand the needs of our users to ensure that we create something that fulfils a need. By building relationships on a foundation of intellectual curiosity, social tolerance, and mutual respect, we create connections which result in the tools the world deserves.'}/>
        </ul>
      </section>
    </div>
    <section className="bg-lightest-blue pa4 pb5 mt6-l">
      <div className="container w-80-m w-60-l center">
        <h2 className="sans-serif f3 dark-gray">Contact us</h2>
        <p className="lh-copy measure serif">To learn how we can help you shape your future, get in touch today.</p>
        <form name="contact" action="thank-you" data-netlify>
          <fieldset className="cf bn ma0 pa0">
            <div className="w-60-l">
              <label className="clip" htmlFor="email-address">Email Address</label>
              <input className="f6 f5-l input-reset bn black-80 bg-white pa3 lh-solid w-100 br2-ns br--left-ns serif" placeholder="Your email address" type="text" name="email-address" value="" id="email-address"/>
              <textarea className="f6 f5-l input reset bn black-80 bg-white pa3 lh-solid w-100 br2-ns br--left-ns serif mt2 mb2" name="message" id="message" cols={10} rows={10} placeholder="Your message"></textarea>
              <input className="f6 f5-l button-reset pv3 tc bn bg-animate bg-navy hover-bg-dark-blue white pointer w-100 w-25-m w-20-l br2-ns br sans-serif b" type="submit" value="Send"/>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  </div>;
}

function Block({description, title, index}: {title: string, description: string, index: number}) {
  return <li className="f4 w-80-m w-50-l fl-l center">
    <div className="cf"><span className="fl w2 sans-serif b light-blue">{index}</span><hr className="ba bw1 b--light-blue w-40 w-60-ns fl"/></div>
    <h4 className="sans-serif dark-gray pl4-l pt3-l">{title}</h4>
    <p className="serif lh-copy measure-narrow pl4-l">{description}</p>
  </li>
}

function JobSpec({copy}: {copy: string}): JSX.Element {
  const renderer = new marked.Renderer();
  renderer.link = (href: string, title: string, text: string) => `<a href="${href}" class="link blue" target="_blank">${text}</a>`
  const markdownAsHtml = marked(copy, {renderer});
  return <div dangerouslySetInnerHTML={{__html:markdownAsHtml}} className="measure-wide lh-copy pb5"/>
}

export function Careers() {
  const Typescript = `
Uasabi Ltd is looking for a talented engineer on a freelance basis to help develop distributed application using functional programming, Typescript and Redis.

You will work on:

- A framework to build distributed applications using the actor patterns
- Develop integrations with REST API & Websockets for real-time analysis of forex prices

#### About you

- You can demonstrated your Typescript skills with a sample project
- You have experience in creating definition types for Typescript
- You have experience in TDD and used snapshotting and data driven tests
- You used datatypes such as Maybe, Either and Optional in the past
- You know what I mean when I say _"can you even lift bro?"_

#### Arrangement & renumeration

This is an ongoing **REMOTE** engagement on a freelance basis. Please let us know your daily rate.

#### How to apply

Write a simple proof of concept to compute the price spread between Bitcoin exchanges. You can find the details on how to complete the challenge at the following link: [https://github.com/uasabi/bitcoin-challenge](https://github.com/uasabi/bitcoin-challenge).

Once you solved the challenge, please send us a link with your repository and a link to your Linkedin profile at [careers@uasabi.com](mailto:careers@uasabi.com).`
  const Kubernetes = `
Uasabi Ltd is looking for a talented engineer on a freelance basis to help:

- create automation scripts for Kubernetes based applications
- authoring and designing training material for educational content

#### About you

- You are a talented engineer
- You are experienced in Docker
- You can clearly articulate how to architect applications to best leverage microservices
- You deployed and scaled applications on Kubernetes
- You're patient and understand the value in pair programming and knowledge sharing
- You fluent in either Java, Scala, Python or Node.js
- You use CI/CD on a daily basis and can’t imagine a world without it

#### Arrangement & renumeration

This is an ongoing **REMOTE** engagement on a freelance basis. Please let us know your daily rate.

#### How to apply

Write a deployment for Kubernetes. You can find the details on how to complete the challenge at the following link: [https://github.com/uasabi/kubernetes-challenge](https://github.com/uasabi/kubernetes-challenge).

Once you solved the challenge, please send us a link with your repository and a link to your Linkedin profile at [careers@uasabi.com](mailto:careers@uasabi.com).`;

  return Container((() =>
  <div>
    <header>
      <Navigation name="Careers"/>
      <h2 className="sans-serif f2 f1-ns lh-title measure-narrow dark-gray pa3 pt4 tc tl-ns">Careers</h2>
    </header>
    <section className="pa3 pt2 pb4-ns mb4-ns">
      <p className="sans-serif copy measure">Current openings:</p>
      <ul className="sans-serif pt1">
        <li className="pb2"><a href="#typescript" className="link b dark-gray">REMOTE - Typescript engineer</a></li>
        <li className="pv2"><a href="#kubernetes" className="link b dark-gray">REMOTE - Kubernetes engineer</a></li>
      </ul>
      <ul className="list pl0 pt4">
        <li className="sans-serif" id="typescript">
          <h3>REMOTE - Typescript engineer</h3>
          <JobSpec copy={Typescript} />
        </li>
        <li className="sans-serif" id="kubernetes">
          <h3>REMOTE - Kubernetes engineer</h3>
          <JobSpec copy={Kubernetes} />
        </li>
      </ul>
    </section>
  </div>
  ));
}