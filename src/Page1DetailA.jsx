import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);

  const history = useHistory();
  //遷移元のページに戻る
  const onClickBack = () => history.goBack();
  return (
    <div>
      <h1>Page1DetailAページです</h1>
      <br />
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
