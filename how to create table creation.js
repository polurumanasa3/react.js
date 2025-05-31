import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
    <center>
    <h1>TIME TABLE</h1>
    <table border='1' cellPadding='10' cellSpacing='0' style={{width:'100%'}}>
      <tr>
        <th>
          Day
        </th>
        <th>
          9:00AM
        </th>
        <th>
          9:50AM
        </th>
        <th>
          10:50AM
        </th>
        <th>
          10:50AM - 11:00AM
        </th>
        <th>
          11:00AM -12:50PM
        </th>
      </tr>
      <tr>
        <th>
          MON
        </th>
        <th>
          AI
        </th>
        <th>
          DS
        </th>
        <th>
          EMBEDDED SYSTEMS
        </th>
        <th rowSpan={6}>
          B<br></br>
          R<br></br>
          E<br></br>
          A<br></br>
          K<br></br>
        </th>
        <th>
          Compiler Designing
        </th>
      </tr>
      <tr>
        <th>
          TUE
        </th>
        <th>
          Compiler Designing
        </th>
        <th>
          AI
        </th>
        <th>
          EMBEDDED SYSTEMS
        </th>
        
        <th>
          SDLC
        </th>
      </tr>
      <tr>
        <th>
          WED
        </th>
        <th>
          Compiler Designing
        </th>
        <th>
          AI
        </th>
        <th>
          EMBEDDED SYSTEMS
        </th>
        
        <th>
          SDLC
        </th>
      </tr>
      <tr>
        <th>
          THU
        </th>
        <th>
          Compiler Designing
        </th>
        <th>
          AI
        </th>
        <th>
          EMBEDDED SYSTEMS
        </th>
        
        <th>
          SDLC
        </th>
      </tr>
      <tr>
        <th>
          FRI
        </th>
        <th>
          Compiler Designing
        </th>
        <th>
          AI
        </th>
        <th>
          EMBEDDED SYSTEMS
        </th>
        
        <th>
          SDLC
        </th>
      </tr>
      <tr>
        <th>
          SAT
        </th>
        <th>
          Compiler Designing
        </th>
        <th>
          AI
        </th>
        <th>
          EMBEDDED SYSTEMS
        </th>
        
        <th>
          SDLC
        </th>
      </tr>
    </table>
    </center>
    </>
  );
}

export default App;