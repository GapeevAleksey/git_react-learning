import React from 'react';
import { useActions } from '../../hooks/actions';
import { IRepo } from '../../models/models';
import '../app/app.css';
const RepoCard = ({ repos }: { repos: IRepo[] }) => {
  const { addToFavorite } = useActions();

  const addFavorite = (repo: string) => {
    addToFavorite(repo);
  };
  return (
    <ul>
      {repos?.map((repo: IRepo) => (
        <li key={repo.id} className="repo-card">
          <a href={repo.html_url} target="_blank">
            <span>{repo.full_name}</span>
            <p>
              Forks: <span>{repo.forks_count}</span> Watchers:{' '}
              <span>{repo.watchers_count}</span>
            </p>
            <p>{repo?.description}</p>
            <div>
              <button
                className="btn amber accent-2"
                onClick={(e) => {
                    e.preventDefault()
                  addFavorite(repo.html_url);
                }}
              >
                Like
              </button>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default RepoCard;
