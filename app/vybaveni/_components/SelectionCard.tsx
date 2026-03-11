import { cloneElement, type ReactElement } from 'react';
import { Check } from 'lucide-react';

interface SelectionCardProps {
  title: string;
  description?: string;
  benefits: string[];
  icon: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
}

export const SelectionCard = ({ 
  title, 
  description, 
  benefits, 
  icon, 
  isSelected, 
  onClick 
}: SelectionCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer p-8 rounded-2xl border-2 transition-all duration-300 bg-white ${
        isSelected
          ? 'border-blue-600 shadow-lg shadow-blue-50 ring-1 ring-blue-600'
          : 'border-gray-100 shadow-sm hover:border-gray-200 hover:shadow-md'
      }`}
    >
      {/* Horní část: Ikona a vizuální indikátor výběru */}
      <div className="flex justify-between items-start mb-6">
        <div className={`p-3 rounded-xl ${isSelected ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-400'}`}>
          {/* Tady se vykreslí ikona, kterou pošleš v props */}
          {cloneElement(icon as ReactElement<{ size?: number }>, { size: 32 })}
        </div>
        
        {/* Skrytý radio button efekt pro lepší UX */}
        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
          ${isSelected ? 'border-blue-600 bg-blue-600' : 'border-gray-200'}`}>
          {isSelected && <Check size={14} className="text-white" strokeWidth={3} />}
        </div>
      </div>

      {/* Textový obsah */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        {description && <p className="text-gray-500 text-sm">{description}</p>}
      </div>

      {/* Seznam benefitů s tvými modrými fajfkami */}
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start text-sm text-gray-600">
            <div className="mt-1 mr-3 shrink-0">
              {/* Tvoje ikonická modrá fajfka */}
              <div className="bg-blue-50 p-0.5 rounded-full">
                <Check size={12} className="text-blue-600" strokeWidth={3} />
              </div>
            </div>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
};