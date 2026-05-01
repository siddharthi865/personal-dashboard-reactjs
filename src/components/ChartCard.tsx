interface Props {
  title: string;
  data: { label: string; value: number }[];
}

const ChartCard: React.FC<Props> = ({ title, data }) => {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white p-4 rounded-2xl shadow transition-colors">
      <h2 className="font-semibold mb-4">{title}</h2>

      <div className="flex items-end gap-2 h-40">
        {data.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center  justify-end h-full"
          >
            <div
              className="bg-blue-500 w-8 rounded"
              style={{ height: `${item.value}%` }}
            />
            <span className="text-xs mt-1">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartCard;
