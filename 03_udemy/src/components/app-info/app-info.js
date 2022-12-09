import stylesAppInfo from './app-info.module.css';

const AppInfo = ({ amountEmployees, amountIncreaseEmployees }) => {
  return (
    <div className={stylesAppInfo.appInfo}>
      <h1>Учет сотрудников</h1>
      <h2>Общее число сотрудников: {amountEmployees}</h2>
      <h2>Премию получат: {amountIncreaseEmployees}</h2>
    </div>
  );
};

export default AppInfo;
