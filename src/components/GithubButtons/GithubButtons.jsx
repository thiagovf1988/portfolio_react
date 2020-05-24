import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/thiagovf1988/portfolio_react/fork"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Fork my portfolio on GitHub"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/thiagovf1988/portfolio_react"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star my portfolio on GitHub"
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
