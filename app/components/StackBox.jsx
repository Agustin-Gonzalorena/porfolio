"use client";
import StackItem from "./StackItem";
import { myStack } from "@/utils/stack";

const StackBox = ({ option }) => {
  return (
    <div className="w-full flex gap-5 md:gap-x-14 md:gap-y-5 flex-wrap">
      {myStack[option].map((item) => {
        return (
          <StackItem key={item.id} SvgComponent={item.svg} text={item.name} />
        );
      })}
    </div>
  );
};

export default StackBox;
