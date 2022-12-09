const RenderComp = ({ renderProp }) => {
  const getData = () => 'Data from Server';
  return <div>{renderProp(getData())}</div>;
};
export default RenderComp;
