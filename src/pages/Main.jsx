import MainEvent from "./MainEvent";
import MainTopList from "./MainTopList";

function Main({ data }) {
  return (
    <>
      <MainEvent />
      <MainTopList data={data} />
    </>
  );
}

export default Main;
