import { IconCalendarRepeat, IconHeart, IconMedal2, IconUserPlus, IconAffiliate } from '@tabler/icons-react';

export default function OfferCard({ title, description, icon }) {
  const iconComponents = {
    calendar: IconCalendarRepeat,
    heart: IconHeart,
    medal: IconMedal2,
    network: IconUserPlus,
    companies: IconAffiliate
  };

  const IconComponent = iconComponents[icon] || IconHeart;

  return (
    <div className="max-w-sm p-6 bg-[#D8FCDF] border-2 border-black-200 rounded-xl shadow-xl dark:bg-gray-800 dark:border-gray-700 items-center justify-center flex flex-col">
      <IconComponent strokeWidth="1.5" className="w-[5em] h-[5em]" />
      <h5 className="mb-2 mt-6 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
        {title}
      </h5>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-center">
        {description}
      </p>
    </div>
  );
}
