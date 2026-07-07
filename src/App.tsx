import { useRef, useState } from "react";
import QRCode from "react-qr-code";
import { toPng } from "html-to-image";

type Tab = "url" | "whatsapp";

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("url");

  const [url, setUrl] = useState("");

  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const qrRef = useRef<HTMLDivElement>(null);

const downloadPNG = async () => {
  if (!qrRef.current) return;

  const dataUrl = await toPng(qrRef.current);

  const link = document.createElement("a");
  link.download = "quickqr.png";
  link.href = dataUrl;
  link.click();
};

  const qrValue =
    activeTab === "url"
      ? url || "https://example.com"
      : phone
      ? `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(
          message
        )}`
      : "https://example.com";

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-center">
          🚀 QuickQR Pro
        </h1>

        <p className="text-center text-gray-400 mt-2">
          Generate professional QR Codes instantly.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => setActiveTab("url")}
            className={`px-5 py-2 rounded-lg ${
              activeTab === "url"
                ? "bg-blue-600"
                : "bg-slate-700"
            }`}
          >
            🌐 URL
          </button>

          <button
            onClick={() => setActiveTab("whatsapp")}
            className={`px-5 py-2 rounded-lg ${
              activeTab === "whatsapp"
                ? "bg-green-600"
                : "bg-slate-700"
            }`}
          >
            💬 WhatsApp
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-10">

          {/* Left */}
          <div className="bg-slate-800 rounded-xl p-6">

            {activeTab === "url" && (
              <>
                <label className="block mb-2">
                  Website URL
                </label>

                <input
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com"
                  className="w-full p-3 rounded-lg text-black"
                />
              </>
            )}

            {activeTab === "whatsapp" && (
              <>
                <label className="block mb-2">
                  Phone Number
                </label>

                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="919876543210"
                  className="w-full p-3 rounded-lg text-black"
                />

                <label className="block mt-5 mb-2">
                  Message
                </label>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 rounded-lg text-black"
                />
              </>
            )}
          </div>

          {/* Right */}
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

        </div>

      </div>
    </div>
  );
}