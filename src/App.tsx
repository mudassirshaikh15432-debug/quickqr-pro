import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import Header from "./components/layout/Header";
import TypeTabs from "./components/tabs/TypeTabs";
import UrlForm from "./components/forms/UrlForm";
import WhatsAppForm from "./components/forms/WhatsAppForm";
import EmailForm from "./components/forms/EmailForm";
import PhoneForm from "./components/forms/PhoneForm";
import TextForm from "./components/forms/TextForm";
import WifiForm from "./components/forms/WifiForm";
import UpiForm from "./components/forms/UpiForm";
import QRPreview from "./components/qr/QRPreview";
import VCardForm from "./components/forms/VCardForm";
import MapForm from "./components/forms/MapForm";

type Tab =
  | "url"
  | "whatsapp"
  | "email"
  | "phone"
  | "text"
  | "wifi"
  | "upi"
  | "vcard"
  | "map";

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("url");
  const [url, setUrl] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [wifiName, setWifiName] = useState("");
  const [wifiPassword, setWifiPassword] = useState("");
  const [encryption, setEncryption] = useState("WPA");
  const [upiId, setUpiId] = useState("");
  const [payeeName, setPayeeName] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState(""); 
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
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
    : activeTab === "phone"
    ? `tel:${phoneNumber}`
    : activeTab === "text"
    ? text || "Enter some text"
    : activeTab === "wifi"
    ? `WIFI:T:${encryption};S:${wifiName};P:${wifiPassword};;`
    : activeTab === "upi"
    ? `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
    payeeName)}&am=${amount}&tn=${encodeURIComponent(note)}`
    : activeTab === "vcard"
?    [
  "BEGIN:VCARD",
  "VERSION:3.0",
  `FN:${fullName}`,
  `TEL:${phoneNumber}`,
  `EMAIL:${email}`,
  `ORG:${company}`,
  `TITLE:${jobTitle}`,
  `URL:${website}`,
  `ADR:${address}`,
  "END:VCARD",
].join("\n")
    : activeTab === "map"
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`
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
           <UrlForm url={url} setUrl={setUrl} />
           )}

           {activeTab === "whatsapp" && (
           <WhatsAppForm
           phone={phone}
           setPhone={setPhone}
           message={message}
           setMessage={setMessage}
           />
          )}
           {activeTab === "email" && (
           <EmailForm
            email={email}
            setEmail={setEmail}
            subject={subject}
            setSubject={setSubject}
            body={body}
            setBody={setBody}
           />
           )}
           {activeTab === "phone" && (
           <PhoneForm
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            />
            )}

            {activeTab === "text" && (
            <TextForm
            text={text}
            setText={setText}
             />
            )}
           {activeTab === "wifi" && (
           <WifiForm
            wifiName={wifiName}
            setWifiName={setWifiName}
            wifiPassword={wifiPassword}
            setWifiPassword={setWifiPassword}
            encryption={encryption}
            setEncryption={setEncryption}
  />
)}
   {activeTab === "upi" && (
  <UpiForm
    upiId={upiId}
    setUpiId={setUpiId}
    payeeName={payeeName}
    setPayeeName={setPayeeName}
    amount={amount}
    setAmount={setAmount}
    note={note}
    setNote={setNote}
  />
)}
         {activeTab === "vcard" && (
  <VCardForm
    fullName={fullName}
    setFullName={setFullName}
    phoneNumber={phoneNumber}
    setPhoneNumber={setPhoneNumber}
    email={email}
    setEmail={setEmail}
    company={company}
    setCompany={setCompany}
    jobTitle={jobTitle}
    setJobTitle={setJobTitle}
    website={website}
    setWebsite={setWebsite}
    address={address}
    setAddress={setAddress}
  />
)}
    {activeTab === "map" && (
    <MapForm
    location={location}
    setLocation={setLocation}
     />
    )}
          </div>

          {/* Right */}
         <QRPreview
         qrValue={qrValue}
         qrRef={qrRef}
         downloadPNG={downloadPNG}
/>      

        </div>

      </div>
    </div>
  );
}