import RenderComp from './aaaComp';

export function AAAMain(props) {
  return (
    <> <div className="App">
      <RenderComp renderProp={(data) => <h1>Hello: {data}</h1>} />
      <RenderComp renderProp={(data) => <h2>Hi: {data}</h2>} />
      <RenderComp renderProp={(data) => <h3>By!: {data}</h3>} />
    </div></>
   
  );
}
