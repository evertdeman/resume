import React from "react";

interface PositionProps {
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface CompanyProps {
  companyName: string;
}

const Position = ({
  position,
  startDate,
  endDate,
  description,
}: PositionProps): React.JSX.Element => {
  return (
    <div>
      <h3>{position}</h3>
      <p>
        {startDate} - {endDate}
      </p>
      <p>{description}</p>
    </div>
  );
};

const Company = ({ companyName }: CompanyProps): React.JSX.Element => {
  return (
    <div>
      <h2>{companyName}</h2>
      <Position
        position="Software Developer"
        startDate="2019-01-01"
        endDate="2021-01-01"
        description="Developed software"
      />
      <Position
        position="Junior Developer"
        startDate="2019-01-01"
        endDate="2021-01-01"
        description="Developed software"
      />
    </div>
  );
};

export default function Experience() {
  return (
    <div>
      <Company companyName="Company A" />
      <Company companyName="Company B" />
    </div>
  );
}
