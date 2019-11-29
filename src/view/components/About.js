import React from "react";
import { LoremIpsum } from "lorem-ipsum";
import "./About.css";
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 20,
    min: 15
  },
  wordsPerSentence: {
    max: 16,
    min: 10
  }
});

class About extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="about">
        <h1>About</h1>
        <p>{lorem.generateParagraphs(1)}</p>
        <h3>What we do</h3>
        <p>{lorem.generateParagraphs(1)}</p>
      </div>
    );
  }
}
export default About;
