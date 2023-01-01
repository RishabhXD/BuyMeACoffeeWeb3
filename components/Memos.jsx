import React, { useState, useEffect } from "react";
import MemoCard from "./MemoCard";

const Memos = ({ state }) => {
  const [memos, setMemos] = useState([]);
  const { contract } = state;
  useEffect(() => {
    const memosMessage = async () => {
      const myMemos = await contract.getMemos();
      setMemos(myMemos);
    };
    contract && memosMessage();
  }, [contract]);

  return (
    <div>
      <p className="text-2xl capitalize text-center p-5 font-mono">Messages</p>
      <div className="grid grid-col-2 sm:grid-cols-1 md:grid-cols-1 gap-6 pb-6">
        {memos.map((memo) => {
          return (
            <MemoCard
              key={memo.timestamp}
              name={memo.name}
              message={memo.message}
              timestamp={String(memo.timestamp)}
              from={memo.from}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Memos;
