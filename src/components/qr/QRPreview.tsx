import QRCode from "react-qr-code";

type QRPreviewProps = {
  qrValue: string;
  qrRef: React.RefObject<HTMLDivElement | null>;
  downloadPNG: () => void;
};

export default function QRPreview({
  qrValue,
  qrRef,
  downloadPNG,
}: QRPreviewProps) {
  return (
    <div className="bg-slate-800 rounded-xl flex flex-col items-center justify-center p-6">

      <div
        ref={qrRef}
        className="bg-white p-5 rounded-xl"
      >
        <QRCode value={qrValue} size={220} />
      </div>

      <button
        onClick={downloadPNG}
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition"
      >
        📥 Download PNG
      </button>

    </div>
  );
}