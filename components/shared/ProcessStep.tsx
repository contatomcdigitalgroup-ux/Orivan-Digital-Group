interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

export default function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-9 h-9 rounded-full border border-[#4ADE80]/40 text-[#4ADE80] flex items-center justify-center font-semibold text-sm">
        {number}
      </div>
      <div>
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm text-[#9CA3AF] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
