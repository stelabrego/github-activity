import GitHubActivity from '../src/github-activity'

window.addEventListener('DOMContentLoaded', () => {
  GitHubActivity.feed({
    username: "stelabrego",
    repository: "portfolio", // optional
    selector: "#github",
    limit: 20 // optional
  });
})