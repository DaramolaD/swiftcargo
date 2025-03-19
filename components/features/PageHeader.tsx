import React from "react";

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <section className="flex items-center justify-center bg-blue-100 w-full pt-52 pb-20">
      <h1 className="text-4xl font-medium text-Dark_One">{title}</h1>
    </section>
  );
};

export default PageHeader;
