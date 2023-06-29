export default function Home() {
  return (
    <div>
      <a download href="/api/app.pdf">
        Download PDF from app directory
      </a>
      <br />
      <a download href="/api/pages.pdf">
        Download PDF from pages directory
      </a>
    </div>
  );
}
