interface ItemComponentProps {
  title: string;
  description: string;
}

export const Card: React.FC<ItemComponentProps> = ({ title, description }) => {
  return (
    <div className="border border-red h-32 rounded-xl">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};