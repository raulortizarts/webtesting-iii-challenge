// Test away!

import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Controls from "./Controls";

test("<Controls /> snapshot", async () => {
    const wrapper = rtl.render(<Controls />)
    //await wrapper.findAllByAltText(/dog/i);
  
    // Saves our snapshot to disk, or checks an existing snapshot on the disk.
    // If it looks at all different, the test will fail.
    expect(wrapper.asFragment()).toMatchSnapshot()
  })