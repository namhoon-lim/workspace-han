import React from "react";
import { Button } from "../ui/button";

const keypadButtons = [
  { number: "1", letters: "" },
  { number: "2", letters: "ABC" },
  { number: "3", letters: "DEF" },
  { number: "4", letters: "GHI" },
  { number: "5", letters: "JKL" },
  { number: "6", letters: "MNO" },
  { number: "7", letters: "PQRS" },
  { number: "8", letters: "TUV" },
  { number: "9", letters: "WXYZ" },
];

interface KeypadProps {
  onKeyPress?: (key: string) => void;
  onDelete?: () => void;
  onSubmit?: () => void;
  submitText?: string;
  submitButtonColor?: string;
  showSubmitButton?: boolean;
}

export const Keypad: React.FC<KeypadProps> = ({
  onKeyPress,
  onDelete,
  onSubmit,
  submitText = "다음",
  submitButtonColor = "#4c67f1",
  showSubmitButton = true,
}) => {
  const handleKeyPress = (key: string) => {
    onKeyPress?.(key);
  };

  const handleDelete = () => {
    onDelete?.();
  };

  const handleSubmit = () => {
    onSubmit?.();
  };

  return (
    <div className="flex flex-col items-center w-full">
      {showSubmitButton && (
        <Button
          className="w-full h-14 text-white font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)] rounded-none"
          style={{ backgroundColor: submitButtonColor }}
          onClick={handleSubmit}
        >
          {submitText}
        </Button>
      )}

      <div className="grid grid-cols-3 gap-2 w-full p-2 bg-[#d1d5db]">
        {keypadButtons.map((key, index) => (
          <Button
            key={index}
            variant="secondary"
            className="h-16 bg-white hover:bg-gray-100 rounded-lg flex flex-col items-center justify-center gap-0 p-0"
            onClick={() => handleKeyPress(key.number)}
          >
            <span className="text-[28px] font-normal text-black leading-none">
              {key.number}
            </span>
            {key.letters && (
              <span className="text-[10px] font-medium text-black leading-none mt-0.5">
                {key.letters}
              </span>
            )}
          </Button>
        ))}
        <div className="col-start-2">
          <Button
            variant="secondary"
            className="h-16 w-full bg-white hover:bg-gray-100 rounded-lg flex items-center justify-center"
            onClick={() => handleKeyPress("0")}
          >
            <span className="text-[28px] font-normal text-black">0</span>
          </Button>
        </div>
        <Button
          variant="ghost"
          className="h-16 bg-transparent hover:bg-gray-100 rounded-lg flex items-center justify-center"
          onClick={handleDelete}
        >
          <img
            className="w-[22.63px] h-[18px]"
            alt="Delete"
            src="https://c.animaapp.com/X2DaSZUE/img/delete@2x.png"
          />
        </Button>
      </div>
    </div>
  );
};

export default Keypad;
