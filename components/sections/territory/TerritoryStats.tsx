export default function TerritoryStats() {
  const stats = [
    {
      value: "1600–2000",
      label: "msnm",
    },

    {
      value: "San Agustín",
      label: "Huila",
    },

    {
      value: "Macizo",
      label: "Colombiano",
    },
  ];

  return (
    <div className="mt-20 grid gap-8 md:grid-cols-3">
      {stats.map((item) => (
        <div key={item.value} className="border-t border-white/20 pt-6">
          <h3 className="text-4xl font-black text-white">{item.value}</h3>

          <p className="mt-2 uppercase tracking-[0.25em] text-white/60">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
