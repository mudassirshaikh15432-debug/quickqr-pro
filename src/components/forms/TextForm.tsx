type TextFormProps = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

export default function TextForm({
  text,
  setText,
}: TextFormProps) {
  return (
    <>
      <label className="block mb-2">
        Enter Text
      </label>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write anything..."
        className="w-full p-3 rounded-lg text-black"
      />
    </>
  );
}