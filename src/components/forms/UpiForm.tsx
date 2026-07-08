type UpiFormProps = {
  upiId: string;
  setUpiId: React.Dispatch<React.SetStateAction<string>>;
  payeeName: string;
  setPayeeName: React.Dispatch<React.SetStateAction<string>>;
  amount: string;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
  note: string;
  setNote: React.Dispatch<React.SetStateAction<string>>;
};

export default function UpiForm({
  upiId,
  setUpiId,
  payeeName,
  setPayeeName,
  amount,
  setAmount,
  note,
  setNote,
}: UpiFormProps) {
  return (
    <>
      <label className="block mb-2">UPI ID</label>
      <input
        value={upiId}
        onChange={(e) => setUpiId(e.target.value)}
        placeholder="name@oksbi"
        className="w-full p-3 rounded-lg text-black"
      />

      <label className="block mt-4 mb-2">Payee Name</label>
      <input
        value={payeeName}
        onChange={(e) => setPayeeName(e.target.value)}
        placeholder="Mudassir"
        className="w-full p-3 rounded-lg text-black"
      />

      <label className="block mt-4 mb-2">Amount</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="100"
        className="w-full p-3 rounded-lg text-black"
      />

      <label className="block mt-4 mb-2">Note</label>
      <input
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Payment"
        className="w-full p-3 rounded-lg text-black"
      />
    </>
  );
}