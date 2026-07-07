import { useRef, useState } from "react";
import QRCode from "react-qr-code";
import { toPng } from "html-to-image";
import Header from "./components/layout/Header";
import TypeTabs from "./components/tabs/TypeTabs";

type Tab =
  | "url"
  | "whatsapp"
  | "email"
  | "phone"
  | "text"
  | "wifi";

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("url");

  const [url, setUrl] = useState("");

  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

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
    : activeTab === "whatsapp"
    ? phone
      ? `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`
      : "https://example.com"
    : activeTab === "email"
    ? `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    : "https://example.com";

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-5xl mx-auto">

      

      <TypeTabs
     activeTab={activeTab}
     setActiveTab={setActiveTab}
      />

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
            {activeTab === "email" && (
  <>
    <label>Email</label>

    <input
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="example@gmail.com"
      className="w-full p-3 rounded-lg text-black"
    />

    <label className="block mt-4">Subject</label>

    <input
      value={subject}
      onChange={(e) => setSubject(e.target.value)}
      placeholder="Subject"
      className="w-full p-3 rounded-lg text-black"
    />

    <label className="block mt-4">Message</label>

    <textarea
      value={body}
      onChange={(e) => setBody(e.target.value)}
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