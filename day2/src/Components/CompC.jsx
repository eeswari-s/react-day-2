import React from 'react'

 function CompC() {
  const arrobj = [
    { id: 1, name: "sachin", marks: 100 },{ id: 2, name: "virat", marks: 200 },{ id: 3, name: "rohit", marks: 300 }
  ];

  return (
    <div>
      {arrobj.map((item) => (
        <p key={item.id}>
          {item.id} - {item.name} - {item.marks}
        </p>
      ))}
    </div>
  );
}
export default CompC 
