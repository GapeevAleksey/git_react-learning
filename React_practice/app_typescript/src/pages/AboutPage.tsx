import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const backToTodos = useNavigate();
  return (
    <div>
      <p>AboutPage</p>

      <button className="btn" onClick={() => backToTodos('/')}>
        Вернуться к списку задач
      </button>
    </div>
  );
};

export default AboutPage;
