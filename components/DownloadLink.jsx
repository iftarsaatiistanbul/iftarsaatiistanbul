export default function DownloadLink({ href, text }) {
  return (
    <a
      href={href}
      download
      className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F3D2E] hover:underline"
    >
      <span aria-hidden="true">⬇️</span>
      <span>{text}</span>
    </a>
  );
}
