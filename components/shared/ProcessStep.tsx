interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

export default function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm">
        {number}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
