import React from 'react';

interface TallerLeftProps {
  title: string;
  imageSrc: string;
  textItems: string[];
}

const TallerLeft: React.FC<TallerLeftProps> = ({ title, imageSrc, textItems }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex w-full py-4 h-100 bg-[--beige-clear]">
        <div className="w-full">
          <p className="p-6 ps-[10%] text-6xl text-[--brown]">{title}</p>
          <div className="p-6 ps-[8%] w-full border-t-2 border-[--beige]">
            {textItems.map((item, index) => (
              <span key={index} className="flex items-center monserrat text-2xl text-[--gray]">
                <img src="/icons/aceitunas-icon.png" alt="aceitunas" className="w-10" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-1">
        <img src={imageSrc} alt="" className="w-[90vw] border-[40px] border-[--brown] rounded-xl" />
      </div>
    </div>
  );
};

export default TallerLeft;