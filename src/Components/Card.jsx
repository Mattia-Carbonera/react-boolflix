export default function Card({ title, originalTitle, language, rate }) {
  return (
    <div className="card">
      <ul>
        <li>{title}</li>
        <li>{originalTitle}</li>
        <li>{language}</li>
        <li>{rate}</li>
      </ul>
    </div>
  );
}
