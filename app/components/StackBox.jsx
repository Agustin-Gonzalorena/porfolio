"use client";
import StackItem from "./StackItem";
import { myStack } from "@/utils/stack";

const StackBox = () => {
  return (
    <div className="w-full flex gap-5 md:gap-16 flex-wrap">
      {myStack.map((item) => {
        return (
          <StackItem key={item.id} SvgComponent={item.svg} text={item.name} />
        );
      })}
    </div>
  );
};

export default StackBox;
