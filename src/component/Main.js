import React, { useState } from 'react';
import LNB from './LNB';
import TestMain from './TestMain';
export default function Main() {
  const [sideMenuId, setSideMenuId] = useState(-1);

  return (
    <div>
      <LNB handleChangeMenuId={setSideMenuId} />
      <TestMain sideMenuId={sideMenuId} />
    </div>
  );
}
