type WhatsAppFormProps = {
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
};

export default function WhatsAppForm({
  phone,
  setPhone,
  message,
  setMessage,
}: WhatsAppFormProps) {
  return (
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
  );
}