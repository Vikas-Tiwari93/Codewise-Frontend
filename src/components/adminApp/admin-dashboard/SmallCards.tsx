import React from "react";
type CardType = "student" | "class";
type SmallCardPropTypes = {
  type: CardType;
  size?: "medium" | "large";
};
export default function SmallCards({
  type,
  size = medium,
}: SmallCardPropTypes) {
  return <div>SmallCards</div>;
}
