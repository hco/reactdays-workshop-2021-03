import React from "react";

interface Props {
  repoName: string;
}

interface State {
  stars: number;
}

export class GitrepoClass extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { stars: 0 };
  }

  componentDidMount() {
    fetch("https://api.github.com/repos/" + this.props.repoName)
      .then((response) => response.json())
      .then((repo) => {
        this.setState({ stars: repo.stargazers_count });
      });
  }

  render() {
    return (
      <div>
        {this.props.repoName} ist ein tolles Repo, es hat {this.state.stars}{" "}
        Sternchen
      </div>
    );
  }
}
