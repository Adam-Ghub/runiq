import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  value: string;
  label: string;
  description: string;
  Icon: LucideIcon;
}

export default function StatCard({ value, label, description, Icon }: StatCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-4">
      {/* Ikona v jemném modrém boxu */}
      <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-3">
        <Icon className="w-7 h-7 text-blue" />
      </div>

      {/* Velká statistika / Hodnota */}
      <span className="text-xl font-extrabold text-black mb-4">
        {value}
      </span>

      {/* Tučný krátký popisek 
      <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight max-w-[200px]">
        {label}
      </h3>*/}

      {/* Detailní text */}
      <p className="text-sm text-gray leading-relaxed max-w-[240px]">
        {description}
      </p>
    </div>
  );
}