import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2ページです</h1>
      {/* 仮でURLパラメータに100を設定 */}
      <Link to="/page2/99">URL Parameter</Link>
      <br />
      {/* クエリパラメータ */}
      <Link to="/page2/99?name=hoge">Query Parameter</Link>
    </div>
  );
};
