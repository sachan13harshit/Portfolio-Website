import React from "react";
import ReactMarkdown from 'react-markdown';
import { Row } from "react-bootstrap";
import codeforcesStats from '../../../public/images/codeforces_card.svg';
import './Leetcode.css';
import leetcodestats from '../../../public/images/leetcode.svg'

const Leetcode = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="yellow">LeetCode</strong> & <strong className="yellow">Codeforces</strong> Stats
      </h1>
      <div className="stats-container">
        <div className="stat-card">
          <h2 className="stat-heading">LeetCode</h2>
          <img
            src={leetcodestats}
            alt="leetcode Stats"
            className="leetcode"
          />
        </div>
        <div className="stat-card">
          <h2 className="stat-heading">Codeforces</h2>
          <img
            src={codeforcesStats}
            alt="Codeforces Stats"
            className="codeforces"
          />
        </div>
      </div>
    </Row>
  );
}

export default Leetcode;
