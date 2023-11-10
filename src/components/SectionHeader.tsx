import React from "react";

type Props = {
  title: string;
};

const SectionHeader = ({ title }: Props) => {
  return (
    <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
      {title}
    </h3>
  );
};

export default SectionHeader;
