type EmailFormProps = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  subject: string;
  setSubject: React.Dispatch<React.SetStateAction<string>>;
  body: string;
  setBody: React.Dispatch<React.SetStateAction<string>>;
};

export default function EmailForm({
  email,
  setEmail,
  subject,
  setSubject,
  body,
  setBody,
}: EmailFormProps) {
  return (
    <>
      <label className="block mb-2">Email Address</label>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="example@gmail.com"
        className="w-full p-3 rounded-lg text-black"
      />

      <label className="block mt-5 mb-2">Subject</label>

      <input
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Subject"
        className="w-full p-3 rounded-lg text-black"
      />

      <label className="block mt-5 mb-2">Message</label>

      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="w-full p-3 rounded-lg text-black"
      />
    </>
  );
}