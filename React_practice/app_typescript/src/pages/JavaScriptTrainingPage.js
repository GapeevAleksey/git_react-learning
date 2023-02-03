import React from 'react';

const JavaScriptTrainingPage = () => {
  // ====================================

  function toCamelCase(str) {


    const replacedStr = str.replace(/-/g, '$$').replace(/_/g, '$$');

    const separetedStr = replacedStr.split('$');
    console.log(separetedStr);
    return separetedStr
      .map((item, index) => {
        if (index > 0) {
          return item[0].toUpperCase() + item.slice(1);
        }

        return item;
      })
      .join('');
  }
  console.log(toCamelCase('true_The-stealth-warrior_my'));

  // ====================================

  return <div>JavaScriptTrainingPage</div>;
};

export default JavaScriptTrainingPage;
