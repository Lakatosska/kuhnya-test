'use client';

import { useState } from "react";
import { HeaderUserWidget } from "../HeaderUserWidget/HeaderUserWidget"

export const Header = () => {

  const [HeaderUserWidgetOpen, setHeaderUserWidgetOpen] = useState(true);

  return (
    <header>
      {
        HeaderUserWidgetOpen && <HeaderUserWidget close={() => setHeaderUserWidgetOpen(false)}/>
      }
    </header>
  )
}