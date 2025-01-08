import "./SwitchingPages.css";

export default function SwitchingPages() {
  return (
    <div>
      <ul className="wrap-sp">
        <li className="previous-page">Previous</li>

        <ul className="wrap-number-page-sp">
          <li className="number-page">1</li>
          <li className="number-page">2</li>
          <li className="number-page">3</li>
        </ul>

        <li className="next-pages">Next Page</li>
      </ul>
    </div>
  );
}
