import React from 'react';

import GetWorks from '../get-works';
import WorkThubnail from '../work-thumbnail';

function ListWorks() {
  return (
    <main className="list-works">
      <div className="container container--full">
        <ul>
          {
            Object.keys(GetWorks).map((work, key) => (
              <WorkThubnail
                key={key}
                title={GetWorks[work].title}
                category={GetWorks[work].category}
                link={GetWorks[work].link}
                image={GetWorks[work].image}
                detail={GetWorks[work].detail}
              />
            ))
          }
        </ul>
      </div>
    </main>
  );
}

export default ListWorks;
