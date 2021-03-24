import React, { useState, useEffect } from "react";

interface Props {
  repoName: string;
}

export function Gitrepo({ repoName }: Props) {
  const [repo, setRepo] = useState<any>(null);

  useEffect(() => {
    fetch("https://api.github.com/repos/" + repoName)
      .then((response) => response.json())
      .then(setRepo);
  }, [repoName]);

  if (!repo) {
    return <p>Loading...</p>;
  }

  return (
    <p>
      {repoName} 🌟: {repo.stargazers_count}
    </p>
  );
}
