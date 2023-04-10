import React from 'react';
import './forecast.css'
import { Accordion } from 'react-accessible-accordion';

const Forecast = () => {
 return (
  <div>
 <label className='title'>Daily</label>
 <Accordion allowZeroExpanded></Accordion>
  </div>
 );
};

export default Forecast;

/*
The Accordion component creates an accessible accordion widget that allows users to toggle the visibility of the content sections within it. The allowZeroExpanded prop specifies whether the accordion should allow all sections to be collapsed, or if one section must always remain expanded.

In this case, allowZeroExpanded is set to true, which means that all sections in the accordion can be collapsed, leaving none of them expanded. If allowZeroExpanded were set to false, then at least one section would always be expanded, and the user would not be able to collapse all sections at once.
*/